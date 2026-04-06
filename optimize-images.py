#!/usr/bin/env python3
"""
Image optimization script for Rishan-Tours project
Converts JPG/PNG to WebP and creates responsive image variants
"""

import os
from pathlib import Path
from PIL import Image
import json

# Configuration
ASSETS_DIR = Path("src/assets")
OPTIMIZED_DIR = Path("src/assets/optimized")
MAX_WIDTH = 1200
MAX_SIZE_KB = 300
QUALITY = 80  # WebP quality (1-100, default 80 is good for web)

# Responsive image breakpoints
BREAKPOINTS = [480, 768, 1024, 1200]

def ensure_dirs():
    """Create necessary directories"""
    OPTIMIZED_DIR.mkdir(parents=True, exist_ok=True)

def get_image_dimensions(img_path):
    """Get original image dimensions"""
    with Image.open(img_path) as img:
        return img.size

def optimize_image(img_path, output_dir=OPTIMIZED_DIR):
    """
    Optimize single image and create responsive variants
    Returns dict with paths and metadata
    """
    img_name = img_path.stem
    result = {
        "original": str(img_path),
        "original_size_kb": round(img_path.stat().st_size / 1024, 2),
        "variants": {}
    }
    
    with Image.open(img_path) as img:
        original_width, original_height = img.size
        result["original_dimensions"] = f"{original_width}x{original_height}"
        
        # Create variants for each breakpoint
        for bp in BREAKPOINTS:
            if bp >= original_width:
                continue
                
            # Calculate new height maintaining aspect ratio
            ratio = bp / original_width
            new_height = int(original_height * ratio)
            
            # Resize
            resized = img.resize((bp, new_height), Image.Resampling.LANCZOS)
            
            # Save as WebP
            output_path = output_dir / f"{img_name}-{bp}w.webp"
            resized.save(output_path, "WEBP", quality=QUALITY, method=6)
            
            file_size_kb = round(output_path.stat().st_size / 1024, 2)
            result["variants"][f"{bp}w"] = {
                "path": str(output_path),
                "size_kb": file_size_kb,
                "dimensions": f"{bp}x{new_height}"
            }
            
            print(f"  ✓ {img_name}-{bp}w.webp ({bp}x{new_height}) - {file_size_kb} KB")
        
        # Also save at original size as WebP for largest screens
        output_path = output_dir / f"{img_name}-original.webp"
        img_copy = img.copy()
        
        # If original is larger than MAX_WIDTH, resize it
        if original_width > MAX_WIDTH:
            ratio = MAX_WIDTH / original_width
            new_height = int(original_height * ratio)
            img_copy = img_copy.resize((MAX_WIDTH, new_height), Image.Resampling.LANCZOS)
            output_path = output_dir / f"{img_name}-{MAX_WIDTH}w.webp"
            bp = MAX_WIDTH
        else:
            bp = original_width
            
        img_copy.save(output_path, "WEBP", quality=QUALITY, method=6)
        file_size_kb = round(output_path.stat().st_size / 1024, 2)
        result["variants"][f"{bp}w"] = {
            "path": str(output_path),
            "size_kb": file_size_kb,
            "dimensions": f"{bp}x{int(original_height if bp == original_width else original_height * (bp / original_width))}"
        }
        
        print(f"  ✓ {img_name}-{bp}w.webp ({bp}x{int(original_height if bp == original_width else original_height * (bp / original_width))}) - {file_size_kb} KB")
    
    return result

def main():
    print("🖼️  Starting image optimization...\n")
    
    ensure_dirs()
    
    # Find all JPG and PNG files
    image_files = list(ASSETS_DIR.glob("*.jpg")) + list(ASSETS_DIR.glob("*.png"))
    image_files = [f for f in image_files if f.is_file()]
    
    print(f"Found {len(image_files)} images to optimize:\n")
    
    metadata = {}
    
    for img_path in sorted(image_files):
        print(f"Processing: {img_path.name}")
        try:
            result = optimize_image(img_path)
            metadata[img_path.stem] = result
            print()
        except Exception as e:
            print(f"  ✗ Error processing {img_path.name}: {e}\n")
    
    # Save metadata
    metadata_path = OPTIMIZED_DIR / "metadata.json"
    with open(metadata_path, "w") as f:
        json.dump(metadata, f, indent=2)
    
    print(f"\n✅ Optimization complete!")
    print(f"Metadata saved to: {metadata_path}")
    print(f"\n📊 Summary:")
    
    total_original = sum(m["original_size_kb"] for m in metadata.values())
    total_optimized = sum(
        sum(v["size_kb"] for v in m["variants"].values())
        for m in metadata.values()
    )
    
    print(f"  Original total: {total_original:.2f} KB")
    print(f"  Optimized total: {total_optimized:.2f} KB")
    print(f"  Reduction: {((1 - total_optimized/total_original) * 100):.1f}%")
    
    print(f"\n💡 Next steps:")
    print(f"  1. Review optimized images in {OPTIMIZED_DIR}/")
    print(f"  2. Update import paths in components")
    print(f"  3. Use the Image helper component with srcset")
    print(f"  4. Test on various device sizes")

if __name__ == "__main__":
    main()
