import React from 'react'

const JobCard2DataVisor = () => {
  return (
    <div className='w-[70rem] h-[40rem] rounded-2xl text-black p-4'>

      <div className='bg-blue-200 rounded-md p-4 text-center'>
        <h1 className='text-3xl'>Datavisor</h1>
        <p>Junior Front End Software Engineer</p>   
      </div>

      <div className='mt-4 grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6'>

        <div className='my-4 bg-blue-400 rounded-md p-4 h-[20rem] lg:h-[25rem]'>
          <p className='font-bold pb-4'>Dive into why you want to work there (culture, benefits, hybrid, location)</p>
          <p>The reason I want to work at Datavisor in this position is I could work on both my backend and frontedn skills. The fack that it is remote and has health insurance helps too.</p>
        </div>
        
        <div className='my-4 bg-blue-400 rounded-md p-4 h-[20rem] lg:h-[25rem]'>
          <p className='font-bold pb-4'>Does the job require the current stack that you know. Would you have learn new skills?</p>
          <p>The Job requires knowledge of JavaScript, HTML, and CSS. All of which, I have knowledge of.</p>
        </div>
        
        <div className='my-4 bg-blue-400 rounded-md p-4 h-[20rem] lg:h-[25rem]'>
          <p className='font-bold pb-4'>What goals would you like to achieve in the hypothetical position?</p>
          <p>My goals here would to gain experience and to continue to grow my knowedge of coding.</p>
        </div>

        <div className='my-4 bg-blue-400 rounded-md p-4  h-[20rem] lg:h-[25rem]'>
          <p className='font-bold pb-4'>Do you currently have the skillsets for the job?</p>
          <p>I do not currently have all the skills for this Job.</p>
        </div>

      </div>

    </div>
  )
}

export default JobCard2DataVisor