// importo axios per la chiamata ajax
import axios from "axios"
// import var di stato per controllo sui prodotti
import { useEffect, useState } from "react"

// creazione variabile per api di ref
const endPoint = "https://fakestoreapi.com/products"


function ListProducts() {

    // inizializzo la var di stato per i prodotti
    const [products, setProducts] = useState([]);

    // chiamata ajax
    function fetchProducts() {
        axios.get(endPoint)
            .then((response) => {
                console.log(response)
                setProducts(response.data)
            })
            .catch(errore => ("request not found"))
            .finally()

    }


    useEffect(() => {
        fetchProducts()
    }, []);

    return (
        <section className="container">
            <div className="wrap-products">
                <h1>Lista Prodotti</h1>
                <div className="products-content">
                    {/* creazione card  */}
                </div>
            </div>
        </section>
    )
}

export default ListProducts