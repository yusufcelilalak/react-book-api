import classes from "./Card.module.css";

function Card({ book }) {
  console.log(book);

  if (book) {
    return (
      <>
        {book.map((item) => {
          let bookCover =
            item.volumeInfo.imageLinks &&
            item.volumeInfo.imageLinks.smallThumbnail;
          let author = item.volumeInfo.authors;
          typeof author !== "undefined"
            ? (author = author.join(", "))
            : (author = "Unknown");
          let title = item.volumeInfo.title;
          let categories = item.volumeInfo.categories;
          typeof categories !== "undefined"
            ? (categories = categories.join(", "))
            : (categories = "Unknown");

          return (
            <div className={classes.card}>
              <img src={bookCover} alt="" />
              <div className={classes.container}>
                <p>{categories}</p>
                <h3>{title}</h3>
                <p>{author}</p>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

export default Card;
