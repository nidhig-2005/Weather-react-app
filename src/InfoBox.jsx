import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function InfoBox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1603695820889-f8a0a86b8712?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHVzdHl8ZW58MHx8MHx8fDA%3D"

    let COLD_URL="https://images.unsplash.com/photo-1674407866481-a39b2239f771?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sZCUyMFdFQVRIRVJ8ZW58MHx8MHx8fDA%3D"
    let HOT_URL="https://images.unsplash.com/photo-1561473880-3b8b12de0a71?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8SE9UJTIwV0VBVEhFUnxlbnwwfHwwfHx8MA%3D%3D"
    let RAIN_URL="https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFpbiUyMFdFQVRIRVJ8ZW58MHx8MHx8fDA%3D"

    return(

        <div className="InfoBox">
            <div className="cardContainer">
             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80 ?RAIN_URL: info.temp>15? HOT_URL:COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color='text.secondary'component={"span"}>
         <p>Temperature={info.temp}&deg;C</p>
         <p>Humidity={info.humidity}</p>
         <p>Min Temp={info.tempMin}&deg;C  </p>
         <p>Max Temp={info.tempMax}&deg;C </p>
         <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C </p>
        </Typography>
      </CardContent>
    </Card>
</div>
        </div>
    )
}