import "./Card.css";
import React from "react";

const Card = ({ url, likedCats }) => {
  const [isLiked, setIsLiked] = React.useState(false);

  React.useEffect(() => {
    if (likedCats.includes(url)) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  }, [likedCats, url]);

  function handleButtonClick() {
    if (isLiked) {
      setIsLiked(false);
      let i = 0;
      likedCats.forEach((cat) => {
        if (cat === url) {
          likedCats.splice(i, 1);
          if (localStorage.getItem("likedCats")) {
            localStorage.removeItem("likedCats");
          }
          localStorage.setItem("likedCats", JSON.stringify(likedCats));
        } else {
          i++;
        }
      });
      setIsLiked(false);
    } else {
      setIsLiked(true);
      likedCats.push(url);
      if (localStorage.getItem("likedCats")) {
        localStorage.removeItem("likedCats");
      }
      localStorage.setItem("likedCats", JSON.stringify(likedCats));
    }
  }

  return (
    <div className="card">
      <img className="card__img" src={url} alt="just another cat" />
      <button
        className={`card__button ${isLiked ? "card__button_liked" : ""} `}
        onClick={handleButtonClick}
      ></button>
    </div>
  );
};

export default Card;
