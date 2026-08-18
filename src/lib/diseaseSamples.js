// Pre-scored sample scans for the disease-detection demo. These are
// illustrative sample results (drawn as SVG leaves, not photographs)
// so the UI can show the interaction pattern without claiming a live
// image-recognition backend that doesn't exist in this build.

export const DISEASE_SAMPLES = [
  {
    id: "healthy",
    label: "Sample A",
    crop: "Tomato",
    verdict: "Healthy",
    confidence: 96,
    tone: "healthy",
    detail: "Leaf tissue shows even chlorophyll density, no lesion patterns detected.",
    action: "No action needed. Recheck in 7 days.",
  },
  {
    id: "blight",
    label: "Sample B",
    crop: "Potato",
    verdict: "Early blight",
    confidence: 91,
    tone: "warning",
    detail: "Concentric ring lesions on lower leaves, consistent with Alternaria solani.",
    action: "Apply targeted fungicide within 48 hours; remove affected foliage.",
  },
  {
    id: "rust",
    label: "Sample C",
    crop: "Wheat",
    verdict: "Leaf rust",
    confidence: 88,
    tone: "warning",
    detail: "Orange pustule clusters on upper leaf surface, spreading along veins.",
    action: "Isolate affected rows and apply rust-resistant treatment plan.",
  },
];
