"use client";

import Link from "next/link";
import { motion } from 'framer-motion';
import { MdArrowDropDown } from "react-icons/md"
import Button from "./button";

function Header() {
    return (
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed z-[90] h-24 w-full bg-tan text-black font-medium flex flex-row justify-between items-center px-[5%]">

            <div className="bg-purp text-tan text-4xl font-regular px-4 py-1 rounded-md">
                PAN
            </div>

            <div className="flex flex-row justify-center items-center gap-12">
                <Link href="/" className="hover:text-purp hover:underline text-md transition-all duration-300">PAN Contract</Link>
                <Link href="/" className="hover:text-purp hover:underline text-md transition-all duration-300">DAO</Link>
                <Link href="/" className="hover:text-purp hover:underline text-md transition-all duration-300 flex flex-row justify-center items-center gap-1">
                    About
                    <MdArrowDropDown />
                </Link>
                <Link href="/" className="hover:text-purp hover:underline text-md transition-all duration-300">Chart</Link>
                <div className="flex flex-row justify-center items-center gap-8">
                    <Button text="Add to MetaMask" onClick={() => { }} />
                    <Button text="Buy on Uniswap" onClick={() => { }} />
                </div>
            </div>

        </motion.div>
    );
}

export default Header;