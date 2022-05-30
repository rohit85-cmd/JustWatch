import { Container } from "@material-ui/core";
import {  Switch, Route } from "react-router-dom";
import "./App.css";
import Trending from "./Pages/Trending/Trending";
import Movies from "./Pages/Movies/Movies";
import Search from "./Pages/Search/Search";
import Series from "./Pages/Series/Series";
import Favourites from "./Pages/Favourites/Favourites"
import Header from "./components/Header/Header";
import MainNav from "./components/MainNavigation/MainNav";
function App() {
  return (
    <>
      <Header />
      <div className="app">
        <Container>
          <Switch>
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series} />
            <Route path="/search" component={Search} />
            <Route path="/favourites" component={Favourites} />
            <Route exact path="/" component={Trending} />
          </Switch>
        </Container>
      </div>
      <MainNav />
    </>
  );
}

export default App;
