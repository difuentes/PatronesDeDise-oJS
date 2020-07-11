//conocido como subcriptor publicador

let observer = {

    obtenerOfertas : function(callback) {
        if(typeof callback === "function"){
            this.subcribers[this.subcribers.length] = callback;
        }
    },
    cancelarOfectas : function(callback)  {
        for (let i = 0; i < this.subcribers.length; i++) {
            if(this.subcribers[i] === callback ){
                delete this.subcribers[i];
            }
            
        }
    },
    publicarOferta : function(oferta)  {
        for(let i = 0; i < this.subcribers.length ; i++) {
            if(typeof this.subcribers[i] === 'function' ){
                delete this.subcribers[i](oferta);
            }
            
        }
    },
    crear: function(objeto) {
        for (let i in this) {
            if(this.hasOwnProperty(i)){
                objeto[i] = this[i];
                objeto.subcribers = [];
            }
            
        }
    }
}

//vendedores 

const Awakelab = {
    nuevoCurso: function() {
        const curso = 'Certificacion de JS';
        this.publicarOferta(curso);
    }
}

const Adalid = {
    nuevoAnuncio: function(){
        const oferta =  'descuento en el curso JS ';
        this.publicarOferta(oferta);
    }
}

//crear los publicadores 

observer.crear(Awakelab);
observer.crear(Adalid);

//
 
const diego = {
    compartir : function(oferta){
        console.log("Gran curso" + oferta);
    }
}

const emilio = {
    interesado : function(oferta) {
        console.log('interesado en el curso' + oferta);
    }
}

Awakelab.obtenerOfertas(diego.compartir);
Awakelab.obtenerOfertas(emilio.interesado);
Awakelab.nuevoCurso();

Adalid.obtenerOfertas(diego.compartir);
Adalid.obtenerOfertas(emilio.interesado);
Adalid.nuevoAnuncio();