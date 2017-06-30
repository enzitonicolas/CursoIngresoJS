/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{var num1;
    var num2;

num1=document.getElementById("numeroUno").value;
num2=document.getElementById("numeroDos").value;

num1=parseInt(num1);
num2=parseInt(num2);

var SacarResto;
SacarResto=num1%num2;
alert(SacarResto);

	
}
