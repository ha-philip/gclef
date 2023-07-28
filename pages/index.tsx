import Introduce from "@/components/Introduce";
import Jury from "@/components/Jury";
import Regulation from "@/components/Regulation";
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
      <div className="lg:pt-64 lg:pb-[30rem] py-60 bg-cover bg-no-repeat flex flex-col justify-end items-center"
        style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)), url('/bgindex.jpg')"}}>
          <div className="flex justify-center items-center gap-5">
            <span className="lg:w-16 w-8 h-[0.2rem] bg-[#fea116]"></span>
            <h1 className="text-white lg:text-2xl text-base tracking-widest font-thin">The 3rd Online</h1>
            <h1 className="text-white lg:text-5xl text-2xl tracking-widest font-thin">&quot;G-Clef&quot;</h1>
            <span className="lg:w-16 w-8 h-[0.2rem] bg-[#fea116]"></span>
          </div>
          <h1 className="text-white font-bold lg:text-6xl text-3xl mt-10 text-center tracking-wide">International Music Competition</h1>
          <button className="bg-[#fea116] px-12 py-4 text-white tracking-tight lg:text-xl text-lg mt-10 hover:bg-[#fdad35] transition">APPLY</button>
      </div>
      <Introduce/>
      <Jury/>
      <Regulation/>
    </>
  );
}
