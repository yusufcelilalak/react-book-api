import classes from "./BookInformation.module.css";
import { useLocation } from "react-router-dom";

function BookInformation() {
  const location = useLocation();
  const state = location.state;

  console.log(state);

  let bookCover =
    state.volumeInfo.imageLinks && state.volumeInfo.imageLinks.smallThumbnail;
  let author = state.volumeInfo.authors;
  typeof author !== "undefined"
    ? (author = author.join(", "))
    : (author = "Unknown");
  let title = state.volumeInfo.title;
  let categories = state.volumeInfo.categories;
  typeof categories !== "undefined"
    ? (categories = categories.join(", "))
    : (categories = "Unknown");
  let description = state.volumeInfo.description;

  return (
    <div className={classes.container}>
      <img src={bookCover} alt="" />
      <div className={classes.information}>
        <p>{categories}</p>
        <h3>{title}</h3>
        <p>{author}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default BookInformation;
