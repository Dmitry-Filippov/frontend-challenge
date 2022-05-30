import React from "react";
import Card from "../Card/Card";
import "./Main.css";

const Main = ({ cats, likedCats, setLikedCats, islikedCats }) => {
  return (
    <main className="main">
      <div className="main__cards">
        {cats.map((url) => {
          return (
            <Card url={url} likedCats={likedCats} setLikedCats={setLikedCats} key={Math.random()} />
          );
        })}
      </div>
      <p
        className={`main__loading ${islikedCats ? "main__loading_hidden" : ""}`}
      >
        ... загружаем еще котиков ...
      </p>
    </main>
  );
};

export default Main;
