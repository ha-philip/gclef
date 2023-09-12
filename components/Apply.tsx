import {motion} from "framer-motion";

export default function Apply() {
    return(
        <>
            <motion.div
                initial={{scale: 0}}
                animate={{scale: 1}}
                className="lg:w-[75rem] w-full bg-[black] h-[35rem] z-30"
            >

            </motion.div>
        </>
    );
}