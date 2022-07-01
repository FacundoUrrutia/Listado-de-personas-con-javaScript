//CREAMOS UN ARRAY DE CONST, PARA QUE NO SE PUEDAN MODIFICAR 
const personas = [
    new Persona('Juan', 'Perez'),// CREAMOS UN OBJETO Y LE PASAMOS LOS VALORES POR PARAMETROS
    new Persona('Karla', 'Lara')
];

function mostrarPersonas(){
    console.log('Mostrar personas...');
    let texto = '';// ESTA VARIABLE ES PARA CONCATENAR LOS OBJETOS DE TIPO PERSONA QUE TENGAMOS EN EL ARRAY
    for(let persona of personas){
        console.log(persona);//MOSTRAMOS LOS OBJETOS HASTA AHORA CARGADOS
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`;//USANDO TEMPLATE STRING, QUE SON `` , CARGAMOS
                                                                  //EL OBJETO EN UN ITEM LIST, Y YA LO CARGAMOS EN HTML.
    }
    document.getElementById('personas').innerHTML = texto;
    //ACCEDEMOS AL DOM, RECUPERAMOS EL ELEMENTO MEDIANTE ID, EN ESTE CASO PERSONAS
    //ABRIMOS SU CONTENIDO CON INNERHTML Y LE ADJUNTAMOS EL OBJETO.
}

function agregarPersona(){
    const forma = document.forms['forma'];//recuperamos el formulario mediante su id
    const nombre = forma['nombre']; //recuperamos los valores mediante id 
    const apellido = forma['apellido'];
    if(nombre.value != '' && apellido.value != ''){//comprobamos que no se esten cargando valores vacios
        const persona = new Persona(nombre.value, apellido.value);//creamos un objeto y le pasamos por parametro los valores recuperados del form
        console.log(persona);
        personas.push(persona);//lo agregamos al array de personas
        mostrarPersonas();//llamamos a la funcion mostrar personas 
    }
    else{
        console.log('No hay información que agregar');
        //si llegamos a intenar agregar valores vacios 
    }
}