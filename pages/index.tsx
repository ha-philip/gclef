import { motion } from "framer-motion";
import Head from "next/head";

const banner: string = "/main_bg.png";

export default function Home() {
  const goEditor = () => {
    location.href = "https://app.surroundio.org/";
  };
  return (
    <>
      <Head>
        <title>G-Clef</title>
      </Head>
      <div className="pt-32 pb-32 lg:px-24 px-8 bg-[whitesmoke] flex lg:justify-between lg:items-center lg:flex-row flex-col justify-center">
        <div>
          <div className="absolute lg:top-80 lg:left-56 top-60 lg:space-y-10 space-y-5">
            <h1 className="text-white lg:text-5xl text-3xl">
              The 3rd online
              <br />
              <span className="text-blue-400 font-bold lg:text-7xl text-5xl">
                G-clef
              </span>
            </h1>
            <p className="text-white lg:text-3xl text-sm">
              International Music Competition
            </p>
          </div>
          <motion.div
            className="lg:w-[34rem] lg:h-[34rem] bg-cover w-[20rem] h-[20rem]"
            style={{
              backgroundImage: `url(${banner})`,
            }}
          ></motion.div>
        </div>
      </div>
    </>
  );
}
