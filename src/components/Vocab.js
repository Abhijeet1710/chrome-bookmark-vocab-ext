import "../App.css";
import {Link } from "react-router-dom";
import { VocabList } from "../vocabList";


function Vocab() {

  const randomNum = Math.floor(Math.random() * Math.floor(VocabList.length));

  return (
  	<>

        <a className="addBMBtn"> <Link to="/add-bookmark"> Add </Link> </a>

	      <div className="App">
          <h1 className="">{VocabList[randomNum].FIELD1}</h1>
          <h3> {`" ${VocabList[randomNum].FIELD2}"`} </h3>
	      </div>

    </>
  )
}

export default Vocab;
