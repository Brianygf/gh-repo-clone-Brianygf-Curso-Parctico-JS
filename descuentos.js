

function calcularPrecioConDescuento(precio,descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioCondescuento=(precio*porcentajePrecioConDescuento)/100;
    
return precioCondescuento;
}
function priceOutcome(){
       
  // alert("Hola");
   const input5=document.getElementById("InputPrice");
    const Price=Number(input5.value);
    const input6=document.getElementById("InputDiscount");
    const Discount=Number(input6.value);
    //alert("IN1 " + Price);
    //alert("EIN2 " + Discount);

   const PrecioConDescuento=calcularPrecioConDescuento(Price,Discount);

    
    ResultP.innerText="El precio con su respectivo descuento es  $" + PrecioConDescuento;
}


/*console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioCondescuento,

});
*/
