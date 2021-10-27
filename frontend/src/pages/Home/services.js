import api from "../../services";

class HomeServices{
    static listar(){
        return api.get("/users");
    }

    static deletar(id){
        return api.delete(`/users/${id}`);
    }
}

export default HomeServices;