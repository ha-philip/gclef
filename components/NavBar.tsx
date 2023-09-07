import { useRouter } from "next/router";
import { cls } from "./utils";
import { motion, useAnimation, useScroll } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const ScrollUp = {
  top: {
    opacity: "0",
  },
  scroll: {
    opacity: "1",
  },
};

export default function NavigationBar() {
  const router = useRouter();
  const { scrollY } = useScroll();
  const navAnimation = useAnimation();
  const buttonAnimation = useAnimation();
  const [lanToggle, set_lanToggle] = useState<"KR" | "EN">("EN");
  const [toggleMenu, set_toggleMenu] = useState<boolean>(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 80) {
        navAnimation.start("scroll");
        buttonAnimation.start("scroll");
      } else {
        navAnimation.start("top");
        buttonAnimation.start("top");
      }
    });
  }, [scrollY, navAnimation, buttonAnimation]);

  const mobileMenu = () => {
    set_toggleMenu((prev) => !prev);
  };

  return (
    <>
      <div>
        <motion.nav
          animate={navAnimation}
          transition={{ duration: 0.1 }}
          initial={"top"}
          className="fixed top-0 w-full z-20 flex flex-col bg-[#0f172be6]"
        >
          <div className="flex justify-between items-center lg:px-0 px-5">
            <Link href="/">
              <motion.img
                src="/mainlogo.png"
                className="lg:w-40 w-28 my-8 lg:ml-24"
              />
            </Link>
            <div className="lg:flex hidden justify-between text-sm items-center text-white space-x-10">
              <Link
                href="#jury"
                className="flex flex-col items-center space-y-2 hover:text-[#fea116] transition"
              >
                <span>JURY</span>
              </Link>
              <Link
                href="#past"
                className="flex flex-col items-center space-y-2 hover:text-[#fea116] transition"
              >
                <span>PAST WINNERS</span>
              </Link>
              <Link
                href="#regulation"
                className="flex flex-col items-center space-y-2 hover:text-[#fea116] transition"
              >
                <span>REGULATION</span>
              </Link>
              <Link
                href="#notice"
                className="flex flex-col items-center space-y-2 hover:text-[#fea116] transition"
              >
                <span>NOTICE</span>
              </Link>
              <Link
                href="#contact"
                className="flex flex-col items-center space-y-2 hover:text-[#fea116] transition"
              >
                <span>CONTACT</span>
              </Link>

              <button className="bg-[#fea116] py-8 px-20 text-white text-2xl tracking-wider flex justify-center items-center gap-3 hover:bg-[#fdad35] transition">
                APPLY
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </button>

            </div>
            <button className="text-white lg:hidden block" onClick={mobileMenu}>
              {toggleMenu ? (
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </motion.svg>
              ) : (
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </motion.svg>
              )}
            </button>
          </div>
          {toggleMenu ? (
            <motion.div className={`text-white lg:hidden flex flex-col text-xs`}>
              <Link
                href="#regulation"
                className="text-right px-5 py-5 hover:text-[#fea116]"
              >
                <span>MAIN</span>
              </Link>
              <Link
                href="/jury"
                className="text-right px-5 py-5 hover:text-[#fea116]"
              >
                <span>WELCOME</span>
              </Link>
              <Link
                href="/contact"
                className="text-right px-5 py-5 hover:text-[#fea116]"
              >
                <span>INFORMATION</span>
              </Link>
              <Link
                href="/notice"
                className="text-right px-5 py-5 hover:text-[#fea116]"
              >
                <span>JURY</span>
              </Link>
              <Link
                href="/past"
                className="text-right px-5 py-5 hover:text-[#fea116]"
              >
                <span>CONTACT</span>
              </Link>
              <Link
                href="/past"
                className="text-right px-5 py-5 hover:text-[#fea116]"
              >
                <span>NOTICE</span>
              </Link>
              <Link
                href="/past"
                className="text-right px-5 py-5 hover:text-[#fea116]"
              >
                <span>PAST WINNERS</span>
              </Link>

              <button className="bg-[#fea116] py-6 text-white text-lg tracking-wider flex justify-center items-center gap-3 hover:bg-[#fdad35] transition">
                APPLY
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </button>

            </motion.div>
          ) : null}
        </motion.nav>
      </div>
      <motion.button
        onClick={scrollToTop}
        variants={ScrollUp}
        initial={{ opacity: 0 }}
        animate={buttonAnimation}
        transition={{ duration: 0.1 }}
        className="fixed bottom-4 right-4 bg-[#fea116] lg:p-3 p-2 hover:bg-[#fdad35] transition shadow-xl"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="white"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 15.75l7.5-7.5 7.5 7.5"
          />
        </svg>
      </motion.button>
    </>
  );
}
