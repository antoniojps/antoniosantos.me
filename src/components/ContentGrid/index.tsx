import React from "react";
import Image from "next/image";
import ImgCardUa from "../../../public/card-ua.png";
import ImgCardTvg from "../../../public/card-tvg.png";
import ImgCardYtrank from "../../../public/card-ytrank.png";
import { Grid, A, B, C } from "./styles";
import Link from "next/link";

export const ContentGrid = () => {
  return (
    <Grid>
      <A>
        <Link href="/portfolio#ytrank" passHref>
          <a>
            <Image
              src={ImgCardYtrank}
              alt="Youtube Rank Checker Website Mockup"
              layout="responsive"
              quality={100}
              placeholder="blur"
            />
          </a>
        </Link>
      </A>
      <B>
        <Link href="/portfolio#tvg" passHref>
          <a>
            <Image
              src={ImgCardTvg}
              alt="Mobile phone with horse racing app"
              layout="responsive"
              quality={100}
              placeholder="blur"
            />
          </a>
        </Link>
      </B>
      <C>
        <Link href="/portfolio#editor-custom-cms-for-the-university-of-aveiro" passHref>
          <a>
            <Image
              src={ImgCardUa}
              alt="Two pages of the UA CMS"
              layout="responsive"
              priority
              quality={100}
              placeholder="blur"
            />
          </a>
        </Link>
      </C>
    </Grid>
  );
};

export default ContentGrid;
