// A small, transparent rule-based scorer used to power the interactive
// demo panel. It is NOT a trained model — it compares the entered field
// readings against typical agronomic ranges for each crop and returns a
// closeness score. Good enough to make the UI feel real; labeled as a
// demo in the product copy so nothing here is presented as production data.

export const CROPS = [
  {
    name: "Rice",
    note: "Thrives in humid, waterlogged conditions with high nitrogen demand.",
    ranges: { N: [80, 120], P: [35, 60], K: [35, 45], temp: [22, 32], humidity: [70, 95], ph: [5.5, 7.0] },
  },
  {
    name: "Maize",
    note: "Prefers moderate nitrogen, warm days and well-drained loam.",
    ranges: { N: [60, 100], P: [30, 55], K: [15, 40], temp: [20, 30], humidity: [50, 75], ph: [5.8, 7.2] },
  },
  {
    name: "Chickpea",
    note: "Fixes its own nitrogen — performs best on lower N, cooler nights.",
    ranges: { N: [10, 40], P: [55, 80], K: [70, 90], temp: [15, 25], humidity: [15, 40], ph: [6.0, 7.8] },
  },
  {
    name: "Cotton",
    note: "Deep-rooted and heat-tolerant, wants steady potassium.",
    ranges: { N: [90, 130], P: [35, 60], K: [15, 35], temp: [24, 34], humidity: [55, 75], ph: [5.8, 7.5] },
  },
  {
    name: "Mustard",
    note: "A cool-season crop that tolerates leaner, drier soils.",
    ranges: { N: [20, 45], P: [15, 35], K: [10, 25], temp: [10, 22], humidity: [30, 55], ph: [6.0, 7.5] },
  },
  {
    name: "Banana",
    note: "Heavy feeder — wants high potassium and constant warmth.",
    ranges: { N: [90, 120], P: [70, 100], K: [180, 220], temp: [24, 32], humidity: [70, 90], ph: [5.8, 6.8] },
  },
];

function closeness(value, [low, high]) {
  if (value >= low && value <= high) return 1;
  const span = high - low || 1;
  const distance = value < low ? low - value : value - high;
  return Math.max(0, 1 - distance / (span * 1.4));
}

export function recommendCrop(inputs) {
  const scored = CROPS.map((crop) => {
    const fields = ["N", "P", "K", "temp", "humidity", "ph"];
    const weights = { N: 1, P: 1, K: 1, temp: 0.9, humidity: 0.9, ph: 1.1 };
    let total = 0;
    let weightSum = 0;
    fields.forEach((f) => {
      total += closeness(inputs[f], crop.ranges[f]) * weights[f];
      weightSum += weights[f];
    });
    return { ...crop, score: total / weightSum };
  });

  scored.sort((a, b) => b.score - a.score);
  const top = scored[0];
  const runnerUp = scored[1];

  // Spread the top score against the runner-up so the confidence reads
  // meaningfully rather than every result landing near the same number.
  const confidence = Math.round(
    Math.min(97, Math.max(52, top.score * 100 - (1 - (top.score - runnerUp.score)) * 6))
  );

  return { crop: top, confidence, runnerUp };
}
