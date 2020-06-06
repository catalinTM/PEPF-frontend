import axios from 'axios'

class CourseDataService {

    async retrieveAllCourses() {
        return await axios.get(`http://localhost:8080/courses`);
    }
}

export default new CourseDataService()