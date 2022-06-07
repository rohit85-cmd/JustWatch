import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import TvIcon from "@material-ui/icons/Tv";
import MovieIcon from "@material-ui/icons/Movie";
import SearchIcon from "@material-ui/icons/Search";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { useHistory } from "react-router-dom";


const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#2d313a",
    zIndex: 100,
  },
  
});

export default function SimpleBottomNavigation() {
  
  const classes = useStyles();
  const [value, setValue] = useState("trending");
  const history = useHistory();

  useEffect(() => {
    if (value === "trending") {
      history.push("/");
    } else if (value === "movies") {
      history.push("/movies");
    } else if (value === "tvSeries") {
      history.push("/series");
    } else if (value === "favourites") {
      history.push("/favourites");
    } else if (value === "search") {
      history.push("/search");
    }
  }, [value, history]);

  

  return (

      <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        console.log("value", value);
        setValue(newValue);
        
      }}
      className={classes.root}
    >
      <BottomNavigationAction
        
        style={{ color: "white" }}

        label="Trending"
        value="trending"
        icon={<WhatshotIcon />}
        
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        
        label="Movies"
        value="movies"
        icon={<MovieIcon />}
        
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        
        label="TV Series"
        value="tvSeries"
      
        icon={<TvIcon />}
      />

      <BottomNavigationAction
        style={{ color: "white" }}
        label="Favourites"
        value="favourites"
        icon={<FavoriteBorderIcon />}
        
      />

      <BottomNavigationAction
        style={{ color: "white" }}
        label="Search"
        value="search"
        icon={<SearchIcon />}
        
      />
    </BottomNavigation>

  );
}
