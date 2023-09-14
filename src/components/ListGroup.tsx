import style from  './ListGroup.module.css'
const ListGroup = () => {
    const items = ["Rupgonj", "Islamabad", "Dhaka", "Sylhet", "Hridoy","Hossain"];
  return (
    <div>
        <h1>City</h1>
        <ul className={[style.listGroup,style.container].join(' ')}>
        {items.map((item) => (
          <li
            className="list-group-item active">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListGroup;
