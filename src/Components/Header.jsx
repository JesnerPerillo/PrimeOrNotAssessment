import React from "react";

export default function Header() {
  return(
    <>
      {/*Main Container */}
      <div className="flex flex-row justify-around h-16">
        {/*Logo */}
        <div className="flex items-center ml-40 text-white">
          <h1 className="text-4xl tracking-widest">JADP</h1>
        </div>
        {/*Links*/}
        <div className="flex flex-row w-1/2 justify-around items-center mr-12 text-white tracking-wide">
          <p>Home</p>
          <p>About</p>
          <p>Projects</p>
          <p>Skills</p>
          <p>Contact</p>
        </div>
      </div>
    </>
  )
}