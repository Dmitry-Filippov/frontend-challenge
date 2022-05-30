import React from "react";
import { Route, Routes } from "react-router-dom";
import { getCats } from "../../utils/api";
import Header from "../Header/Header";
import Main from "../Main/Main";
import "./App.css";

function App() {
  const [cats, setCats] = React.useState([]);
  const [likedCats, setLikedCats] = React.useState([]);

  React.useEffect(() => {
    const cats = [];
    getCats(15)
      .then((res) => {
        res.forEach((cat) => {
          cats.push(cat.url);
        });
      })
      .then(() => {
        setCats(cats);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  React.useEffect(() => {
    if (localStorage.getItem("likedCats")) {
      setLikedCats(JSON.parse(localStorage.getItem("likedCats")));
    }
  }, []);

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Main
              cats={cats}
              likedCats={likedCats}
            />
          }
        />
        <Route
          path="/liked"
          element={
            <Main
              cats={likedCats}
              likedCats={likedCats}
              islikedCats
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
