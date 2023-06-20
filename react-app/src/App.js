import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, useLocation } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import GetAllGames from "./components/Games";
import GetOneGame from "./components/Games/singleGame";
import UserReviews from "./components/Reviews/UserReviews";
import SingleReview from "./components/Reviews/SingleReview";
import ShoppingCart from "./components/Cart";
import UserLibrary from "./components/Library";
import UserInstalledGames from "./components/Library/installedGames";
import UserUninstalledGames from "./components/Library/uninstalledGames";
import SearchResults from "./components/SearchBar/searchResults";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import { getUserReviews } from "./store/reviews";
import { GetUserCart } from "./store/carts";
import { getAllGames } from "./store/games";
import { GetUserLibrary } from "./store/library";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const user = useSelector(state => state.session.user)

  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname])
    return null;
  }

  ScrollToTop()

  useEffect(async () => {
    await dispatch(getAllGames())
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  if (user) {
    dispatch(getUserReviews(user.id))
    dispatch(GetUserCart())
    dispatch(GetUserLibrary())
  }

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login" >
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path='/' exact>
            <GetAllGames />
          </Route>
          <Route path='/games/:game_id'>
            <GetOneGame />
          </Route>
          <Route path='/reviews/userreview/:review_id'>
            <SingleReview />
          </Route>
          <Route path='/reviews/user'>
            <UserReviews />
          </Route>
          <Route path='/cart'>
            <ShoppingCart />
          </Route>
          <Route path='/library/uninstalled'>
            <UserUninstalledGames />
          </Route>
          <Route path='/library/installed'>
            <UserInstalledGames />
          </Route>
          <Route path='/library' exact>
            <UserLibrary />
          </Route>
          <Route path='/search/:search_terms'>
            <SearchResults />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
