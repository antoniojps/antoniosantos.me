import React from "react";
import Image from "next/image";
import ImgSurfSunset from "../../../public/surf-sunset.png";
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
          src={ImgSurfSunset}
          alt="Surfer falling from wave, sunset, colored board"
          quality={100}
          placeholder="blur"
        />
      </B>
    </Aside>
  );
};

export default ContentSplit;
