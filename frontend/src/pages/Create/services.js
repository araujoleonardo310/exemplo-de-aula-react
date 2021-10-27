import api from "../../services";

class CreateServices {
    static criar(data){
        return api.post("/users", data);
    }
}

export default CreateServices;