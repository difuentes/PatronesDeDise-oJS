class Formulario  {

    constructor(){
        this.campos = []
    }
    //builder por tipos
    agregarCampo(tipo,texto) {
        let campos = this.campos;
        let campo;


        switch(tipo){  

               case "text":
                    campo = new InputText(texto);
                   break;
               case "email" :
                    campo = new InputEmail(texto);
                    break;
               case "button" :
                    campo = new Button(texto);
                    break;
                default:
                    throw new Error("tipo no valido" + tipo);
                      
        }
        //agregar al arreglo campos 
        campos.push(campo);

    }


        //obtener datos del formulario
        obtenerFormulario() {

            let form = document.createElement('form'),
            campos = this.campos.length,
            campo;

            for (let i = 0; i < campos; i++) {
               campo = this.campos[i];
               form.appendChild(campo.crearElemento());
               let br = document.createElement('br');
               form.appendChild(br);
            }

            return form;
        }

}

class Inputs{
     constructor(texto){
         this.texto = texto ;
     }
}

//clase extendida de inputs
class InputText extends Inputs{
    constructor(texto){
        super(texto);
    }
    crearElemento(){
        const iputText = document.createElement('input');
        iputText.setAttribute('type','text');
        iputText.setAttribute('placeholder',this.texto);
        return iputText;
    
    }
}
//intancia de builder input Email 
class InputEmail extends Inputs{
    constructor(texto){
        super(texto);
    }
    crearElemento(){
        const inputEmail = document.createElement('input');
        inputEmail.setAttribute('type','email');
        inputEmail.setAttribute('placeholder',this.texto);
        return inputEmail;
    
    }
}
//intancia de builder input Email 
class Button extends Inputs{
    constructor(texto){
        super(texto);
    }
    crearElemento(){
        const button = document.createElement('button');
        button.setAttribute('type','submit');
        button.textContent = this.texto ;
        return button;
    
    }
}

//instancia Formulario 

const fomulario = new Formulario();
fomulario.agregarCampo('text', 'añade un nombre');
fomulario.agregarCampo('email', 'soy un mail');
fomulario.agregarCampo('button', 'enviar');

//error
//fomulario.agregarCampo('img', 'enviar');

console.log(fomulario);


//renderizar al HTMl

document.addEventListener('DOMContentLoaded' ,() =>{
    document.getElementById('app').appendChild(fomulario.obtenerFormulario());
})