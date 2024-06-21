import "./todoCard.css"

function todoCard({task,categeory}) {
    const Category_Emoji = {
        Sports: "🏓",
        Learning: "📚",
        Work: "💻",
        Personal: "",
        Shopping: "🛍️",
        Health: "🏥",
        Other: "📁"
    }

  return (
    <div className="todo-Card">
        {task}
        <span className="category">
        {Category_Emoji[categeory]} {categeory}
        </span>
    </div>
  )
}

export default todoCard