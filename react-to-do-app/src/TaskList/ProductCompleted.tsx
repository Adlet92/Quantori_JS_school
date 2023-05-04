import { IProduct } from '../Models/models';
import ShapeImage from './img/Shape.svg'; 

interface ProductProps {
    product: IProduct
}


export function ProductCompleted(props: ProductProps){
    return (
        <li><input type="checkbox" checked disabled={true}/>
            <label className="compl">{props.product.title}</label>
        </li>
    )
}