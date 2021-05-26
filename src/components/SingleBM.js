import "../App.css"

function SingleBM( {item} ) {
  return (
  	<>
      <a href={item.link}>
        <div className="single-bookmark">
          <img src={item.img} />
        </div>
      </a>
    </>
  )
}

export default SingleBM;






