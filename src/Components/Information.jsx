import React from "react";
import Pic from './pic.jpeg'
import Linkedin from './linkedin.png';
import Facebook from './facebook.png';
import Gmail from './gmail.png';
import GitHub from './github.png';
import { BsDownload } from "react-icons/bs";

export default function Information() {

  return(
    <div>
      <div className="flex justify-around h-96">
        <div className="text-white flex flex-col justify-center ">
          <p className="text-3xl">Hi, I am</p>
          <h1 className="text-6xl text-green-500 font-bold tracking-widest mt-5 mb-5">JESNER PERILLO,</h1>
          <p className="text-3xl">and I am a<span className="text-green-400 text-5xl ml-5">Software Engineer</span></p>
          <div className="flex w-2/3 items-center justify-around mt-5">
            <a href="https://www.linkedin.com/in/jesner-perillo-448084278/"><img  src={Linkedin} className="w-8 h-8 hover:cursor-pointer"/></a>
            <a href="https://www.facebook.com/jesner.perillo.9"><img src={Facebook} className="w-8 h-8 hover:cursor-pointer"/></a>
            <a href="mailto:perillojesner15@gmail.com"><img src={Gmail} className="w-8 h-8 hover:cursor-pointer"/></a>
            <a href="https://github.com/JesnerPerillo"><img src={GitHub} className="w-8 h-8 hover:cursor-pointer"/></a>
            <button className="duration-150 flex bg-red-500 text-white p-2 w-36 items-center justify-around rounded hover:bg-white hover:text-red-500">Download CV <BsDownload /></button>
          </div>
        </div>

        <div className="h-full">
        <img
          className="w-80 h-full object-cover rounded-2xl border-2 border-gray-200 shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 "
          src={Pic}
          alt="Profile Pic"
        />
        </div>
      </div>
    </div>
  )
}