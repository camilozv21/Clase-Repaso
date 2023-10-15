import React, { useState } from 'react';
import axios from 'axios';

function Form() {
    const [formData, setFormData] = useState({
        mensaje: '',
        otroCampo: '',
        // Agrega aquí otros campos de entrada según tus necesidades
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/enviarMensaje', formData);
            console.log('Mensaje enviado:', response.data.mensaje);
        } catch (error) {
            console.error('Error al enviar el mensaje:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="mensaje"
                placeholder="Escribe tu mensaje..."
                value={formData.mensaje}
                onChange={handleChange}
            />
            <input
                type="text"
                name="otroCampo"
                placeholder="Otro campo..."
                value={formData.otroCampo}
                onChange={handleChange}
            />
            {/* Agrega aquí otros campos de entrada según tus necesidades */}
            <button type="submit">Enviar</button>
        </form>
    );
}

export default Form;


/* const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001; // Puedes cambiar el puerto si lo deseas

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Ruta para recibir mensajes por POST
app.post('/enviarMensaje', (req, res) => {
  const { mensaje, otroCampo } = req.body;
  
  // Procesa los datos como desees
  // Puedes guardarlos en una base de datos, realizar alguna acción, etc.

  // Envía una respuesta de vuelta a la aplicación React
  res.json({ mensaje: 'Mensaje recibido correctamente' });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
 */