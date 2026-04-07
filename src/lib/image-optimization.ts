// Import all images
import elephantImg from "@/assets/elephant.jpg";
import galleFortImg from "@/assets/galle-fort.jpg";
import galleLibraryImg from "@/assets/galle-library.jpg";
import lotusTowerImg from "@/assets/lotus-tower.jpg";
import mirissaBeachImg from "@/assets/mirissa-beach.jpg";
import nineArchBridgeRealImg from "@/assets/nine-arch-bridge-real.jpg";
import nineArchBridgeImg from "@/assets/nine-arch-bridge.jpg";
import oceanBoatsImg from "@/assets/ocean-boats.jpg";
import palmBeachImg from "@/assets/palm-beach.jpg";
import sigiriyaAerialImg from "@/assets/sigiriya-aerial.jpg";
import sigiriyaImg from "@/assets/sigiriya.jpg";
import teaPlantationImg from "@/assets/tea-plantation.jpg";
import templeKandyImg from "@/assets/temple-kandy.jpg";
import waterfallFriendsImg from "@/assets/waterfall-friends.jpg";

/**
 * Valid image names available in /assets/ folder
 */
export type ImageName = 
  | "elephant"
  | "galle-fort"
  | "galle-library"
  | "lotus-tower"
  | "mirissa-beach"
  | "nine-arch-bridge-real"
  | "nine-arch-bridge"
  | "ocean-boats"
  | "palm-beach"
  | "sigiriya-aerial"
  | "sigiriya"
  | "tea-plantation"
  | "temple-kandy"
  | "waterfall-friends";

// Map of image names to imported image URLs
const imageMap: Record<ImageName, string> = {
  elephant: elephantImg,
  "galle-fort": galleFortImg,
  "galle-library": galleLibraryImg,
  "lotus-tower": lotusTowerImg,
  "mirissa-beach": mirissaBeachImg,
  "nine-arch-bridge-real": nineArchBridgeRealImg,
  "nine-arch-bridge": nineArchBridgeImg,
  "ocean-boats": oceanBoatsImg,
  "palm-beach": palmBeachImg,
  "sigiriya-aerial": sigiriyaAerialImg,
  sigiriya: sigiriyaImg,
  "tea-plantation": teaPlantationImg,
  "temple-kandy": templeKandyImg,
  "waterfall-friends": waterfallFriendsImg,
};

/**
 * Gets the image source path from imported assets
 * @param imageName - Name of image without extension
 * @returns URL to the JPG image (resolved by Vite)
 */
export function getMainSource(imageName: ImageName): string {
  return imageMap[imageName] || "";
}
