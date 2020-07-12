const vendedor = function(nombre){
    this.nombre = nombre;
    
}
this.sala = null;
const comprador = function(nombre){
    this.nombre = nombre;
    this.sala = null;
}

vendedor.prototype= {
    oferta:function(articulo,precio){
        console.log(`Para la subasta tenemos el siguiente articulo ${articulo}, su precio base es ${precio}`);

    },
    vendido: function(comprador){
        console.log(`vendido a ${comprador}`);
    }
}

comprador.prototype={
    oferta: function(mensaje,comprador){
        console.log(`${comprador.nombre}: ofrece ${mensaje}`);
    }
}

const subasta = function(){
    let compradores = {};
    return{
        registrar: function(usuario){
            compradores[usuario.nombre] = usuario;
            usuario.sala = this
        }
    }
}

// crear los objetos 

const diego = new comprador();
const emilio = new comprador();

const diegoEmilio = new vendedor();

const sub = new subasta();

sub.registrar(diego);
sub.registrar(emilio);
sub.registrar(diegoEmilio);



diegoEmilio.oferta('mi corazon ',1000);
console.log(diego);
