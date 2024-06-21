import { buildQueries } from "@testing-library/react"
import "./todoCard.css"

function todoCard({task,categeory}) {
    const Category_Emoji = {
        Sports: "🏓",
        Learning: "📚",
        Work: "💻",
        Personal: "🔐",
        Shopping: "🛍️",
        Health: "🏥",
        Other: "📁"
    }
    const Category_Color = {
        Sports: "#008080",
        Learning: "#4d4dff",
        Work: "#86b300",
        Personal: "#0099ff",
        Shopping: "#ff1ab3",
        Health: "#00cc00",
        Other: "#ffad33"
    }

  return (
    <div className="todo-Card">
        {task}
        <span className="category" style={{backgroundColor: Category_Color[categeory]}}>
        {Category_Emoji[categeory]} {categeory}
        </span>
    </div>
  )
}

export default todoCard