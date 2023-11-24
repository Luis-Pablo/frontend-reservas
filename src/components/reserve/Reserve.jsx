import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./reserve.css";

import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../hooks/useFetch";
import { useContext, useState } from "react";
import { SearchContext } from "../../context/SearchContext.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const host = import.meta.env.VITE_REACT_APP_HOST;

const Reserve = ({ setOpen, hotelId }) => {
  const { data} = useFetch(`hotels/room/${hotelId}`);
  const [selectedRooms, setSelectedRooms] = useState([]);
  const { dates } = useContext(SearchContext);

  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const date = new Date(start.getTime());
    const dates = [];

    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }

    return dates;
  };
  let end = localStorage.getItem("endDate");
  let start = localStorage.getItem("startDate");
  const allDates = getDatesInRange(start, end);

  console.log(allDates);

   const isAvailable = (roomNumber) => {
     const isFound = roomNumber.unavailableDates.some((date) =>
       allDates.includes(new Date(date).getTime())
     );

     return !isFound;
   };

   const handleSelect = (e) => {
     const checked = e.target.checked;
     const value = e.target.value;
     setSelectedRooms(
       checked
         ? [...selectedRooms, value]
         : selectedRooms.filter((item) => item !== value)
     );
   };

  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      await Promise.all(
        selectedRooms.map((roomId) => {
          const res = axios.put(`${host}/rooms/availability/${roomId}`, {
            dates: allDates,
          });
          return res.data;
        })
      );
      setOpen(false);
      navigate("/");
    } catch (err) {}
  };

  return (
    <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() => setOpen(false)}
        />
        <span>Seleccione Habitaciones</span>

        {data.map((item) => (
          <div className="rItem" key={item._id}>
            <div className="rItemInfo">
              <div className="rtitle">{item.title}</div>
              <div className="rDesc">{item.desc}</div>
              <div className="rMax">Maximo de personas {item.maxPeople}</div>
              <div className="rPrice">${item.price}</div>
            </div>
            <div className="rSelectRooms">
              {item.roomNumber.map((roomNumber) => (
                <div className="room" key={roomNumber._id}>
                  <label>{roomNumber.number}</label>
                  <input
                    type="checkbox"
                    value={roomNumber._id}
                    onChange={handleSelect}
                    disabled={!isAvailable(roomNumber)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}

        <button onClick={handleClick} className="rButton">
          Reservar ahora!
        </button>
      </div>
    </div>
  );
};

export default Reserve;
