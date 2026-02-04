import {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function SearchBox({UpdateInfo}){
     let [city,setCity]=useState("");
      let [error,setError]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="3d83e2caeb325108c7f0c9b65978ae6d";

    let getWeatherInfo=async()=>{
        try{
        let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let JSONResponse=await response.json();
        let result={
            city:city,
            temp:JSONResponse.main.temp,
            tempMin:JSONResponse.main.temp_min,
            tempMax:JSONResponse.main.temp_max,
            humidity:JSONResponse.main.humidity,
            feelsLike:JSONResponse.main.feels_like,
            weather:JSONResponse.weather[0].description
        };
        console.log(result);
        return result;
    }catch(err){
        throw err;
    }

    }
   

    let handleChange=(evt)=>{
        setCity(evt.target.value);
    };

    let handleSubmit=async (evt)=>{
        try{
        evt.preventDefault();
        console.log(city);
        setCity("");
        let newInfo=await getWeatherInfo();
        UpdateInfo(newInfo);
        }catch(err){
            setError(true);
        }
    };
    
    return(
        <div className="SearchBox">
        <form onSubmit={handleSubmit}>
             <TextField id="city" 
             label="City Name" 
             variant="outlined" 
             value={city}
             required 
             onChange={handleChange}
             />
             <br></br><br></br>
             <Button variant="contained" type='submit'>
        Search
      </Button>
      {error && <p style={{color:"red"}}>No such place exists!</p>}
        </form>
        </div>
    );
}