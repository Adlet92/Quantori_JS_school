import axios from 'axios'

export default class PostService {
    static async getAll(){
        try{
            const response = await axios.get('db.json')
            return response.data
        } catch(e){
            console.log(e)
        }
    }
    static async create(post) {
        try {
          const response = await axios.post('http://localhost:3006/tasks', post);
          return response.data;
        } catch (e) {
          console.log(e)
        }
    }

    static async delete(id) {
        try{
            const response = await axios.delete(`http://localhost:3006/tasks/${id}`);
            return response.data;
        } catch(e){
            console.log(e)
        }
      }
     
    static async update(id, post) {
        try {
          const response = await axios.put(`http://localhost:3006/tasks/${id}`, post);
          return response.data;
        } catch (e) {
          console.log(e)
        }
    }   
}