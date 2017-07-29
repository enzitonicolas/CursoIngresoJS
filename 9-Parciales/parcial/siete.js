function Mostrar()
{   var nota;
    var sexo;
    var acum=0;
    var cantidad;
    var min;
    var max;
    var contmas=0;

while(cantidad<100)
{   
    cantidad++;
    nota=prompt("ingrese");
while(nota<0||nota>10)
{   
    nota=prompt("ingrese");
}
    nota=parseInt(nota);
    sexo=prompt("ingrese");
while(sexo!="f" && sexo!="m")
{   
    sexo=prompt("Ingrese");
}
    acum+=nota;
if(nota<min)
{   min=nota;
}
if(nota>6 && sexo=="m")
{
    contmas++;
}
    document.write(acum/cantidad)
}


}
