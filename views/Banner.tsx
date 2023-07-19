"use client";

import { motion } from "framer-motion";
import { H1 } from "@/components";

const Banner = () => {
  return (
    <div className="relative items-center justify-center w-full h-screen">
      <div className="absolute z-10 flex flex-col items-center justify-center w-full h-screen">
        <div className="flex flex-col">
          <H1 text="Affective Computing" center={true} />
          <H1 text="Research Interest Group" center={true} />
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="px-[10px] py-[5px] mt-36 text-lg font-bold bg-redprimary text-whiteprimary lg:text-xl font-jakarta"
        >
          Get Started
        </motion.button>
      </div>
      <div className="h-screen bg-center bg-cover bg-banner-hero brightness-50" />
    </div>
  );
};

export default Banner;
