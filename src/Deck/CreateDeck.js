
import React, { useState, useEffect }from "react";
import { useHistory, Link } from 'react-router-dom'
import { createDeck } from "../utils/api";
import DeckForm from "./DeckForm"
function CreateDeck(){
    // initial state for formData 
    const initialState = {
        name:"", 
        description:""
    }
 const history = useHistory()
 // set formData to be an object with two keys with empty values
 const [formData, setFormData] = useState({...initialState})
 
 // created a function to update/ overwrite the values in formData 
 // to whatever a user types in.
 function onChangeHandler({target}){
    setFormData({
        ...formData,
        [target.name]:target.value
    })
 }
 // created a function to send in the new object that was created by the user
 // that is stored in form data. it also takes us to the newly created deck page
 async function onSubmitHandler(event){
    const abortController = new AbortController()
    event.preventDefault()
    const response = await createDeck(formData, abortController.signal)
    setFormData(initialState)
    history.push(`/decks/${response.id}`)
 }
  function onCancelHandler() {
    history.push('/')
  }
 
 useEffect(()=>{},[])

    return (
        <section>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to={"/"}>Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Create Deck</li>
                    </ol>
                </nav>

            <h2>Create Deck</h2>
            <DeckForm 
            onChangeHandler={onChangeHandler} 
            onSubmitHandler={onSubmitHandler}
            formData={formData}
            onCancelHandler={onCancelHandler}
                />
        </section>
    )

}



export default CreateDeck
// is going to need to retrieve all current decks array and store. 
// going to need to set a state variable to store that data in 
// going to need to set a state variable to take in the inputed name of new deck
// also a state variable for the input of the description and some sort of initial state.
// is going to need a text area that takes in description for the deck 
// i need to add a change handler for the change in state to add a new deck to the deck array
// needs a cancel button and a submit button 
// needs a onsubmit handler of some sort. 
// on cancel is provided i think ?
// 

