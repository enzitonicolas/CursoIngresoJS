function Mostrar()
{
var num;
var contador=0;
var acumulador=0;

while(contador<5)
{contador++;
num=prompt("Ingrese un numero");
num=parseInt(contador);
console.log(num);
acumulador=acumulador+num;
}
while (isNaN(num))
{num=prompt("Ingresa el numero.")
num=parseInt(num)

}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN