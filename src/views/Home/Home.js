import "./Home.css"
import add from "./plus.png"
import panda from "./panda.png"
import panda2 from "./panda2.png"
import ToDoCard from "../../components/todoCard/todoCard"
import { useState } from "react"
import toast, {Toaster} from "react-hot-toast"
function Home() {
  
    const [todoList, setTodoList] = useState([ 
        {task:"python learning", categeory: "Learning"}
     ])
    const [newTask, setNewTask] = useState("")
    const [categeory, setCategory] = useState("")
   

  return (
    <div>
        <h1 className="app-title">To-Do App📝</h1>
        <img src={panda} className="panda-img1" alt="panda1"/>
        <div className="todolist-container">
           {
            todoList.map((todoItem, i)=>{

                const {task, categeory} = todoItem
                return  <ToDoCard key={i} task={task} categeory={categeory}/>
                
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
        <img src={panda2} className="panda-img2" alt="panda2"/>
        <div className="add-item-container">
            <input
                type="text"
                placeholder="Add your Task"
                className="add-input"
                value={newTask}
                onChange={(e)=>setNewTask(e.target.value)}
            />

            <select 
                className="categeory-select" 
                value={categeory} 
                onChange={(e)=>setCategory(e.target.value)}
            >
                <option value="">Select Category</option>
                <option value="Sports">Sports</option>
                <option value="Learning">Learning</option>
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
                <option value="Shopping">Shopping</option>
                <option value="Health">Health</option>
                <option value="Other">Other</option>
            </select>

            <img 
                src={add} 
                alt="add-btn" 
                className="add-icon"
                onClick={()=>{
                    if(newTask === ""){
                        toast.error('Task Can not be Empty')
                        return
                    }
                    if(categeory === ""){
                        toast.error('Category Can not be Empty')
                        return
                    }
                    setTodoList([...todoList,{task:newTask, categeory: categeory} ])
                    setNewTask("")
                    setCategory("")
                    toast.success("Task Added Successfully")
                }}
            />
        </div>
        <Toaster/>
    </div>
  )
}

export default Home