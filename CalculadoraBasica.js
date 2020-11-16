// CalculadoraBasica.js
// Alejandro Del Gallego Moro
class Calculadora {
	constructor(){
		this.memoria=0;
	}
	digitos(numero){
		document.getElementById("pantalla").value+=numero;
		this.operando=numero;
	}
	punto(){
		document.getElementById("pantalla").value+=".";
	}
	suma(){
		document.getElementById("pantalla").value+="+";
	}
	resta(){
		document.getElementById("pantalla").value+="-";
	}
	multiplicacion(){
		document.getElementById("pantalla").value+="*";
	}
	division(){
		document.getElementById("pantalla").value+="/";
	}
	mrc(){
		document.getElementById("pantalla").value+=this.memoria;
	}
	mMenos(){
		try {
			this.memoria=eval(this.memoria+"-"+document.getElementById("pantalla").value);
		}
		catch(err) {
			this.memoria="Error = "+err;
		}
	}
	mMas(){
		try {
			this.memoria=eval(this.memoria+"+"+document.getElementById("pantalla").value);
		}
		catch(err) {
			this.memoria="Error = "+err;
		}
	}
	borrar(){
		document.getElementById("pantalla").value="";
		this.operando="0";
	}
	igual(){
		var expresion=document.getElementById("pantalla").value;
		var resultado="0";
		try {
			resultado=eval(expresion);
		}
		catch(err) {
			resultado="Error = "+err;
		}
		document.getElementById("pantalla").value=resultado;
		this.operando=resultado;
	}
}
var calculadora = new Calculadora();