import { useState, useCallback, useEffect, useRef} from 'react'

import './App.css'

function App() {
    const [length , setLength] = useState(8)
    const [number, setNumber] = useState(false)
    const [character, setCharacter] = useState(false)
    const [password, setPassword] = useState("")
    
  const passwordGenerator = useCallback(() => { 
    let pass =""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number) str+="0123456789"
    if (character) str+="`!@#$%^&*;:<>?\/|"

    for (let i = 1; i <= length; i++) {
      let charindex = Math.floor(Math.random()* str.length + 1)
      pass += str.charAt(charindex)
    }
    setPassword(pass)
  } , [length, number, character, setPassword])

  useEffect(() => {passwordGenerator()} , [length,number, character, setPassword])

  // useRef hook
  const passwordRef = useRef(null)

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 100)
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <>
    <div className='w-full max-wd-md mx-auto shadow-md rounded-lg px-4 my-8 py-3 bg-gray-700 text-orange-500'>
      <h1 className='text-white text-center mb-2'>Password Generator</h1>

      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" className='outline-none w-full py-1 px-3' placeholder= "password" value={password} ref={passwordRef}/>
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-500 ' onClick={() => {copyPasswordToClipboard()}}>copy</button>
      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e) => {setLength(e.target.value)}}  />
          <label >Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
        <input type="checkbox" defaultChecked = {number} id='numberInput' onChange={() =>{setNumber((prev) => !prev)}}/>
        <label htmlFor="numberInput">Numbers</label>
        <input type="checkbox" defaultChecked ={character} id='charInput' onChange={() =>{setCharacter((prev) => !prev)}}/>
        <label htmlFor="charInput">Characters</label>
        </div>
      </div>
    </div>
    
    </>
    
  )
}

export default App