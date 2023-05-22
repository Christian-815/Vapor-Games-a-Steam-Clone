import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import GetAllGames from "./components/Games";
import GetOneGame from "./components/Games/singleGame";
import UserReviews from "./components/Reviews/UserReviews";
import SingleReview from "./components/Reviews/SingleReview";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import { getUserReviews } from "./store/reviews";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const user = useSelector(state => state.session.user)

  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  if (user) {
    dispatch(getUserReviews(user.id))
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
        </Switch>
      )}
    </>
  );
}

export default App;
