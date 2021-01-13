import React, {useRef} from 'react'
import {Form} from 'react-bootstrap'
import './style.css'
export default function MyForm({Setsearchlocation,temp,region}) {
    const input_search = useRef();
    
    // renders a form with a input search
    // and a search button

    const handlesubmit = (e) =>{
        // arrow function to handel form submission
        e.preventDefault();
        console.log("form submitted")
        console.log(input_search.current.value)
        Setsearchlocation(input_search.current.value)
    } 


    return (
        <form onSubmit={handlesubmit}>
            <input type="text" class="custom-input col-6" row="" ref={input_search} placeholder="Enter the location" />
        </form>
    )
}
