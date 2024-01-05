interface Restaurante {
    IdRestaurante: number,
    Nombre: string,
    Imagen: string,
    Direccion: string,
    Calificacion: number,
    Pais: {
        IdPais: number,
        Nombre: string
    },
    Receta: {
        IdReceta: number,
        Nombre: string
    }
}

interface RestaurantePost {
    Nombre: string,
    Imagen: string,
    Direccion: string,
    Calificacion: number,
    IdPais: number
}

export {
    Restaurante,
    RestaurantePost
}