import axios from "axios";


class ApiClient {
    baseUrl = ""

    constructor(baseUrl:string) {
        this.baseUrl = baseUrl+"/api/v1";
    }

    getHabitById(id: string){
        axios.get(`${this.baseUrl}/habit/${id}`);
    }

    putHabit(){
        axios.put(`${this.baseUrl}/habit`);
    }

    saveHabit(){
        axios.post(`${this.baseUrl}/habit`);
    }

    deleteHabit(){
        axios.post(`${this.baseUrl}/habit`);
    }
}

export default new ApiClient("http://localhost:8080");