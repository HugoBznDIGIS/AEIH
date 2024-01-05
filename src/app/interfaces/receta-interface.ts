interface Recetas{
    IdReceta: number,
    Nombre: string,
    Descripcion: string,
    Ingrediente: {
        IdIngrediente: number
    },
    Pais:{
        IdPais: number
    },
    Imagen: string,
    Porcion: number
}

export {
    Recetas
}