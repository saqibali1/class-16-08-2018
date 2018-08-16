

$.ajax({
    url:"http://api.openweathermap.org/data/2.5/weather?q=hyderabad&appid=6d756641e34948d4aaea1ef1a9545977&mode=htmls&units=metric",
    success: function(data){
        document.querySelector("body").innerHTML = `<p>weather of  ${data.name}</p>`;
        document.querySelector("body").innerHTML += `<p>clouds ${data.clouds.all}</p>`;
        document.querySelector("body").innerHTML += `<p>temp  ${data.main.temp}</p>`;
        document.querySelector("body").innerHTML += `<p>temp-max ${data.main.temp_max}</p>`;
        document.querySelector("body").innerHTML += `<p>temp-mins   ${data.main.temp_min}</p>`;
        
        
        
        
        console.log("success!!!");
        console.log(data);
    },

    error: function(error){
        console.log(error);
        
    }
})









