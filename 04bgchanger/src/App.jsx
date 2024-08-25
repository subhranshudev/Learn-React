import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed bottom-12 flex flex-wrap justify-center inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-3xl shadow-lg">
          <button className="px-3 py-1 rounded-3xl text-white shadow-2xl outline-none"style={{backgroundColor: "red"}} 
          onClick={() => setColor("red")}>
              Red
          </button>
          <button className="px-3 py-1 rounded-3xl text-white shadow-2xl outline-none"style={{backgroundColor: "Green"}}
          onClick={() => setColor("green")}>
              Green
          </button>
          <button className="px-3 py-1 rounded-3xl text-white shadow-2xl outline-none"style={{backgroundColor: "Blue"}}
          onClick={() => setColor("blue")}>
              Blue
          </button>
          <button className="px-3 py-1 rounded-3xl text-white shadow-2xl outline-none"style={{backgroundColor: "Olive"}}
          onClick={() => setColor("olive")}>
              Olive
          </button>
          <button className="px-3 py-1 rounded-3xl text-black shadow-2xl outline-none"style={{backgroundColor: "Gray"}}
          onClick={() => setColor("Gray")}>
              Gray
          </button>
          <button className="px-3 py-1 rounded-3xl text-black shadow-2xl outline-none"style={{backgroundColor: "Yellow"}}
          onClick={() => setColor("Yellow")}>
              Yellow
          </button>
          <button className="px-3 py-1 rounded-3xl text-black shadow-2xl outline-none"style={{backgroundColor: "Pink"}}
          onClick={() => setColor("Pink")}>
              Pink
          </button>
          <button className="px-3 py-1 rounded-3xl text-white shadow-2xl outline-none"style={{backgroundColor: "Purple"}}
          onClick={() => setColor("Purple")}>
              Purple
          </button>
          <button className="px-3 py-1 rounded-3xl text-black shadow-2xl font-medium outline-none"style={{backgroundColor: "Lavender"}}
          onClick={() => setColor("Lavender")}>
              Lavender
          </button>
          <button className="px-3 py-1 rounded-3xl text-black shadow-2xl font-medium outline-none"style={{backgroundColor: "white"}}
          onClick={() => setColor("white")}>
              white
          </button>
          <button className="px-3 py-1 rounded-3xl text-white shadow-2xl outline-none"style={{backgroundColor: "Black"}}
          onClick={() => setColor("black")}>
              Black
          </button>
         
        </div>
      </div>
    </div>
  )
}

export default App
