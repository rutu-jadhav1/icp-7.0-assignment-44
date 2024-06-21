import "./todoCard.css"

function todoCard({todoItem}) {
  return (
    <div className="todo-Card">
        {todoItem}
    </div>
  )
}

export default todoCard