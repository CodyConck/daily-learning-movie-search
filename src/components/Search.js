import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #0000FF, #ABD7EC)",
    borderRadius: 5,
    marginLeft: ".5rem",
    color: "white",
  },
});

const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  };
  function ButtonStyled() {
    const classes = useStyles();
    return (
      <Button
        endIcon={<SearchIcon />}
        onClick={callSearchFunction}
        className={classes.root}
      >
        Search
      </Button>
    );
  }
  return (
    <form className="search" action="">
      <TextField
        variant="outlined"
        size="small"
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
        placeholder="Enter Movie Title"
      />
      <ButtonStyled variant="contained" type="submit">
        Search
      </ButtonStyled>
    </form>
  );
};

export default Search;
