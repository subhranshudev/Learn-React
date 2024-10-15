import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {

    const [themeMode, setThememode] = useState("light")

    const lightTheme = () => {
        setThememode("light")
    }
    const darkTheme = () => {
        setThememode("dark")
    }

// actual change in theme
 
useEffect(() => {
    document.querySelector('html').classList.remove("light" , "dark")
    document.querySelector('html').classList.add(themeMode)
}, [themeMode])


  return (
    
      // <h1 className='p-4 bg-pink-500 text-3xl rounded-2xl'>Chai</h1>
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
        <div className="flex flex-wrap min-h-screen items-center">
            <div className="w-full">
                <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                <ThemeBtn />
                </div>

                <div className="w-full max-w-sm mx-auto">
                    <Card/>
                </div>
            </div>
        </div>

    </ThemeProvider>
  )
}

export default App
