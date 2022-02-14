import type { NextPage } from "next";
import { HomeLayout } from "../layouts";
import { Seo } from "~/containers";

const Home: NextPage = () => {
  return (
    <>
      <Seo />
      <HomeLayout />
    </>
  );
};

export default Home;
