"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import pan from "../images/peter.png";

function Hero() {
    return (
        <div className="h-screen w-full flex flex-col justify-end items-end overflow-y-hidden">
            <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ backgroundImage: `url('${pan.src}')` }} className='absolute z-0 bg-contain bg-no-repeat bg-center h-[550px] w-[550px]'></motion.div>

            <div className='h-full w-full bg-transparent flex flex-col justify-center items-start'>
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative z-10 tracking-tighter text-7xl font-bold">
                    Fly to New heights with <span className="underline text-purp">PAN</span><br />
                    The Coin from Neverland!
                </motion.div>
            </div>



        </div>
    );
}

export default Hero;