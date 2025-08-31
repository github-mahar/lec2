import React, { useState } from 'react'

export default function Form(props) {
    const [Name , setName] = useState("");
    const handleChange = (event) => {
        setName(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(Name);
    };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={Name} onChange={handleChange} className='border p-2 m-2' />
        <button type="submit" className=" rounded-lg p-2 m-2 bg-blue-500 text-white hover:bg-blue-700
          ">Submit</button>
      </form>
    </div>
  )
}
