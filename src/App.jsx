import DiaryEntry from "../src/DiaryEntry.jsx"
import data from "../src/data.js"

function App() {
  const getdata = data.map(el => {
    return <DiaryEntry 
                {...el}
            />
  })

  return (
    <>
    <div className="month-title"><h2>January & February 2024</h2></div>
    <div className="container">
    {getdata}
    </div>
    </>
  )
}

export default App;