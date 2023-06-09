import axios from 'axios'
import {PostItemProps} from '../components/Interfaces/interfaces'

export default class PostService {
    static async getAll(){
        try{
            const response = await axios.get('db.json')
            return response.data
        } catch(e){
            console.log(e)
        }
    }
    static async create(post: PostItemProps) {
        try {
          const response = await axios.post('http://localhost:3006/tasks', post);
          return response.data;
        } catch (e) {
          console.log(e)
        }
    }

    static async delete(id: number) {
        try{
            const response = await axios.delete(`http://localhost:3006/tasks/${id}`);
            return response.data;
        } catch(e){
            console.log(e)
        }
      }
     
    static async update(id: number, post: PostItemProps) {
        try {
          const response = await axios.put(`http://localhost:3006/tasks/${id}`, post);
          return response.data;
        } catch (e) {
          console.log(e)
        }
    }   
}