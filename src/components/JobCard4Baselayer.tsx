import React from 'react'

const JobCard4Baselayer = () => {
  return (
    <div className='w-[70rem] h-[40rem] rounded-2xl text-black p-4'>

      <div className='bg-blue-200 rounded-md p-4 text-center'>
        <h1 className='text-3xl'>Baselayer</h1>
        <p>Front End Engineer</p>   
      </div>

      <div className='mt-4 grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6'>

        <div className='my-4 bg-blue-400 rounded-md p-4 h-[20rem] lg:h-[25rem]'>
          <p className='font-bold pb-4'>Dive into why you want to work there (culture, benefits, hybrid, location)</p>
          <p>I want to work at Baselayer to grow as a developer, and at least be secure money wise so i do not have live stressed about everything. It is hybrid and has a couple benifits.</p>
        </div>
        
        <div className='my-4 bg-blue-400 rounded-md p-4 h-[20rem] lg:h-[25rem]'>
          <p className='font-bold pb-4'>Does the job require the current stack that you know. Would you have learn new skills?</p>
          <p>The Job requires knowledge of JavaScript/TypeScript and frameworks like React and Angular. I would most likely have to learn Angular.</p>
        </div>
        
        <div className='my-4 bg-blue-400 rounded-md p-4 h-[20rem] lg:h-[25rem]'>
          <p className='font-bold pb-4'>What goals would you like to achieve in the hypothetical position?</p>
          <p>My goals here are growth. Growing as a developer and to start building a future where I do not have to be constantly stressed about money. I want do not want to come to dislike coding because i was stressed all the time.</p>
        </div>

        <div className='my-4 bg-blue-400 rounded-md p-4  h-[20rem] lg:h-[25rem]'>
          <p className='font-bold pb-4'>Do you currently have the skillsets for the job?</p>
          <p>No, I do not have the experience for the job.</p>
        </div>

      </div>

    </div>
  )
}

export default JobCard4Baselayer