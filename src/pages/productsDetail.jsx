// import axios per la chiamata ajax per recuperare le info dei prodotti
import axios from "axios";

// import variabile di stato
import { useState, useEffect } from "react";

// import hooks per gestione chiamata e recupero parametro dinamico
import { useParams, useNavigate } from "react-router-dom";

// enpoint di riferimento
const endPoint = "https://fakestoreapi.com/products/"

// import detail card di ref
import ProductDetailCard from "../components/ProductDetailCard";

function ProductsDetail() {

    // inizializzo var per recupero parametro dinamico
    const { id } = useParams();

    // inizializzazione variabile di stato
    const [detail, setDetail] = useState()

    // setto variabile per la chiamata 
    function fetchDetails() {

        axios.get(endPoint + id)

            .then((response) => {
                setDetail(response.data)
            })
            .catch(err => {
                console.error("request not found", err)
            })

            .finally()
    }

    // determinare  momento di evocazione della funzione chiamata
    useEffect(() => {
        fetchDetails()
    }, [id])


    return (
        <>
            <section className="container-product-detail">
                <div className="wrap-detail">
                    <h2>Dettagli prodotto</h2>
                    {detail ? (
                        <ProductDetailCard infoProd={detail} />
                    ) : (
                        <p className="loader">Please Wait....</p>
                    )
                    }

                </div>
            </section>
        </>
    )
}

export default ProductsDetail