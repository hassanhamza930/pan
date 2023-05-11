import Image from 'next/image'
import Hero from './components/hero'

export default function Home() {
  return (
    <div className='bg-white h-full w-full flex flex-col justify-start items-start px-[5%]'>
        <Hero/>
        <Hero/>
    </div>
  )
}
