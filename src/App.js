import React,{useState,useEffect} from 'react'
// import { Button,Card } from 'react-bootstrap';
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
    var url="https://cors-anywhere.herokuapp.com/http://api.weatherapi.com/v1/current.json?key=d72c618a6ee745cb83e164815211001&q="
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
      <MyForm Setsearchlocation={Setsearchlocation} temp={temp} region={region}/>
      <div></div>
    </div>
  )
}
