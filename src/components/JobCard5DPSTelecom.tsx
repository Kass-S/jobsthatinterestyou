import React from 'react'

const JobCard5DPSTelecom = () => {
  return (
    <div className='w-[70rem] h-[40rem] rounded-2xl text-black p-4'>

    <div className='bg-blue-200 rounded-md p-4 text-center'>
      <h1 className='text-3xl'>DPS Telecom</h1>
      <p>Software Developer</p>   
    </div>

    <div className='mt-4 grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6'>

      <div className='my-4 bg-blue-400 rounded-md p-4 h-[20rem] lg:h-[25rem]'>
        <p className='font-bold pb-4'>Dive into why you want to work there (culture, benefits, hybrid, location)</p>
        <p>I want to work at DPS Telecom to hone the skills I have while learning new ones. </p>
      </div>
      
      <div className='my-4 bg-blue-400 rounded-md p-4 h-[20rem] lg:h-[25rem]'>
        <p className='font-bold pb-4'>Does the job require the current stack that you know. Would you have learn new skills?</p>
        <p>The Job requires knowledge of PHP, MySQL, JavaScript, and HTML. I would have to learn PHP.</p>
      </div>
      
      <div className='my-4 bg-blue-400 rounded-md p-4 h-[20rem] lg:h-[25rem]'>
        <p className='font-bold pb-4'>What goals would you like to achieve in the hypothetical position?</p>
        <p>My goals here are growth of skill and thinking. </p>
      </div>

      <div className='my-4 bg-blue-400 rounded-md p-4  h-[20rem] lg:h-[25rem]'>
        <p className='font-bold pb-4'>Do you currently have the skillsets for the job?</p>
        <p>No, I am missing a couple of things.</p>
      </div>

    </div>

  </div>
  )
}

export default JobCard5DPSTelecom