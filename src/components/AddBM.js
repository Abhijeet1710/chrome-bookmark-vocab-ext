import "../App.css"
import { Link } from "react-router-dom";
import backImg from "../images/arrow-left-line.svg";


function AddBM() {

  function addBM()  {
    const imgSrc = document.getElementById('ip_imageSrc').value;
    const link = document.getElementById('ip_link').value;
    document.getElementById('ip_imageSrc').value = "";
    document.getElementById('ip_link').value = "";

    if(imgSrc != "" && link != "") {
      console.log(` ${imgSrc}  ${link} `);
       //save image and link into local storage.
      //And update bookmarks state.


    }else{
      console.log("Fill both fields");
    }
   
  }

  return (
  	<>
      <Link to="/"> <img className="backImg" src={backImg} /> </Link> <br/> <br/> <br/>

        <div className="App">
        <input id="ip_imageSrc" type="text" placeholder="Image" /> <br/> <br/>
        <input id="ip_link" type="text" placeholder="Link" /> <br/> <br/>
        <button onClick = { () => addBM() }> Add </button>
        </div>


    </>
  )
}

export default AddBM;
