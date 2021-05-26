import "../App.css"
import SingleBM from "./SingleBM"
import BookMarksList  from "./BookmarksList";

function Bookmarks() {

  return (
  	<>
	    <div className="bookmarks-bar">
			<div className="main-bar">
			{
				BookMarksList.map( (element) => (
					<SingleBM item={element} />
				))
			}		
			</div>
	    </div>
    </>
  )
}

export default Bookmarks;
