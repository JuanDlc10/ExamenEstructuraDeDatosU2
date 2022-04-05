"use strict";
class Examen {
    constructor() {
        this.nombre = '';
        this.primerApellido = '';
        this.segundoApellido = '';
        this.fechaNacimiento = '';
    }
    obtenerDatos() {
        //Se obtienen los datos del usuario
        this.nombre = document.getElementById("nombre").value.toUpperCase();
        this.primerApellido = document.getElementById("primerApellido").value.toUpperCase();
        this.segundoApellido = document.getElementById("segundoApellido").value.toUpperCase();
        this.fechaNacimiento = document.getElementById("fechaNacimiento").value;
    }
    obtenerRFC() {
        //Se obtiene el rfc ingresado con el siguiente codigo
        let nombres = this.nombre.split(' ');
        let primerApellidoCompuesto = this.primerApellido.split(' ');
        let segundoApellidoCompuesto = this.primerApellido.split(' ');
        let primerLetraApellido = this.primerApellido[0];
        let primerLetraSegundoApellido = this.segundoApellido[0];
        let segundaLEtraApellido = this.primerApellido[1];
        let primerLetraNombre = this.nombre[0];
        let primerDigitoAño = this.fechaNacimiento[2];
        let segundoDigitoAño = this.fechaNacimiento[3];
        let primerDigitoMes = this.fechaNacimiento[5];
        let segundoDigitoMes = this.fechaNacimiento[6];
        let primerDigitoDia = this.fechaNacimiento[8];
        let segundoDigitoDia = this.fechaNacimiento[9];
        let arregloRfc = [];
        let arregloFechaNacimiento = [];
        function arrayRFC() {
            //funcion que genera el RFC sin restricciones.
            arregloFechaNacimiento.push(primerDigitoAño, segundoDigitoAño, primerDigitoMes, segundoDigitoMes, primerDigitoDia, segundoDigitoDia);
            arregloRfc.push(primerLetraApellido, segundaLEtraApellido, primerLetraSegundoApellido, primerLetraNombre, arregloFechaNacimiento.join(''));
            alert(arregloRfc.join(''));
        }
        //Primer restricción apellidos con letra Ñ
        if (primerLetraApellido == 'Ñ' || primerLetraSegundoApellido == 'Ñ') {
            if (primerLetraApellido == 'Ñ' && primerLetraSegundoApellido == 'Ñ') {
                primerLetraApellido = 'X';
                primerLetraSegundoApellido = 'X';
                arrayRFC();
            }
            else if (primerLetraApellido == 'Ñ') {
                primerLetraApellido = 'X';
                arrayRFC();
            }
            else {
                primerLetraSegundoApellido = 'X';
                arrayRFC();
            }
        }
        else {
            //Segunda restricción primer nombre MARIA O JOSE
            if (nombres[0] == 'MARIA' || nombres[0] == 'JOSE') {
                switch (nombres[0]) {
                    case 'MARIA':
                        nombres.shift();
                        let primerletraNombre1 = nombres.toString();
                        primerLetraNombre = primerletraNombre1[0];
                        arrayRFC();
                        break;
                    case 'JOSE':
                        nombres.shift();
                        let primerletraNombre2 = nombres.toString();
                        primerLetraNombre = primerletraNombre2[0];
                        arrayRFC();
                        break;
                }
            }
            else {
                if (primerApellidoCompuesto[0] == 'MC') {
                    primerApellidoCompuesto.shift();
                    let primerletraaPellidoCompuesto = primerApellidoCompuesto.toString();
                    segundaLEtraApellido = primerletraaPellidoCompuesto[1];
                    if (segundaLEtraApellido == 'R') {
                        primerLetraApellido = primerletraaPellidoCompuesto[0];
                        segundaLEtraApellido = primerletraaPellidoCompuesto[2];
                        arrayRFC();
                    }
                    else {
                        primerLetraApellido = primerletraaPellidoCompuesto[0];
                        arrayRFC();
                    }
                }
                else {
                    arrayRFC();
                }
            }
        }
    }
    limpiar() {
        document.getElementById("nombre").value = '';
        document.getElementById("primerApellido").value = '';
        document.getElementById("segundoApellido").value = '';
        document.getElementById("fechaNacimiento").value = '';
        document.getElementById("rfc").value = '';
    }
}
let objeto = new Examen();
function obtener() {
    objeto.obtenerDatos();
    objeto.obtenerRFC();
}
function limiarCampos() {
    objeto.limpiar();
}
