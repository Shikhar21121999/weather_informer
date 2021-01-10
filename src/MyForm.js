import React, {useState,useRef} from 'react'
import {Form,Card} from 'react-bootstrap'
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
        <div className="d-flex" style={{ height: '100vh' }}>
            <Form onSubmit={handlesubmit}>
                <Form.Group>
                <Form.Control ref={input_search} type="input" placeholder="Enter the location" />
                </Form.Group>
            </Form>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Weather Info</Card.Title>
                    <Card.Text>{temp}</Card.Text>
                    <Card.Text>{region}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
