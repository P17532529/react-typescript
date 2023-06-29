import { useState } from 'react'
import './App.css'

import { Notes } from './types/inputfields'
import Inputfield from './components/Inputfield'
import Card from './components/Card'
function App() {
  const [todo ,settodo] = useState<string>('')
 const[todos , settodos] = useState<Notes[]>([])

 function onclick() {
    settodos([...todos,{id:Date.now(),todo}])
    settodo('')

 }

  return (
    <>
     <h1>Notes</h1>
  <Inputfield settodo={settodo} onclick={onclick}/>
  <Card/>
    </>
  )
}

export default App
