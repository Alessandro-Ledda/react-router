import { Link } from "react-router-dom";

function ProductDetailCard(props) {


    // def props
    const { infoProd } = props

    return (

        <div className="wrap-details-card">

            <h2 className="d-title">{infoProd.title}</h2>
            <div className="det-content">
                <div className="d-image">
                    <img src={infoProd.image} alt={infoProd.title} />
                </div>

                <div className="others-det">
                    <div className="item">
                        <h4 className="d-price">{infoProd.price}</h4>
                        <h3 className="d-category">{infoProd.category}</h3>
                        <h4 className="d-description">{infoProd.description}</h4>
                        <h4 className="d-rating-rate">{infoProd.rating.rate}</h4>
                        <h4 className="d-reting-count">{infoProd.rating.count}</h4>
                        <Link to="/prodotti">
                            Torna alla lista prodotti
                        </Link>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default ProductDetailCard