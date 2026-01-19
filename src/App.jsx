import React from 'react'
import { useState } from 'react';

const App = () => {
  const [details, Setdetails] = useState('')
  const [title, Settitle] = useState('')
  const [task, SetTask] = useState([])
  const Nodedelete = (idx) => {
    const copytask=[...task]
    copytask.splice(idx,1)
    SetTask(copytask)
    console.log("Node deleteed........");
    console.log(idx);
  }

  const submithandler = (e) => {
    e.preventDefault();

    if (title === '') {
      alert("kuch to title daal bhai.....")
    }
    if (details === '') {
      alert("kuch to details daal bhai.....")
    }

    const copytask = [...task]
    copytask.push({ title, details })
    SetTask(copytask)
    console.log(task);


    console.log('title is ::', title);
    console.log('Details are :: ', details);
    Settitle('')
    Setdetails('')
  }
  return (
    <div className='h-screen bg-black text-white lg:flex'>
      <h1 className='text-3xl font-bold p-10'>ADD Notes</h1>
      <form onSubmit={(e) => {
        submithandler(e)
      }} className='flex flex-col gap-4 lg:w-1/2 items-start p-10'>
        {/* Pehala input  */}
        <input type="text"
          placeholder='Enter notes heading'
          className='px-5 py-2 w-full border-2 rounded outline-none font-medium'
          value={title}
          onChange={(e) => {
            // console.log('hello jjiii',e);
            Settitle(e.target.value)

          }}
        />
        {/* Detailed inpUt  */}
        <textarea type="text"
          placeholder='Enter details'
          className='px-5 py-2 w-full h-20 border-2 rounded outline-none font-medium'
          value={details}
          onChange={(e) => {
            // console.log('hello jjiii',e);
            Setdetails(e.target.value)

          }}
        />

        <button className='bg-white active:scale-95 text-black px-5 py-2 rounded w-full outline-none font-medium cursor-pointer'>Add Notes</button>
      </form>
      <div className='lg:w-1/2 bg-gray-700 p-10 lg:border-l-2'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-full overflow-auto'>
          {task.map(function (Elem, idx) {
            return <div key={idx} className='flex flex-col justify-between items-start w-40 h-50 rounded-2xl text-black pt-9 pb-4 px-4 bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")] bg-cover'>
              <div>
                <h3 className=' text-lg font-bold leading-tight'>{Elem.title}</h3>
                <p className='mt-2 leading-tight font-medium text-gray-500'>{Elem.details}</p>
              </div>
              <button onClick={()=> {
                Nodedelete(idx)
              }} className='w-full py-1 text-xs font-bold cursor-pointer active:scale-95 text-white border rounded bg-red-500'>Delete Note</button>

              
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App
