class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;// ES IMPORTANTE PONER EL _ PARA QUE LOS ATRIBUTOS ESTEN PROTEGIDOS
        this._apellido = apellido;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        return this._apellido = apellido;
    }
    
}
// ACA CREAMOS LA CLASE PERSONA PARA DESPUES INSTANCIAR OBJETOS
//Y GUARDARLOS EN UN ARRAY.