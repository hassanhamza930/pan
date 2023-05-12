"use client";

import Link from "next/link";
import { AnimatePresence, motion } from 'framer-motion';
import { MdArrowDropDown, MdClose } from "react-icons/md"
import { GiCrossMark, GiHamburgerMenu } from "react-icons/gi";
import Button, { ButtonWhite } from "./button";
import { useState } from "react";


function Header() {

    const [headerOpen, setheaderOpen] = useState(false);

    return (
        window.innerWidth < 1280 ?
            <>
            <AnimatePresence>
                {
                    headerOpen &&
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed z-[90] h-screen w-full bg-black/80 backdrop-blur-sm text-tan font-medium flex flex-row justify-end items-start p-10">

                            <div className="flex flex-col md:flex-row justify-start items-end gap-5">
                                <button onClick={() => { setheaderOpen(!headerOpen) }}>
                                    <MdClose size={30} />
                                </button>
                                <Link href="/" className="hover:text-purp hover:underline text-md transition-all duration-300">PAN Contract</Link>
                                <Link href="/" className="hover:text-purp hover:underline text-md transition-all duration-300">DAO</Link>
                                <Link href="/" className="hover:text-purp hover:underline text-md transition-all duration-300 flex flex-row justify-center items-center gap-1">
                                    About
                                    {/* <MdArrowDropDown /> */}
                                </Link>
                                <Link href="/" className="hover:text-purp hover:underline text-md transition-all duration-300">Chart</Link>
                                <div className="flex flex-col justify-start items-end gap-5">
                                    <ButtonWhite text="Add to MetaMask" onClick={() => { }} />
                                    <ButtonWhite text="Buy on Uniswap" onClick={() => { }} />
                                </div>
                            </div>

                        </motion.div> 
                        
                }
                </AnimatePresence>
                <AnimatePresence>
                {
                    headerOpen==false&&
                    <div className="fixed bg-tan z-20 flex flex-row justify-between w-full p-5">

                            <div className="bg-purp text-tan text-4xl font-regular px-4 py-1 rounded-md">
                                PAN
                            </div>

                            <button onClick={() => { setheaderOpen(!headerOpen) }}>
                                <GiHamburgerMenu size={30} />
                            </button>

                        </div>
                }
            </AnimatePresence>
            </>

            :
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="fixed z-[90] h-24 w-full bg-tan text-black font-medium flex flex-row justify-between items-center px-[5%]">

                <div className="bg-purp text-tan text-4xl font-regular px-4 py-1 rounded-md">
                    PAN
                </div>

                <div className="hidden md:flex flex-row justify-center items-center gap-12">
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