

const List = ({people}) => {
  return (
    <div className="card">
{people.map(({id,name,age,image})=>(

<div className="person" key={id}>
<img src={image} alt={name} />
<div>
    <h4>{name}</h4>
    <p>{age}</p>
</div>

</div>

))}




    </div>
  )
}

export default List


