$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Warsaw&appid=eaebd860f8ef0b30f85c5dfec0c699f2", function(data){
    console.log(data);
    var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var temp = Math.floor(data.main.temp);
    var weather = data.weather[0].main
    
    $(".icon").attr('src', icon);
    $(".weather").append(weather)
    $('.temp').append(temp);
    
})