import { Link, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./propertyList.css";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";

const titles = [
  "Hoteles",
  "Apartamentos",
  "Centros Turisticos",
  "Villas",
  "Cabañas",
];
const images = [
  "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
  "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
  "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
  "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
  "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
];

const PropertyList = () => {
 
  const {
    dispatch,
    city: destination,
    dates,
    options,
  } = useContext(SearchContext);

  const navigate = useNavigate();
  const handleSearch = () => {
    dispatch({
      type: "NEW_SEARCH",
      payload: { destination, dates, options },
    });
    navigate("/hotels", { state: { destination, dates, options } });
  };

  return (
    <div className="pList">
      {images.map((img, i) => (
        <div className="link" key={i} onClick={handleSearch}>
          <div className="pListItem">
            <Link>
              <img src={img} alt="" className="pListImg" />
            </Link>
            <div className="pListTitles">
              <h1>{titles[i]}</h1>
              <h2>
                {" "}
                {images[i]?.count} {titles[i].toLowerCase()}
              </h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
