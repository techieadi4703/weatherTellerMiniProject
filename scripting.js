const ApiKey="9458404ac71019c8fe35def34f6e83b3";
        const ApiURL="https://api.openweathermap.org/data/2.5/weather?q=";
        const sbox= document.querySelector(".search input");
        const sbut= document.querySelector(".search button");
        const weathericom=document.querySelector(".wicon");
        async function checkWeather(city){
            const response=await fetch(ApiURL+city+`&appid=${ApiKey}`+`&units=metric`);
            
            if(response.status==404){
                document.querySelector(".error").style.display="block";
                document.querySelector(".weather").style.display="none";
            }
            
            var data= await response.json();
            document.querySelector(".city").innerHTML= data.name;
            document.querySelector(".temp").innerHTML= (data.main.temp).toFixed(1)+`°C`;
            document.querySelector(".wind").innerHTML= (5*(data.wind.speed)/18).toFixed(2)+`km/hr`;
            document.querySelector(".humidity").innerHTML= (data.main.humidity)+`%`;

            if(data.weather[0].main=="Clouds"){
                weathericom.src="clouds.png";
            }
            else if(data.weather[0].main=="Rain"){
                weathericom.src="rain.png";
            }
            else if(data.weather[0].main=="Mist"){
                weathericom.src="mist.png";
            }
            else if(data.weather[0].main=="Clear"){
                weathericom.src="clear.png";
            }   
            else if(data.weather[0].main=="Snow"){
                weathericom.src="snow.png";
            }
            else if(data.weather[0].main=="Drizzle"){
                weathericom.src="drizzle.png";
            }

            document.querySelector(".weather").style.display="block";
            document.querySelector(".error").style.display="none";
            }

        sbut.addEventListener("click",()=>{
            checkWeather(sbox.value);
        })