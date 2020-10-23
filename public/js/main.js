
const cityname = document.getElementById("cityname");
const submitbtn = document.getElementById("submitbtn");
const error_mesg = document.getElementById("error_mesg");

const temp_val = document.getElementById("temp_val");
const city_name=document.getElementById("city_name");
const temp_mood=document.getElementById("temp_mood");
const temp_status = document.getElementById("temp_status");

let today_day =  document.getElementById("today_day");
let today_date= document.getElementById("today_date");

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
            if(tempData == "Clear"){
                temp_mood.innerHTML = "<i class='fas fa-sun' style='color:#eccc68'></i>";
            }else if(tempData == "Clouds"){
                temp_mood.innerHTML = "<i class='fas fa-cloud' style='color:lightblue'></i>"
            }else if(tempData == "Rains"){
                temp_mood.innerHTML = "<i class='fas fa-rain` style='color:blue'></i>"
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

let currentDate = new Date()
const getCurrentDay = () => {
    // 0,1,2,3,4,5,6 
    // s,m,t,w,t,f,s
    var weekdays = new Array(7);
    weekdays[0] = "Sunday";
    weekdays[1] = "Monday";
    weekdays[2] = "Tueday";
    weekdays[3] = "Wednesday";
    weekdays[4] = "Thursday";
    weekdays[5] = "Friday";
    weekdays[6] = "Satday";

    let Days = weekdays[currentDate.getDay()];
    // console.log(Days);
    return Days;
}
getCurrentDate = () => {
    var monthsVal = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
    let Months = monthsVal[currentDate.getMonth()];
    let Dates = currentDate.getDate();

    // console.log(Dates,Months);
    return `${Dates} ${Months}`;
}

today_day.innerText = getCurrentDay();
today_date.innerText = getCurrentDate();


submitbtn.addEventListener("click",getWeatherinfo)