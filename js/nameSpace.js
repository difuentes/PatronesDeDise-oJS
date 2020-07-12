const myApp = {};
myApp.platillos =[
    {
        platillo: 'papitas fritas',
        precio: 1000,
    },
    {
        platillo: 'chorillana',
        precio: 1000,
    },
    {
        platillo: 'empanadas',
        precio: 1000,
    }
]

//funciones 

myApp.funciones = {
    ordenar: id => {
        console.log(`tu plato es :${myApp.platillos[id].platillo} se esta preparando`);
    },
    agregarPlatillo: (platillo,precio) => {
        const nuevo ={
            platillo,
            precio
        }
        myApp.platillos.push(nuevo);   
    },
    mostraMenu: platillos =>{
        console.log(`bienvenido a nuestro menu : `);
        platillos.forEach((platillo,index) => {
            console.log(`${index} : ${platillo.platillo} su precio es de ${platillo.precio}`);
        });
    }

}

console.log(myApp);
myApp.funciones.ordenar(0);

const {platillos} = myApp;
myApp.funciones.mostraMenu( platillos);