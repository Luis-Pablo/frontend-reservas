import { Link, useNavigate } from "react-router-dom";
import "./featured.css";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";

const provisionalData = [
  {
    id: 1,
    image:
      "https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=",
    title: "Temuco",
    direction: "",
  },
  {
    id: 2,
    image:
      "https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o=",
    title: "Santiago",
    direction: "",
  },
  {
    id: 3,
    image:
      "https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o=",
    title: "Concepción",
    direction: "",
  },
];

const Featured = () => {
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

  console.log(destination);
  console.log(dates);
  console.log(options);

  return (
    <div className="featured">
      {provisionalData.map((item) => (
        <div key={item.id} onClick={handleSearch} className="featuredItem">
          <div className="featuredImg">
            <Link>
              <img src={item.image} alt="" />
            </Link>
          </div>
          <div className="featuredTitles">
            <h1>{item.title}</h1>
            <h2>{item.direction}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Featured;
