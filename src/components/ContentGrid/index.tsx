import React from "react";
import Image from "next/image";
import ImgCardUa from "../../../public/card-ua.png";
import ImgCardTvg from "../../../public/card-tvg.png";
import ImgCardYtrank from "../../../public/card-ytrank.png";
import { Grid, A, B, C } from "./styles";

export const ContentGrid = () => {
  return (
    <Grid>
      <A>
        <Image
          src={ImgCardYtrank}
          alt="Youtube Rank Checker Website Mockup"
          layout="responsive"
          quality={100}
          placeholder="blur"
        />
      </A>
      <B>
        <Image
          src={ImgCardTvg}
          alt="Mobile phone with horse racing app"
          layout="responsive"
          quality={100}
          placeholder="blur"
        />
      </B>
      <C>
        <Image
          src={ImgCardUa}
          alt="Two pages of the UA CMS"
          layout="responsive"
          priority
          quality={100}
          placeholder="blur"
        />
      </C>
    </Grid>
  );
};

export default ContentGrid;
