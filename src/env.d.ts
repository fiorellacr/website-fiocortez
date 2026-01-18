/// <reference types="astro/client" />

interface ImageMetadata {
  src: string;
  width: number;
  height: number;
  format: string;
}

declare module "*.webp" {
  const metadata: ImageMetadata;
  export default metadata;
}

declare module "*.png" {
  const metadata: ImageMetadata;
  export default metadata;
}

declare module "*.jpg" {
  const metadata: ImageMetadata;
  export default metadata;
}

declare module "*.jpeg" {
  const metadata: ImageMetadata;
  export default metadata;
}

declare module "*.gif" {
  const metadata: ImageMetadata;
  export default metadata;
}

declare module "*.svg" {
  const metadata: ImageMetadata;
  export default metadata;
}
