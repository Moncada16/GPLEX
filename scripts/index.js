const chargeCards = require("./chargeCards");
const axios = require('axios');


// $.get("https://api.1rodemayo.com/movies", (data)=>(
//     chargeCards(data)
// ));

async function fetchData() {
    try{
        const Datos = await axios.get("http://localhost:3000/movies");
        console.log(`Datos Obtenidos:`,  chargeCards(Datos.data));

    }catch (error) {
        console.error('Error al obtener los datos:', error);
    }
    
}
fetchData();



