import { useLocation } from "react-router-dom";
import classes from "./Books.module.css";
import Card from "../components/items/Card";

function Books(props) {
  const location = useLocation();
  const state = location.state;
  //console.log(state);

  return (
    <div className={classes.container}>
      <Card book={state} />
    </div>
  );
}

export default Books;
