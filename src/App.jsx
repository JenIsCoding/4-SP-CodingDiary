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
    <div className="month-title"><h2>2024 Coding Diary</h2></div>
    <div className="container">
    {getdata}
    </div>
    </>
  )
}

export default App;