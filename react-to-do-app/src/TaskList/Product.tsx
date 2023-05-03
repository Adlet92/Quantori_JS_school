import { IProduct } from '../Models/models';
import ShapeImage from './img/Shape.svg'; 

interface ProductProps {
    product: IProduct
}


export function Product(props: ProductProps){
    // const todoToRender = props.product.filter((todo) => todo.completed === true);
    return (
        <li><input id="check"  type="checkbox"/>
        <label id="label-title">{ props.product.title}</label>
        <button className="deleteIcon"><img src = {ShapeImage}/></button>
        </li>
    )
}