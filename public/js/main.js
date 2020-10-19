
const cityname = document.getElementById("cityname");
const submitbtn = document.getElementById("submitbtn");
const error_mesg = document.getElementById("error_mesg");

const temp_val = document.getElementById("temp_val");
const city_name=document.getElementById("city_name");
const temp_mood=document.getElementById("temp_mood");
const temp_status = document.getElementById("temp_status");

const data_hide = document.querySelector(".middle_layer");

const getWeatherinfo=async()=>{
    event.preventDefault();
    let cityvalue = cityname.value;
    if(cityvalue === ""){
        error_mesg.innerText = `Please write the name before you search`
        error_mesg.classList.add("text-danger");
        data_hide.classList.add("data_hide");
    }
    else{
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityvalue}&units=metric&appid=5a4f2fd3428049d40ded277680c845bf`
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            console.log(arrData[0])

            temp_val.innerText = arrData[0].main.temp;
            city_name.innerText =`${arrData[0].name} ${arrData[0].sys.country}`;
            temp_status.innerText = arrData[0].weather[0].main;

            let tempData= arrData[0].weather[0].main;
            if(tempData == "clear"){
                temp_mood.innerHTML = "<i class='fas fa-sun' style='color:#eccc68'></i>";
            }else if(tempData == "clouds"){
                temp_mood.innerHTML = "<i class='fas fa-cloud' style='color:#eccc68'></i>"
            }else if(tempData == "rains"){
                temp_mood.innerHTML = "<i class='fas fa-rain` style='color:#eccc68'></i>"
            }else{
                temp_mood.innerHTML = "<i class='fas fa-sun' style='color:#eccc68'></i>"
            }

            data_hide.classList.remove("data_hide");
            error_mesg.innerText="";
        }catch{
            error_mesg.innerText = `Please enter valid city name`
            data_hide.classList.add("data_hide");
            error_mesg.classList.add("text-danger");
        }
    }
}

submitbtn.addEventListener("click",getWeatherinfo)