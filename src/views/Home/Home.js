import "./Home.css"
import add from "./plus.png"
import ToDoCard from "../../components/todoCard/todoCard"
function Home() {
    const todolist = [
        "Go to gym",
        "buy grocery",
        "finish project",
        "household",
        "pay bill",
        "watch movie"
    ]

  return (
    <div>
        <h1 className="app-title">To-Do App📝</h1>
        <div className="todolist-container">
           {
            todolist.map((todoItem, i)=>{
                return(
                    <ToDoCard key={i} todoItem={todoItem}/>
                )
            })
           }
        </div>
        <div className="add-item-container">
            <input type="text" placeholder="Add your Task" className="add-input"/>
            <img src={add} alt="add-btn" className="add-icon"/>
        </div>
    </div>
  )
}

export default Home