import React, {useRef} from 'react'
import {Form} from 'react-bootstrap'
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
        <div >
            <Form onSubmit={handlesubmit}>
                <Form.Group>
                <Form.Control ref={input_search} type="input" placeholder="Enter the location" />
                </Form.Group>
            </Form>
        </div>
    )
}
