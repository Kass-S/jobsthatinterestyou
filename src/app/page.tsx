'use client'

import JobCard1CSPL from "@/components/JobCard1CSPL";
import JobCard2DataVisor from "@/components/JobCard2DataVisor";
import JobCard3CGP from "@/components/JobCard3CGP";
import JobCard4Baselayer from "@/components/JobCard4Baselayer";
import JobCard5DPSTelecom from "@/components/JobCard5DPSTelecom";
import { useState } from "react";


export default function Home() {
  const [cardState, setCardState] = useState<number>(1);


  return (
    <div className="max-h-screen max-w-screen">
      
      <div className=" flex justify-center mt-5">
        <div className="grid grid-cols-5 gap-4">
          {
            cardState == 1 ? <button className="bg-blue-800 rounded-md p-2 px-6 cursor-pointer" >Job 1</button> : <button className="bg-blue-600 hover:bg-blue-800 rounded-md p-2 px-6 cursor-pointer" onClick={() => setCardState(1)} >Job 1</button>
          }
          {
            cardState == 2 ? <button className="bg-blue-800 rounded-md p-2 px-6 cursor-pointer">Job 2</button> : <button className="bg-blue-600 hover:bg-blue-800 rounded-md p-2 px-6 cursor-pointer" onClick={() => setCardState(2)} >Job 2</button>
          }
          {
            cardState == 3 ? <button className="bg-blue-800 rounded-md p-2 px-6 cursor-pointer">Job 3</button> : <button className="bg-blue-600 hover:bg-blue-800 rounded-md p-2 px-6 cursor-pointer" onClick={() => setCardState(3)} >Job 3</button>
          }          
          {
            cardState == 4 ? <button className="bg-blue-800 rounded-md p-2 px-6 cursor-pointer">Job 4</button> : <button className="bg-blue-600 hover:bg-blue-800 rounded-md p-2 px-6 cursor-pointer" onClick={() => setCardState(4)} >Job 4</button>
          }
          {
            cardState == 5 ? <button className="bg-blue-800 rounded-md p-2 px-6 cursor-pointer">Job 5</button> : <button className="bg-blue-600 hover:bg-blue-800 rounded-md p-2 px-6 cursor-pointer" onClick={() => setCardState(5)} >Job 5</button>
          }
        </div>
      </div>

      <div className="flex justify-center mt-8">
        {
          cardState == 1 ? <JobCard1CSPL /> : cardState == 2 ? <JobCard2DataVisor /> : cardState == 3 ? <JobCard3CGP /> : cardState == 4 ? <JobCard4Baselayer /> : <JobCard5DPSTelecom />
        }
      </div> 
      
    </div>
  );
}
