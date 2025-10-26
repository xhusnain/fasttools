# AI Models Directory

This directory contains the AI model used for background removal.

## Model

- **u2net.onnx** (167.84 MB) - U²-Net segmentation model for background detection and enhanced processing

## Download Source

- **U²-Net**: https://github.com/danielgatis/rembg/releases/download/v0.0.0/u2net.onnx

## Automatic Download

Model is automatically downloaded during the build process using:

```bash
pnpm run download-models
```

Or with npm:

```bash
npm run download-models
```

## Manual Download

If you need to download the model manually:

```bash
# Navigate to the models directory
cd public/models

# Download U²-Net
curl -L -o u2net.onnx "https://github.com/danielgatis/rembg/releases/download/v0.0.0/u2net.onnx"
```

## File Size

- Total size: ~168 MB
- This file is not committed to git due to size limitations
- Model is downloaded automatically during build/deployment

## Note

Make sure the model file exists before running the application, otherwise the background remover will not work. Run `pnpm run download-models` to download the model.

