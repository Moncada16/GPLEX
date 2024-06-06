const axios = require('axios');


document.getElementById('clear').addEventListener('click', function() {
    document.getElementById('formInputs').reset();
});
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.value = '';
    });


document.getElementById('formInputs').addEventListener('submit', async function(event) {
    event.preventDefault(); 
    const inputs = document.querySelectorAll('input');
    let formularioCompleto = true;

    inputs.forEach(input => {
        if (input.value.trim() === '') {
            formularioCompleto = false;
        }
    });

    const title = document.getElementById('title').value;
    const director = document.getElementById('director').value;
    const year = parseInt(document.getElementById('year').value);
    const genre = document.getElementById('genre').value;
    const duration = document.getElementById('duration').value.trim();
    const rate = document.getElementById('rate').value;
    const poster = document.getElementById('poster').value;

    const movieData = { title, director, year, genre, duration,rate,poster };
    const API_URL = `https://back-production-aea1.up.railway.app/movies`

    try {
        const response = await axios.post(API_URL, movieData);
        alert('Película creada exitosamente');
        console.log(response.data);
        
    } catch (error) {
        console.error('Error al crear la película:', error.response.data);
        alert('Hubo un error al crear la película');
    }
});
    // async function sendForm(event) {
    //     event.preventDefault(); // Evita el envío del formulario por defecto
    //     const inputs = document.querySelectorAll('input');
        
    //     });
    //     const title = document.getElementById('title').value.trim();
    //     const director = document.getElementById('director').value.trim();
    //     const year = document.getElementById('year').value.trim();
    //     const genre = document.getElementById('genre').value.trim();
    //     const duration = document.getElementById('duration').value.trim();
    //     const rate = document.getElementById('rate').value;
    //     const poster = document.getElementById('poster').value;
        
    //     const movieData = { title, director, year, genre,duration,rate,poster };

    //     try {
    //         const response = await axios.post("http://localhost:3000/movies", movieData);     
    //         alert('Película agregada exitosamente');
    //         console.log(response.data);
    //         // Aquí puedes actualizar la lista de películas en tu frontend
    //     } catch (error) {
    //         console.error('Error:', error.response.data);
    //         alert('Hubo un error al agregar la película');
    //     }
    // };
    
    // if (formularioCompleto) {
    //     alert('Formulario enviado correctamente');
    // } else {
    //     alert('Por favor, completa todos los campos');
    // }
    