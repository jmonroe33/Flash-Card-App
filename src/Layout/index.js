import React from "react";
import { Switch, Route } from 'react-router-dom'
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "../Home/Home";
import Deck from "../Deck/Deck"
import Study from "../Deck/Study";
import CreateDeck from "../Deck/CreateDeck"
import EditDeck from "../Deck/EditDeck"
import AddCard from "../Cards/AddCard";
import EditCard from "../Cards/EditCard";



function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/decks/new">
            <CreateDeck />
          </Route>

          <Route path={"/decks/:deckId/edit"}>
            <EditDeck />
          </Route>

          <Route path="/decks/:deckId/study">
            <Study />
          </Route>

          <Route path={"/decks/:deckId/cards/new"}>
            <AddCard />
          </Route>

          <Route path={"/decks/:deckId/cards/:cardId/edit"}>
            <EditCard />
          </Route>
          <Route path="/decks/:deckId">
            <Deck />
          </Route>
     
          <Route exact path="/">
            <Home />
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
