import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";


/** Carousel: displays images and arrows to navigate through them
 * 
 * Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 * 
 * State:
 * - currCardIdx: integer for current card index
 * 
 * App --> Carousel --> Card
 */
 function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);
  

  const currCard = photos[currCardIdx];
  const total = photos.length;
  

  //Increments currCardIdx state by 1
  function goForward() {    
    setCurrCardIdx(currCardIdx + 1);
    

  }

  //Decrements currCardIdx state by 1
  function goBackword() {
    setCurrCardIdx(currCardIdx - 1);
    
  }

  let lv = (currCardIdx === 0) ? {visibility: "hidden"} : {visibility: "visible"};
  
  let rv = (currCardIdx === 2) ? {visibility: "hidden"} : {visibility: "visibile"};

  

  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main"> 
        <i 
          id="la"
          className="bi bi-arrow-left-circle"
          onClick={goBackword}
          style={lv}
                              
        />
        <Card
          caption={currCard.caption}
          src={currCard.src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />
        <i
          id="ra"
          className="bi bi-arrow-right-circle"
          onClick={goForward}
          style={rv}
        />
      </div>
    </div>
  );
}

export default Carousel;
