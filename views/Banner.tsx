"use client";

import { motion } from "framer-motion";
import { H1 } from "@/components";

const Banner = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-red-400">
      <h1 className="text-4xl text-center font-jakarta text-whiteprimary">Hello meeeong</h1>
      {/* <div className="w-full h-full bg-center bg-cover bg-banner-hero brightness-50" /> */}
    </div>
  );
};

export default Banner;
