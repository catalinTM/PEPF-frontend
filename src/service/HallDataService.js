import axios from 'axios'

class HallDataService {

    async retrieveAllHalls() {
        return await axios.get(`http://localhost:8080/halls`);
    }
}

export default new HallDataService()