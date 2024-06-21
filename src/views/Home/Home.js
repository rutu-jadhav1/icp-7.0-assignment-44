import "./Home.css"
import add from "./plus.png"
function Home() {
  return (
    <div>
        <h1 className="app-title">To-Do App📝</h1>
        <div className="todolist-container">
            <h2>List....</h2>
        </div>
        <div className="add-item-container">
            <input type="text" placeholder="Add your Task" className="add-input"/>
            <img src={add} alt="add-btn" className="add-icon"/>
        </div>
    </div>
  )
}

export default Home