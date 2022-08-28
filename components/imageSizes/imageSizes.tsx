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
  src: any;
  alt: string;
  imageClassMap?: keyof typeof imageClassMap;
};

const ImageSizes = ({ src, alt, imageClassMap }: ImageSizesProps) => {
  return (
    <div className={imageAspect_video}>
      <Image layout="fill" objectFit="contain" alt={alt} src={src} />
    </div>
  );
};

export default ImageSizes;
