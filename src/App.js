import React,{useState,useEffect} from 'react'
import {Card} from 'react-bootstrap'
import './style.css'

import MyForm from './MyForm';

export default function App() {
  const [searchlocation,Setsearchlocation] = useState("london")
  const [temp,setTemp] = useState(55)
  const [region,setregion] = useState("my area")

  useEffect(() => {
    //we call the weather app api to get the data for current location
    
    // destructure to get the url to search for location
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    var url="https://cors-anywhere.herokuapp.com/http://api.weatherapi.com/v1/current.json?key=yourkey&q="
    url+=searchlocation;

    fetch(url, requestOptions)
      .then(response => response.json())
      .then((data) => {
        console.log(data.current.temp_c);
        setTemp(data.current.temp_c)
        setregion(data.location.region)
      })
      .catch(error => console.log('error', error));
  
  },[searchlocation]);

  return (
    <div>
      <div className="custom-container">    
          <MyForm className="fixed-top centered" 
            Setsearchlocation={Setsearchlocation} temp={temp} region={region}/>
      </div>
      <div className="card">
        <h5 className="card-header">header</h5>
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <Card style={{
          position: 'absolute', left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)'
          }}>
          <Card.Body>
              <Card.Title>Weather Info</Card.Title>
              <Card.Text>{temp}</Card.Text>
              <Card.Text>{region}</Card.Text>
          </Card.Body>
      </Card>
    </div>
  )
}
