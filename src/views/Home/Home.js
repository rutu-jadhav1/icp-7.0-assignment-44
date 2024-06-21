import "./Home.css"
import add from "./plus.png"
import panda from "./panda.png"
import panda2 from "./panda2.png"
import ToDoCard from "../../components/todoCard/todoCard"
import { useState } from "react"
import toast, {Toaster} from "react-hot-toast"
function Home() {
  
    const [todoList, setTodoList] = useState([  ])
    const [newTask, setNewTask] = useState("")

  return (
    <div>
        <h1 className="app-title">To-Do App📝</h1>
        <img src={panda} className="panda-img1"/>
        <div className="todolist-container">
           {
            todoList.map((todoItem, i)=>{
                return(
                    <ToDoCard key={i} todoItem={todoItem}/>
                )
            })
           }

           {
            todoList.length === 0
            ? 
              <p style={{textAlign:"center" , fontSize:'22px'}}>
                No task to show, Add a new task
                </p>
            : null
           }
        </div>
        <img src={panda2} className="panda-img2"/>
        <div className="add-item-container">
            <input
                type="text"
                placeholder="Add your Task"
                className="add-input"
                value={newTask}
                onChange={(e)=>setNewTask(e.target.value)}
            />
            <img 
                src={add} 
                alt="add-btn" 
                className="add-icon"
                onClick={()=>{
                    if(newTask === ""){
                        toast.error('Task Can not be Empty')
                        return
                    }
                    setTodoList([...todoList, newTask])
                    setNewTask("")
                    toast.success("Task Added Successfully")
                }}
            />
        </div>
        <Toaster/>
    </div>
  )
}

export default Home