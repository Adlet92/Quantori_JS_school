import React, {useState, useEffect} from 'react';
import axios, {AxiosError} from 'axios';
import { IProduct, ITasks } from '../Models/models';
  
export function useProducts(){
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('')

  // const getData=()=>{
  //   fetch('db.json'
  //   ,{
  //     headers : { 
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //      }
  //   }
  //   )
  //     .then(function(response){
  //       console.log(response)
  //       return response.json();
  //     })
  //     .then(function(myjson) {
  //       setData(myjson);
  //     });
  // }

  async function fetchProducts() {
    try{
      setError('')
      setLoading(true)
      const response = await axios.get<ITasks>('db.json') 
      setProducts(response.data.tasks)
      setLoading(false) 
    }catch(e: unknown){
      const error = e as AxiosError
      setLoading(false)
      setError(error.message)
      
    }
    
  }

  useEffect(() => {
    fetchProducts()
    // getData()
  }, [])

  return {products, error, loading} 
}
