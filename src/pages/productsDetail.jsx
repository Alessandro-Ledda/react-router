// import axios per la chiamata ajax per recuperare le info dei prodotti
import axios from "axios";

// import variabile di stato
import { useState, useEffect } from "react";

// import hooks per gestione chiamata e recupero parametro dinamico
import { useParams, useNavigate } from "react-router-dom";

// enpoint di riferimento
const endPointBase = "https://fakestoreapi.com/products/:id"

// import detail card di ref
import ProductDetailCard from "../components/ProductDetailCard";

function ProductsDetail() {

    // inizializzazione variabile di stato
    const [detail, setDetail] = useState()

    // inizializzo var per recupero parametro dinamico
    const { id } = useParams();

    // setto variabile per la chiamata 
    function fetchDetails() {

        axios.get(endPointBase + id)

            .then((response) => {
                setDetail(response.data)
            })
            .catch(console.error("request not found"))
            .finally()
    }

    // determinare  momento di evocazione della funzione chiamata
    useEffect(() => {
        fetchDetails()
    }, [])

    return (
        <section className="container-product-detail">
            <div className="wrap-detail">
                <h2>Dettagli prodotto</h2>
                {detail ? (
                    <ProductDetailCard infoProd={product} />
                ) : (
                    <p className="loader">Please Wait....</p>
                )
                }

            </div>
        </section>
    )
}

export default ProductsDetail