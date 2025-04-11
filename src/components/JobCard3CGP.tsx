import React from 'react'

const JobCard3CGP = () => {
  return (
    <div className='w-[70rem] h-[40rem] rounded-2xl text-black p-4'>

      <div className='bg-gray-200 rounded-md p-4 text-center'>
        <h1 className='text-3xl'>Central Garden and Pets</h1>
        <p>Junior Sofware Developer</p>   
      </div>

      <div className='mt-4 grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6'>

        <div className='my-4 bg-gray-200 rounded-md p-4 h-[20rem] lg:h-[25rem]'>
          <p className='font-bold pb-4'>Dive into why you want to work there (culture, benefits, hybrid, location)</p>
          <p>I want to work at Central Garden and Pets to grow as a developer, and at least be semi secure (money and benefit wise) so I can.</p>
        </div>
        
        <div className='my-4 bg-gray-200 rounded-md p-4 h-[20rem] lg:h-[25rem]'>
          <p className='font-bold pb-4'>Does the job require the current stack that you know. Would you have learn new skills?</p>
          <p>The Job requires knowledge of JavaScript, HTML, and CSS. All of which, I have knowledge of.</p>
        </div>
        
        <div className='my-4 bg-gray-200 rounded-md p-4 h-[20rem] lg:h-[25rem]'>
          <p className='font-bold pb-4'>What goals would you like to achieve in the hypothetical position?</p>
          <p>My goals here are growth. Growing as a developer and to start building a future.</p>
        </div>

        <div className='my-4 bg-gray-200 rounded-md p-4  h-[20rem] lg:h-[25rem]'>
          <p className='font-bold pb-4'>Do you currently have the skillsets for the job?</p>
          <p>The only required qualifications I do not meet are, having a degree or professional experience.</p>
        </div>

      </div>

    </div>
  )
}

export default JobCard3CGP