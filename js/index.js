let usuario="Liam Hansel";
let productoComprado=0;
const DESCUENTO=0.1;
let precioDescuento;
const PRODUCTOS=[{
    producto:"Pantalón",
    precio:10,
    talla:"m",
    imagen:"pantalon.jpg"
  },{
    producto:"Gorra",
    precio:5,
    talla:"s",
    imagen:"gorra.jpg"
  }
];

document.querySelector("body").innerHTML=`<h1>${usuario}</h1>
    <section class="caja">
      <div>
        PRODUCTO
        ${PRODUCTOS[productoComprado].producto}
      </div>
      precio  S/.
        ${PRODUCTOS[productoComprado].precio}
      </div>
      <div>
        Talla: ${PRODUCTOS[productoComprado].talla}
      </div>
      <div>
        Descuento: ${CalcularDescuento()}
      </div>
      <img src="img/${PRODUCTOS[productoComprado].imagen}" alt="PRODUCTO">
    </section>`

    console.log(CalcularDescuento());
    
    function CalcularDescuento(){
        precioDescuento = PRODUCTOS[productoComprado].precio * DESCUENTO;
        return precioDescuento;
  
    }