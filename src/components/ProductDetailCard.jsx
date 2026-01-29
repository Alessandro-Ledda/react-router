import { Link } from "react-router-dom";

function ProductDetailCard(props) {


    // def props
    const { infoProd } = props

    return (
        <div className="wrap-details-card">
            <h2 className="title">{infoProd.title}</h2>
            <img src={infoProd.image} alt={infoProd.title} className="image" />
            <h4 className="price">{infoProd.price}</h4>
            <h3 className="category">{infoProd.category}</h3>
            <h4 className="description">{infoProd.description}</h4>
            <h4 className="rating-rate">{infoProd.rating.rate}</h4>
            <h4 className="reting-count">{infoProd.rating.count}</h4>
            <Link to="/prodotti">
                Torna alla lista prodotti
            </Link>
        </div>
    )
}

export default ProductDetailCard