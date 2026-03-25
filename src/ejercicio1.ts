abstract class Operacion {
  abstract ejecutar(valor: number): number;
}


// ─── CLASES HIJAS 

// Operacion 1: Duplicar el valor
class Duplicar extends Operacion {
  ejecutar(valor: number): number {
    const resultado = valor * 2;
    console.log(`Duplicar: ${valor} → ${resultado}`);
    return resultado;
  }
}

// Operacion 2: Sumar un número fijo (configurado al crear el objetoo)
class Sumar extends Operacion {
  private cantidad: number;

  constructor(cantidad: number) {
    super();
    this.cantidad = cantidad;
  }

  ejecutar(valor: number): number {
    const resultado = valor + this.cantidad;
    console.log(`Sumar ${this.cantidad}: ${valor} → ${resultado}`);
    return resultado;
  }
}

// Operacion 3: Elevar al cuadrado
class Cuadrado extends Operacion {
  ejecutar(valor: number): number {
    const resultado = valor ** 2;
    console.log(`Cuadrado: ${valor} → ${resultado}`);
    return resultado;
  }
}

// Operacion 4 (extra): Restar la mitad del valor
class RestarMitad extends Operacion {
  ejecutar(valor: number): number {
    const resultado = valor - valor / 2;
    console.log(`RestarMitad: ${valor} → ${resultado}`);
    return resultado;
  }
}


// ─── PIPELINE (flujo de operaciones) 
// Recibe un valor inicial y un arreglo de operaciones.
// Ejecuta cada operación en orden, pasando el resultado al siguiente.
function ejecutarPipeline(valorInicial: number, operaciones: Operacion[]): number {
  let valorActual = valorInicial;

  for (const operacion of operaciones) {
    valorActual = operacion.ejecutar(valorActual);
  }

  return valorActual;
}


// ─── EJECUCIÓN PRINCIPAL 
const operaciones: Operacion[] = [
  new Duplicar(),
  new Sumar(10),
  new Cuadrado(),
  new RestarMitad(),
];

const valorInicial = 5;

console.log(`\nValor inicial: ${valorInicial}`);
console.log("─────────────────────────");

const resultado = ejecutarPipeline(valorInicial, operaciones);

console.log("─────────────────────────");
console.log(`Resultado final: ${resultado}`);