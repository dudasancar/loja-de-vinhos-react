import React from 'react'

const BestClients = () => {
    function handleSubmit(event) {
        event.preventDefault();
        fetch('https://vendavinhos-backend.herokuapp.com/bestClients').then(response => {
            console.log(response);
            return response.json();
        }).then(json => {
            console.log(json);
            return json;
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text"/>
            <button>Enviar</button> 
        </form>
    )
}

export default BestClients;
