import React, { useState } from "react";

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = React.Children.count(children) - 1;
    }

    setActiveIndex(newIndex);
  };

  // the index should relate to the item order in the carousel
  // like/dislike should go to the database > user > likedProfiles - CRUD
  return (
    <>
      <div className="carousel-container">
        <div className="carousel">
          <div
            className="inner"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {React.Children.map(children, (child, index) => {
              return React.cloneElement(child, { width: "100%" });
            })}
          </div>
        </div>
        <div className="indicators">
          {/* dislike can become "unlike" AND/OR prevents profile from appearing again*/}
          <button onClick={() => updateIndex(activeIndex - 1)}>Skip</button>
          <button onClick={() => updateIndex(activeIndex + 1)}>Like</button>
        </div>
      </div>
    </>
  );
};

export default Carousel;
