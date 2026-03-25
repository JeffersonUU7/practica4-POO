// abstract class ProcesadorArchivo {
//     nombreArchivo: string;

//     constructor(nombreArchivo: string) {
//         this.nombreArchivo = nombreArchivo;
//     }

    
//     abstract procesar(): void;
// }

// class ArchivoTexto extends ProcesadorArchivo {
//     procesar(): void {
//         console.log("Archivo de texto: " + this.nombreArchivo);
//         console.log("Se está leyendo el texto...");
//     }
// }

// class ArchivoImagen extends ProcesadorArchivo {
//     procesar(): void {
//         console.log("Archivo de imagen: " + this.nombreArchivo);
//         console.log("Se está procesando la imagen...");
//     }
// }

// class ArchivoAudio extends ProcesadorArchivo {
//     procesar(): void {
//         console.log("Archivo de audio: " + this.nombreArchivo);
//         console.log("Se está reproduciendo el audio...");
//     }
// }


// // PROGRAMA PRINCIPAL

// const archivo1 = new ArchivoTexto("nota.txt");
// const archivo2 = new ArchivoImagen("foto.png");
// const archivo3 = new ArchivoAudio("cancion.mp3");

// // los meto en un arreglo
// const lista: ProcesadorArchivo[] = [archivo1, archivo2, archivo3];

// // los recorro
// for (const archivo of lista) {
//     archivo.procesar();
//     console.log("------------------");
// }



//EJERCICIO DE LA CLASE

abstract class Transformacion {
    // método obligatorio
    abstract transformar(dato: string): string;
}

//Mayúsculas
class Mayusculas extends Transformacion {
    transformar(dato: string): string {
        return dato.toUpperCase();
    }
}

//Minúsculas
class Minusculas extends Transformacion {
    transformar(dato: string): string {
        return dato.toLowerCase();
    }
}

//Reverso
class Reverso extends Transformacion {
    transformar(dato: string): string {
        return dato.split("").reverse().join("");
    }
}

//Eliminar espacios
class SinEspacios extends Transformacion {
    transformar(dato: string): string {
        return dato.replace(/\s+/g, "");
    }
}

//PROGRAMA PRINCIPAL
const texto = "Hola Mundo TS";

// arreglo de transformaciones
const transformaciones: Transformacion[] = [
    new Mayusculas(),
    new Minusculas(),
    new Reverso(),
    new SinEspacios()
];

console.log("Texto original:", texto);

transformaciones.forEach((t) => {
    console.log("Resultado:", t.transformar(texto));
});