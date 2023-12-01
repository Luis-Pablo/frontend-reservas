import { useContext } from "react";
import "./featuredProperties.css";
import { SearchContext } from "../../context/SearchContext";
import { Link, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const provisionalData = [
  {
    id: 1,
    image:
      "https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=",
    name: "Temuco",
    cheapestPrice: 100,
  },
  {
    id: 2,
    image:
      "https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o=",
    name: "Santiago",
    cheapestPrice: 200,
  },
  {
    id: 3,
    image:
      "https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o=",
    name: "Concepción",
    cheapestPrice: 250,
  },
];

const FeaturedProperties = () => {
  const { data, loading } = useFetch(
    `hotels?limit=${3}`
  );
  const { results } = data;
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
    <div className="fp">
      {results?.map((item) => (
        <div className="fpItem" key={item._id} onClick={handleSearch}>
          <div className="fpImg">
            <Link>
              <img src={item.photos || image[i]} alt="" />
            </Link>
          </div>
          <span className="fpName">{item.name}</span>
          <span className="fpCity"> {item.city}</span>
          <span className="fpPrice">
            Precios desde USD {item.cheapestPrice}
          </span>
          {item.rating && (
            <div className="fpRating">
              <button>{item.rating}</button>
              <span>Excelente</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FeaturedProperties;
