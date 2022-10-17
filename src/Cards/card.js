import React, { useEffect, useState } from "react";
import {useHistory} from "react-router-dom"
import { readCard } from "../utils/api";

function Card({cards}){
    //card index
   
    const [cardIndex, setCardIndex] = useState(0)
    // flip handler setting the state to true
    const [flipperDuh, setFlipperDuh]= useState(true)
    // the current card that will be displayed
    const [currentCard, setCurrentCard] = useState(cards[0])
    // grabs the index of the all ids at certain index
    const cardId = cards[cardIndex].id
    // used usehistory to push me back to home if user is done with cards
    const history = useHistory() 
    // my useEffect takes in card id to grab the specific card and set 
    //current card state to that card
       


    useEffect(() => {   
        // created my abort controller 
        const abrotContriller = new AbortController()
        // called the read card fucntionto grab specific card
        readCard(cardId, abrotContriller.signal).then(setCurrentCard)
        // return the cleanup function
        return () => abrotContriller.abort()
        // set dependency array to run useEffect when id changes
    }, [cardId])
      // created a flip halndler that sets the state to whatever is the 
      // opposite of the current state
    const flipHandler = () => {
        setFlipperDuh(!flipperDuh)   
    }
     // created click handler for the next button
    const nextHandler = () => {
        // sets the state of flipHandler to true which is the front of the card
        setFlipperDuh(true)
        // checking to see if were at the end of the cards 
        if (cardIndex === cards.length - 1){
            // asking the user if they would like to restart the cards 
            // if yes then push then set the card index back to the beginning
            // if no take the user back to the home page
        window.confirm("Restart cards?")? setCardIndex(0) : history.push('/')
        } else {   
            // if not at the end then just move forwards  
            setCardIndex(cardIndex + 1)           
        }

    }
    // if flip is true then show the front side of the card and rememner 
    // we add one to the card index to match up with total number of cards 
    // so that it can look as though it starts at one and its one of however 
    // many cards there are but the index is actually 0 or one behind bc 
    // arrays always start at 0 
    if (flipperDuh){
        return (
            <div className="card">
                <h4>Card {cardIndex + 1} of {cards.length}</h4>
                <p>{currentCard.front}</p>            
                <div> 
                    <button onClick={flipHandler} className="btn btn-secondary">Flip</button>
                </div>
            </div>
        )
    } else{
        return (
            <div className = "card">
                <h4>Card {cardIndex + 1} of {cards.length}</h4>
                <p>{currentCard.back}</p>            
                <div> 
                    <button onClick={flipHandler} className="btn btn-secondary">Flip</button>
                    <button onClick={nextHandler} className="btn btn-primary">Next</button>
                </div>
            </div>
        )
    }

  
    
}

export default Card
// need access to each card themselves 
// needs a heading of that displays the card numbers and which card your currently on Ex: 
// Card 1 of 3 
// needs a paragrph with the contents of the front part of the paragragh {card.front}
// add one to the cards index save the index to a variable