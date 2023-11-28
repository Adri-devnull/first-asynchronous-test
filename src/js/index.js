// //ELEMENTOS DEL DOM
const spanElement = document.getElementById('span');
const h2Element = document.getElementById('h2');
const buttonElement = document.getElementById('button');

const request = url => fetch(url);

// FUNCION FETCH PARA RECIBIR LOS DATOS
const fetchData = async () => {
    try {
        const response = await request('https://api.adviceslip.com/advice');
        if (response.status === 200) {
            const data = await response.json();
            spanElement.textContent = `ADVICE #${data.slip.id}`;
            h2Element.textContent = `"${data.slip.advice}"`;
        }
    } catch (err) {
        console.log(err);
    }
};

// EVENTO DE ESCUCHA PARA LLAMAR A LA FUNCION FETCHDATA 
buttonElement.addEventListener('click', () => {
    fetchData();
});


