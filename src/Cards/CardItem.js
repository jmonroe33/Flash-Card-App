import React from "react";
import {Link, useRouteMatch, useHistory } from "react-router-dom"
import { deleteCard } from "../utils/api";

function CardItem({card}){

  const {url}= useRouteMatch()
  const history = useHistory()

  function handleCardDelete(){
    if (window.confirm("Delete this card ? You will not be able to recover it.")){
        const abortController = new AbortController()
        deleteCard(card.id, abortController.signal)
        history.go(0)
    }
}
    return (
       <div className="card">
              <div className="d-flex justify-content-between">
                <p>{card.front}</p>
                <p>{card.back}</p> 
              </div>
            
            <div className="d-flex justify-content-end " >
              <Link to={`${url}/cards/${card.id}/edit`}>
                <button className="btn btn-secondary">Edit</button>              
              </Link>
              <button onClick={handleCardDelete} type="button" className="btn btn-danger">Delete</button>
            </div>
         

       </div>
    )
}
   



export default CardItem