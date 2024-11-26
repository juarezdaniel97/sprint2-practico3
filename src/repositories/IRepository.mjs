
class IRepository{
    getFindById(id){
        throw new Error("Método 'getFindById()' no implementado");
    }

    getAll(){
        throw new Error("Método 'getAll()' no implementado");
    }

    getFindByAttribute(atributo, valor){
        throw new Error("Método 'buscarPorAtributo()' no implementado");
    }

    getMayoresA30(){
        throw new Error("Método 'getMayoresA30' no implementado");
    }

    create(){
        throw new Error("Método 'create()' no implementado");
    }

    deleteById(){
        throw new Error("Método 'delete()' no implementado");
    }
    
    deleteByName(){
        throw new Error("Método 'delete()' no implementado");
    }

    update(id, data){
        throw new Error("Método 'update()' no implementado");
    }

}

export default IRepository;