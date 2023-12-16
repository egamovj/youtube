import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

function SearchBar() {
  const [value, setValue] = useState("");
  const naviget = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(value);
    if (value) {
      naviget(`/search/${value}`);
    }
    setValue("");
  };
  return (
    <Paper component={"form"} onSubmit={submitHandler} className="search-from">
      <input
        type="search"
        name="search"
        placeholder="Search..."
        className="search-bar"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <IconButton type="submit">
        <span className="serch-icon">
          <Search />
        </span>
      </IconButton>
    </Paper>
  );
}

export default SearchBar;