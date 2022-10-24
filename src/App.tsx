import { LazyLoadImage } from "react-lazy-load-image-component";

import 'react-lazy-load-image-component/src/effects/blur.css';

const generateArray = (items: number) => [...Array.from(Array(items).keys())];

const App = () => {
  return (
    <div className="main-container">

      <div className="header">
        <h1 className="title"><span>Lazy Loading Images</span> 🖼️</h1>
      </div>
      
      <div className="container-images">
        {
          generateArray(15).map(i => (
            <LazyLoadImage
              key={i}
              src={`https://picsum.photos/id/${i+50}/500`}
              alt={`Image Alt-${i}`}
              className="img-lazy"
              width={700} 
              placeholderSrc={"https://www.ecoledujournalisme.com/wp-content/uploads/2019/04/placeholder-image.jpg"}
              effect='blur' // opacity | black-and-white
            />
          ))
        }
      </div>
    </div>
  )
}
export default App