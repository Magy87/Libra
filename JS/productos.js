export const productos = [
    {
    id: 1,
    imagen: imagenes/ajuar.jpeg,
    nombre: "Ajuar",
    descripcion: "gorro, batita y ranita",
    precio: 10000,
    categoria: "nena",
},
{
    id: 2,
    imagen: imagenes/body-m-corta.jpeg,
    nombre: "Body",
    descripcion: "body manga corta, cuello americano",
    precio: 7000,
    categoria: "nena",
},
{
    id: 3,
    nombre: "conjunto",
    imagen:imagenes/body-m-larga.jpeg,
    descripcion: "Body manga larga y pantalon",
    precio: 9500,
    categoria: "nena",
},
{
    id: 4,
    imagen: imagenes/buzo-pantalon.jpeg,
    nombre: "Body y short",
    descripcion: "Body musculosa con pantalon",
    precio: 11000,
    categoria: "nena",
},
{
    id: 5,
    imagen:imagenes/vestidito.jpeg,
    nombre: "vestido",
    descripcion: "vestido con animales",
    precio: 10000,
    categoria: "nena",
},
{
    id: 6,
    imagen:imagenes/osito.jpeg,
    nombre: "Dormilon",
    descripcion: "Dormilon largo",
    precio: 7000,
    categoria: "nena",
},
]

JSON.parse(localStorage.getItem("productos")) || localStorage.setItem("productos", JSON.stringify(productos));












// {
//     id: 4,
//     nombre: "conjunto",
//     descripcion: "conjunto de musculosa y short",
//     precio: 10000,
//     categoria: "nene",
// },

// {
//     id: 5,
//     nombre: "Body",
//     descripcion: "body manga corta con monito",
//     precio: 7000,
//     categoria: "nene",
// },
// {
//     id: 6,
//     nombre: "Osito",
//     descripcion: "osito largo",
//     precio: 7000,
//     categoria: "nene",
// },

// {
//     id: 7,
//     nombre: "Babitas",
//     descripcion: "pack de babitas",
//     precio: 4000,
//     categoria: "accesorio",
// },

// {
//     id: 8,
//     nombre: "toallon",
//     descripcion: "toallon con capucha + babita",
//     precio: 7500,
//     categoria: "accesorio",
// },
// {
//     id: 9,
//     nombre: "cambiador",
//     descripcion: "cambiador con animales",
//     precio: 7000,
//     categoria: "accesorio",


