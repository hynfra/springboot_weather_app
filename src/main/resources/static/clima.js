
function get_coordenadas(){
    // getCurrentPosition es asincronica, por ende debe pasarse una funcion
    navigator.geolocation.getCurrentPosition( function (pos){
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        get_pronostico(lat,lon)
    });
    console.log("listo");
}
async function get_pronostico(lat,lon){
    

    // esto se saca directamente desde la pagina openweather
    const api_key = 'c8606a0edcae26735b2c530d60bdb0b1';

    // creamos la url con nuestra ubicacion actual y el API KEY
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`
    console.log(url);
    // realizamos la consulta a la api openweather
    const resp = await fetch(url);
    //desempaquetamos la respuesta obtenida
    const data = await resp.json();
    console.log(data)
    //obtenemos la temperatura
    const temperature = data.main.temp - 273;
    // 5. dibujamos la temperatura
    $('#pronostico').html("En este momento hay una temperatura de " + temperature + "")
    console.log(data);
}
get_coordenadas();