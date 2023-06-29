import React from 'react'
import { Inputfield_Props } from '../types/inputfields'

const Inputfield = ({settodo,onclick}:Inputfield_Props) => {
  return (
    <>
    <input type="text" placeholder='Type your text' onChange={(e)=>settodo(e.target.value)} />
  
    <button onClick={onclick}>cLICK</button>
    </>
  )
}

export default Inputfield