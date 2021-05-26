import "./App.css"
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
//Compnents
import Bookmarks from "./components/Bookmarks";
import Vocab from "./components/Vocab";
import AddBM from "./components/AddBM";


function App() {
  return (
  	<>
    <BrowserRouter> 

      <Switch>
        <Route exact path="/" exact component={Vocab} />
        <Route exact path="/add-bookmark" exact component={AddBM} />
      </Switch>

      <Bookmarks />

    </BrowserRouter>
    </>
  )
}

export default App;
