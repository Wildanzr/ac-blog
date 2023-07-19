'use client';

import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main>
      {/* <Section> */}
      <div className="relative items-center justify-center w-full h-screen">
        <div className="absolute z-10 flex flex-col items-center justify-center w-full h-screen">
          <div className="flex flex-col">
            <h1 className="text-3xl font-normal text-center lg:text-4xl font-jakarta text-whiteprimary">
              Affective Computing
            </h1>
            <h1 className="text-3xl font-medium text-center lg:text-4xl font-jakarta text-whiteprimary">
              Affective Computing
            </h1>
            <h1 className="text-3xl font-semibold text-center lg:text-4xl font-jakarta text-whiteprimary">
              Affective Computing
            </h1>
            <h1 className="text-3xl font-bold text-center lg:text-4xl font-jakarta text-whiteprimary">
              Affective Computing
            </h1>
            <h1 className="text-3xl font-black text-center lg:text-4xl font-jakarta text-whiteprimary">
              Affective Computing
            </h1>
            <h1 className="text-3xl font-bold text-center lg:text-4xl font-jakarta text-whiteprimary">
              Research Interest Group
            </h1>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            className="px-2 py-2 mt-32 text-lg font-bold bg-redprimary text-whiteprimary lg:text-xl font-jakarta"
          >
            Get Started
          </motion.button>
        </div>
        <div className="h-screen bg-center bg-cover bg-banner-hero brightness-50" />
      </div>
      {/* </Section> */}
    </main>
  );
}
