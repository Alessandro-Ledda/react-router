// import Link 
import { Link } from "react-router-dom";

function CardProduct(props) {

    // destrutturazione oggetto
    const { title, image, price, category, description, id } = props

    return (
        <div className="card">
            <h3 className="title">{title}</h3>
            <img src={image} alt="" />
            <h4 className="price">{price}</h4>
            <h4 className="category">{category}</h4>
            <p className="description">{description}</p>

            <Link to={`/prodotti/${id}`}>
                Dettagli prodotto
            </Link>
        </div>
    )
}

export default CardProduct