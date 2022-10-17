import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom"
import { readDeck } from "../utils/api";
import Card from "..//Cards/card"

function Study() {
    const { deckId } = useParams()
    const [deck, setDeck] = useState({})


    useEffect(() => {
        setDeck({})
        const abortController = new AbortController()
        readDeck(deckId, abortController.signal).then(setDeck)
    }, [deckId])

    if (!deck.id) {
        return <p>loading ...</p>

    } else if (deck.cards.length < 3) {
        return (
            <>

                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to={'/'}>Home</Link></li>
                        <li className="breadcrumb-item"><Link to={`/decks/${deckId}`}>{deck.name}</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Study</li>
                    </ol>
                </nav>
                <h1>{deck.name}: Study</h1>
                <h2> Not enough cards.</h2>
                <p>You need at lest 3 cards to study.
                    There are 2 cards in this deck
                </p>
                <Link to={`/decks/${deckId}/cards/new`}>
                    <button>Add Cards</button>
                </Link>

            </>

        )
    } else {
        return (
            <section>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to={'/'}>Home</Link></li>
                        <li className="breadcrumb-item"><Link to={`/decks/${deckId}`}>{deck.name}</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Study</li>
                    </ol>
                </nav>

                <h1>{deck.name}: Study</h1>
                <Card cards={deck.cards} />
            </section>

        )
    }


}



export default Study



 // needs to have access to the cards maybe with useParams hook
// needs a breadcrum with a link to to home and a link to the deck with the text study at the end
// needs a heading with the text `Study${deck.name}` 

