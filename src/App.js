import "bootstrap/dist/css/bootstrap.min.css";
import { Row } from "react-bootstrap";
import "./App.css";
import BookSelector from "./components/BookSelector";

import { SingleBook } from "./components/SingleBook";
import fantasyBooks from "../src/json/fantasy.json";
function App() {
  console.log(fantasyBooks);
  return <div className="wrap">{<BookSelector />}</div>;
}

export default App;
