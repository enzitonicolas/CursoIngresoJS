function Mostrar()

{var contar=0
num=parseInt(prompt("Ingrese un numero"));
for(contador=1;contador<=num;contador++)
{
    if(num%contador==0)
    {
        contar++;
if(contar>2)
{   
    break; 
}
    }
}
if(contar==2)
{
    alert("Es primo")
}
else
{       
    alert("No es primo")
}


}//FIN DE LA FUNCIÓN