const apiKey = '0324aba2f53f7ec306462c6c72986d61';

let cityName = document.getElementsByClassName('city');
let temp = document.getElementsByClassName('temp');
let weatherImg = document.getElementsByClassName('weatherImgMain');
let description = document.getElementsByClassName('description');
let humidity = document.getElementsByClassName('humidity');
let wind = document.getElementsByClassName('wind');

let seachBtn = document.querySelector('#searchIcon');

// console.log(cityNameInput.innerText);

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Amritsar&units=metric&appid=0324aba2f53f7ec306462c6c72986d61';

function getWeatherData(city){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&appid='+ apiKey )
    
    .then( (res)=> res.json())
    .then((data)=>
    
    { 
        
        if(data.cod == 200){
        let tempValue = Math.floor(data.main.temp);
        let speedValue = Math.floor(data.wind.speed);
        let icon = data.weather[0].icon;
        document.querySelector('.city').style.marginTop = "20px"
        document.querySelector('.icon').setAttribute("height","120px");
        document.querySelector('.icon').style.margin= "5px"
        document.querySelector('.city').innerText = `Weather in ${data.name}`
        document.querySelector('.temp').innerText = `${tempValue}° C`
        document.querySelector('.icon').src = `https://openweathermap.org/img/wn/${icon}@2x.png`
        document.querySelector('.description').innerText = ` ${data.weather[0].main}`
        document.querySelector('.humidity').innerText = ` ${data.main.humidity} %`
        document.querySelector('.wind').innerText = ` ${speedValue} Km/h`;
        document.body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?${data.name},Landscape')`;
        console.log(data);

        }
        else{
           // let emptyValue = "-";
            console.log("invalid Data");
            document.querySelector('.city').style.marginTop = "20px"
            document.querySelector('.city').innerText = "Invalid City Name"
        document.querySelector('.temp').innerText = "";
        
        document.querySelector('.description').innerText =  "";
        document.querySelector('.humidity').innerText = "";
        document.querySelector('.wind').innerText = "";
        document.querySelector('.icon').setAttribute("height","60px");
        document.querySelector('.icon').src = `sunny_weather.gif`
        document.querySelector('.icon').style.margin= "50px"
        document.querySelector('.icon').style.borderRadius= "10px"
        }
    })
    
    
}
searchIcon.addEventListener('click',()=>{
    const city = document.querySelector('.inputTextOfCityName').value;
    getWeatherData(city)
})
document.querySelector('.inputTextOfCityName').addEventListener('keydown',(e)=>{
    // console.log(e);
    if(e.key==="Enter"){
    const city = document.querySelector('.inputTextOfCityName').value;
    getWeatherData(city)
    }
    
})