import Card from "../components/card";
import "./PaginaInicio.css";
import React from "react";
const PaginaInicio = () => {
    const Cards= [
        {
            imagen: "../public/alimento.jpg",
            titulo: "Alimentos",
            precio: 200,
            antiguo: 300,
            descuento: 30
        },
        {
            imagen: "../public/top-view-table-full-food.jpg",
            titulo: "Comida Rapida",
            precio: 150,
            antiguo: 250,
            descuento: 40
        },
        {
            imagen: "../public/comida.jpg",
            titulo: "Comida Casera",
            precio: 100,
            antiguo: 200,
            descuento: 50
        },
        {
            imagen: "../public/pollo.jpg",
            titulo: "Comida Rapida",
            precio: 150,
            antiguo: 250,
            descuento: 40
        }
        
        
    ]
    return (
        <div className="contenedor-pagina-principal">
            {Cards.map((card, index) => (
                <Card key={index}{...card} />   
            ))}

            
        </div>
    )
}

export default PaginaInicio;
