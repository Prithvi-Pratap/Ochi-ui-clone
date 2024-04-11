import React from "react";
import { HiArrowUpRight } from "react-icons/hi2";

function LandingPage() {
  return (
    <div className="h-screen w-full bg-zinc-900 pt-1">
      <div className="textstructure mt-36 pl-10">
        {["we create", "eye-opening", "presentation"].map((text,index) => {
          return (
            <div className='masker'>
            <h1 className='uppercase text-8xl font-["Test Founders Grotesk X-Cond SmBd"] font-roboto font-sans font font-semibold -tracking-[5px] leading-[5.5rem]'>{text}</h1>
        </div>
          );
        })}
      </div>
      <div className=" flex justify-between px-14 py-3 border-t-[1px] border-zinc-700 mt-32 text-base tracking-normal
       font-light ">
        {
          ["For public and private companies","From the first pitch to IPO"].map((item,index)=>{
            return (
              <p>{item}</p>
            )
          })
        }
        <div className="flex items-center gap-2"><button className="border-[1px] rounded-full border-zinc-500 py-1 px-4 uppercase hover:bg-zinc-100 hover:text-black duration-200 ">Start the project</button>
        <div className="border-[1px] border-zinc-500 rounded-full p-2">
          <HiArrowUpRight/>
        </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
