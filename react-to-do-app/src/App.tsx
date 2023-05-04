import './App.css';
import './SearchBar/searchBar.css';
import {ProductInCompleted} from './TaskList/ProductInCompleted';
import { ProductCompleted } from './TaskList/ProductCompleted';
import { useProducts } from './Hooks/products';
import { Loader } from './components/Loader';
import { ErrorMessage } from './components/Error';
import { Modal } from './components/Modal/modal';
import { AddTask } from './components/AddTask/AddTask';
import {useState} from 'react';
// import {products} from './database/products'


function App() {
const {loading, error, products} = useProducts() 
// const {modal, setModal} = useState(true) 

  return (
    <div className="container">
      {loading && <Loader/>}
      {error && <ErrorMessage error='error'/>}
    <div className="todo-app">
      <div className="header-elements">
        <h2>To Do List</h2>
        <img src="" id="weather-icon" className="weather-icon"/>
        <h4 id="temp" className="temp"></h4>
        <h4 id="city-name" className="city-name"></h4>
      </div>
      <div className="search-wrapper">
        <input type="search" id="find" placeholder="Search task"/> 
        <button id="myBtn">+New Task</button>
      </div>
      <h3>All Tasks</h3>
      <ol className="notCompleted" id="ntc">
      {products
        .filter(product => !product.completed)
        .map(product => <ProductInCompleted product={product} key={product.id}/>)}

        {/* { products.map(product => <Product product={product} key={product.id}/>)} */}
        {/* {data && data.length > 0 && data.map(val) => {
          <Product product={val} key={val.id}/>)
        }} */}
      </ol>
      <h3>Completed Tasks</h3>
      <ol className="Completed" id="cmplt">
      {products
        .filter(product => product.completed)
        .map(product => <ProductCompleted product={product} key={product.id}/>)}
      </ol>
    </div>
    <Modal>
      <AddTask/>
    </Modal>
  </div>
  );
}

export default App;
