import Apply from "@/components/Apply";
import Contact from "@/components/Contact";
import Introduce from "@/components/Introduce";
import Jury from "@/components/Jury";
import Notice from "@/components/Notice";
import Regulation from "@/components/Regulation";
import { motion } from "framer-motion";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [overlay, setOverlay] = useState<boolean>(false);
  return (
    <>
      <Head>
        <title>G-Clef</title>
      </Head>
      <div
        className="lg:pt-64 lg:pb-[30rem] py-60 bg-cover bg-no-repeat flex flex-col justify-end items-center bg-fixed"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)), url('/bgindex.jpg')",
        }}
      >
        <div className="flex justify-center items-center gap-5">
          <span className="lg:w-16 w-8 h-[0.2rem] bg-[#fea116]"></span>
          <h1 className="text-white lg:text-2xl text-base tracking-widest font-thin">
            The 4th Online
          </h1>
          <h1 className="text-white lg:text-5xl text-2xl tracking-widest font-thin">
            &quot;G-Clef&quot;
          </h1>
          <span className="lg:w-16 w-8 h-[0.2rem] bg-[#fea116]"></span>
        </div>
        <h1 className="text-white font-bold lg:text-6xl text-3xl mt-10 text-center tracking-wide">
          International Music Competition
        </h1>
        <button
          onClick={() => setOverlay(true)}
          className="bg-[#fea116] px-12 py-4 text-white tracking-tight lg:text-xl text-lg mt-10 hover:bg-[#fdad35] transition"
        >
          APPLY
        </button>
      </div>
      <Introduce />
      <Jury />
      <Regulation />
      <Notice />
      <Contact />

      {overlay ? (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-[rgba(0,0,0,0.6)] fixed w-full h-full top-0 z-30 transition flex flex-col justify-center items-center px-3"
          >
            <h2
              className="cursor-pointer pb-2 lg:w-[75rem] w-full flex justify-end items-end"
              onClick={() => setOverlay(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="white"
                className="lg:w-8 lg:h-8 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </h2>
            <Apply />
          </motion.div>
        </>
      ) : null}
    </>
  );
}
