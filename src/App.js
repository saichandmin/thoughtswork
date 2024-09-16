import { useEffect } from "react";
import "./styles.css";
import { FaSearch } from "react-icons/fa";

function renderDetails() {
  const {weatherDetails,setData}=useState({});
  useEffect(()=>{
    fetch("")
    .then({results}=>results.json())
    .then({data}=>{
      setData(data);
    })
  }
}

export default function App() {
  return (
    <div className="App">
      <div className="searchContainer">
        <input
          style={{ border: none }}
          type="search"
          placeholder="search city"
        />
        <button className="search-button">
          <FaSearch />
        </button>
      </div>
    </div>
  );
}
