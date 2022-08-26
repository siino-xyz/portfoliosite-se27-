import { style } from "@vanilla-extract/css";
import Image from "next/image";
import { sprinkles } from "styles";
import {
  imageAspect_arbitrary,
  imageAspect_square,
  imageAspect_video,
} from "./ImageSizes.css";

const imageClassMap = {
  square: "imageAspect_square",
  video: "imageAspect_video",
  arbitary: "imageAspect_arbitrary",
} as const;

type ImageSizesProps = {
  src: string;
  alt: string;
  imageClassMap?: keyof typeof imageClassMap;
};

const ImageSizes = ({ src, alt, imageClassMap }: ImageSizesProps) => {
  return (
    <div className={}>
      <Image layout="fill" objectFit="contain" alt={alt} src={src} />
    </div>
  );
};

export default ImageSizes;
