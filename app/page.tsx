import Image from 'next/image'
import Hero from './components/hero'
import Features from './components/features'
import Facts from './components/facts'
import exchanges from "./images/exchanges.png";

export default function Home() {
  return (
    <div className='bg-white h-full w-full flex flex-col justify-start items-start'>
        <Hero/>
        <Features/>
        <Image alt="exchanges" src={exchanges} className='w-full object-contain bg-tan relative z-10'/>
        <Facts/>
    </div>
  )
}
