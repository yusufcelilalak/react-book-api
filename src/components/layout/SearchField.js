import { Link, useNavigate } from "react-router-dom";
import classes from "./SearchField.module.css";
import axios from "axios";
import { useState, useEffect } from "react";

function SearchField() {
  //let test = "PassThroughLink";
  let navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sorting, setSorting] = useState("");
  const [bookData, setData] = useState([]);

  useEffect(() => {
    console.log("Updated!");
    navigate("/", { state: bookData });
  }, [bookData]);

  useEffect(() => {
    query();
  }, [category]);

  useEffect(() => {
    query();
  }, [sorting]);

  function searchBook(e) {
    if (e.key === "Enter" || e.key === undefined) {
      query();
    }
  }

  async function query() {
    console.log("works");
    await axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          search +
          category +
          sorting +
          "&key=" +
          process.env.REACT_APP_MY_API +
          "&maxResults=40"
      )
      .then((res) => setData(res.data.items));
  }

  return (
    <div className={classes.mainField}>
      <h1 className={classes.title}>Search for Books</h1>
      <div className={classes.inputField}>
        <div className={classes.search}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={searchBook}
          ></input>
          <Link to="/" state={bookData}>
            <button onClick={searchBook}>Search</button>
          </Link>
        </div>
        <div className={classes.categories}>
          <select
            id="categories"
            onChange={(e) => {
              console.log(e.target.value);
              if (e.target.value !== "all") {
                setCategory("+subject:" + e.target.value);
              } else {
                setCategory("");
              }
            }}
          >
            <option value="all">All</option>
            <option value="art">Art</option>
            <option value="biography">Biography</option>
            <option value="computers">Computers</option>
            <option value="history">History</option>
            <option value="medical">Medical</option>
            <option value="poetry">Poetry</option>
          </select>
        </div>
        <div className={classes.sorting}>
          <select
            id="sorting"
            onChange={(e) => {
              console.log(e.target.value);
              setSorting("&orderBy=" + e.target.value);
            }}
          >
            <option value="relevance">Relevance</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default SearchField;
