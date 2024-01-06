import React from "react";
import Image from "next/image";
import ImgSwell from "../../../public/swell.png";
import ImgSurfFish from "../../../public/surf-fish.png";
import { Aside, A, B } from "./styles";

export const ContentSplit = () => {
  return (
    <Aside>
      <A>
        <Image
          src={ImgSurfFish}
          alt="Surfer in a wave, blue, white board"
          quality={100}
          placeholder="blur"
        />
      </A>
      <B>
        <Image
          src={ImgSwell}
          alt="Dog, tongue out. Jack Russel. Laying in grass with tenis ball."
          quality={100}
          placeholder="blur"
        />
      </B>
    </Aside>
  );
};

export default ContentSplit;
