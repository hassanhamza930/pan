"use client";

import {motion} from 'framer-motion';
    

function Facts() {
    return (
        <div className="relative z-10 h-full bg-tan w-full flex flex-col justify-start items-center">

            <motion.div 
             initial="hidden"
             variants={{
                 "visible":{opacity:1, y:0},
                 "hidden":{opacity:0, y:100},
             }}
             transition={{duration:1,delay:0.3}}
             whileInView={"visible"}
            className="flex mt-5 w-full gap-5 flex-row justify-center items-center px-[10%]">
                <div className="w-full h-[1px] bg-purp"></div>
                <div className="text-md flex-none text-center text-purp">PAN is available worldwide</div>
                <div className="w-full h-[1px] bg-purp"></div>
            </motion.div>

            <motion.div 
             initial="hidden"
             variants={{
                 "visible":{opacity:1, y:0},
                 "hidden":{opacity:0, y:100},
             }}
             transition={{duration:1,delay:0.5}}
             whileInView={"visible"}
            className="font-bold text-8xl text-black mt-36">PAN is for <span className="text-purp italic">you</span></motion.div>
            <motion.div 
             initial="hidden"
             variants={{
                 "visible":{opacity:1, y:0},
                 "hidden":{opacity:0, y:100},
             }}
             transition={{duration:1,delay:0.7}}
             whileInView={"visible"}
            className="text-xl font-medium text-black mt-10 mb-24">No taxes, no nonsense. Simple tokenomics to make PAN sustainable long term.</motion.div>

            <motion.div
             initial="hidden"
             variants={{
                 "visible":{opacity:1, y:0},
                 "hidden":{opacity:0, y:100},
             }}
             transition={{duration:1,delay:0.3}}
             whileInView={"visible"}
            className="flex flex-row justify-center items-start w-full mb-48 px-[15%]">

                <div className="flex-none flex-col justify-center items-center h-[500px] w-[500px] bg-blue">picture</div>
                <div className="flex flex-col h-[500px] justify-center w-full items-end p-5">
                    
                    <div className="text-3xl font-regular text-right mt-5">
                        <div className="font-bold">420,690,000,000,000</div>
                        <div className="font-regular text-2xl">Total Supply</div>
                        <div className="w-full h-[2px] bg-black/40 my-5"></div>
                    </div>

                    <div className="text-3xl text-right mt-5">
                        <div className="font-bold">95%</div>
                        <div className="font-regular text-2xl">Locked Forever</div>
                        <div className="w-full h-[2px] bg-black/40 my-5"></div>
                    </div>

                    <div className="text-3xl text-right mt-5">
                        <div className="font-bold">100%</div>
                        <div className="font-regular text-2xl">Community Driven</div>
                        <div className="w-full h-[2px] bg-black/40 my-5"></div>
                    </div>

                </div>

            </motion.div>


        </div>
    );
}

export default Facts;