import React,{useState,useEffect} from 'react'
import {Card} from 'react-bootstrap'
import './style.css'

import MyForm from './MyForm';

export default function App() {
  const [searchlocation,Setsearchlocation] = useState("london")
  const [temp,setTemp] = useState(55)
  const [region,setregion] = useState("my area")
  const [local_time,setlocaltime] = useState(new Date().toLocaleString())
  const [curr_cndn,setcurr_cndn] = useState("Fair")
  const [curr_humid,setcurr_humid] = useState(50)
  const [curr_wind,setcurr_wind] = useState(10)
  
  useEffect(() => {
    //we call the weather app api to get the data for current location
    
    // destructure to get the url to search for location
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    var url="https://cors-anywhere.herokuapp.com/http://api.weatherapi.com/v1/current.json?key=1d1f51db7c2e4baeb44144108211301="
    url+=searchlocation;

    fetch(url, requestOptions)
      .then(response => response.json())
      .then((data) => {
        
        setTemp(data.current.temp_c)
        setregion(data.location.region)
        setlocaltime(data.location.localtime)
        setcurr_cndn(data.current.condition.text)
        setcurr_humid(data.current.humidity)
        setcurr_wind(data.current.wind_mph)
        
      })
      .catch(error => console.log('error', error));
  
  },[searchlocation]);

  return (
    <div>
      <div className="top-centered">    
          <MyForm className="fixed-top centered" 
            Setsearchlocation={Setsearchlocation} temp={temp} region={region}/>
      </div>
      <div class="container custom-container card">
        <div className="row d-flex justify-content-left custom-font ">{region}</div>
        <div className="row d-flex custom-font">{local_time}</div>
        <div className="row d-flex custom-font">{curr_cndn}</div>
        <div className="row d-flex custom-font">
          <div className="col">{temp}</div>
          <div className="col">
            <div className="row d-flex justify-content-left custom-font ">{curr_humid}</div>
            <div className="row d-flex custom-font ">{curr_wind}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
