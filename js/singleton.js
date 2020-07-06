const alumno = {

    //todos los alumnos 
    listadoAlumnos : [],

    //obtener alumnos
    get: function(id){
        console.log(id);
        return this.listadoAlumnos[id];
    },

    //crear alumnos 
    crear: function(datos){
        console.log(datos);
        //agregar al arreglo
        this.listadoAlumnos.push(datos);
    },
    //listar todos los alumnos 

    listado:function() {
        return this.listadoAlumnos;
    }

}

const infoAlumno = {
    nombre: 'Diego',
    edad: 26
}

const infoAlumno1 = {
    nombre: 'Emilio',
    edad: 26
}

alumno.crear(infoAlumno);
alumno.crear(infoAlumno1);

const listado = alumno.listado();

console.log(listado);