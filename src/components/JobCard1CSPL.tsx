import React from 'react'

const JobCard1CSPL = () => {
  return (
    <div className='w-[70rem] h-[40rem] rounded-2xl text-black p-4'>

      <div className='bg-gray-200 rounded-md p-4 text-center'>
        <h1 className='text-3xl'>California Seed and Pland Labs</h1>
        <p>Junior Sofware Developer</p>   
      </div>

      <div className='mt-4 grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6'>

        <div className='my-4 bg-gray-200 rounded-md p-4 h-[20rem] lg:h-[25rem]'>
          <p className='font-bold pb-4'>Dive into why you want to work there (culture, benefits, hybrid, location)</p>
          <p>The reason I want to work at CalSPL ties into my starting goals which is to gain expirence and find some footing for myself.</p>
        </div>
        
        <div className='my-4 bg-gray-200 rounded-md p-4 h-[20rem] lg:h-[25rem]'>
          <p className='font-bold pb-4'>Does the job require the current stack that you know. Would you have learn new skills?</p>
          <p>The Job requires knowledge of JavaScript, HTML, CSS and a familiarity with scripting languages like Python. While I do have experience and education in the first three I am lacking a familiarity with scripting languages. </p>
        </div>
        
        <div className='my-4 bg-gray-200 rounded-md p-4 h-[20rem] lg:h-[25rem]'>
          <p className='font-bold pb-4'>What goals would you like to achieve in the hypothetical position?</p>
          <p>This would be a starting position for me. My goals here would to find my footing and gain experience in the industry. Once I gain some experience I would plan where to go from there, whether I wanted to stay or not.</p>
        </div>

        <div className='my-4 bg-gray-200 rounded-md p-4  h-[20rem] lg:h-[25rem]'>
          <p className='font-bold pb-4'>Do you currently have the skillsets for the job?</p>
          <p>Not at the moment, but I could build up to it quickly.</p>
        </div>

      </div>

    </div>
  )
}

export default JobCard1CSPL