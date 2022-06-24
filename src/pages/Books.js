import { useLocation, useNavigate } from "react-router-dom";
import classes from "./Books.module.css";
import Card from "../components/items/Card";

function Books(props) {
  const location = useLocation();
  const state = location.state;

  //onClick={navigate("/", { state: "TestThrough" })
  let navigate = useNavigate();
  //console.log(state);

  return (
    <div className={classes.container}>
      <Card book={state} />
    </div>
  );
}

export default Books;
