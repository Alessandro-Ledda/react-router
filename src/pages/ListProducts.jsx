// importo axios per la chiamata ajax
import axios from "axios"
// import var di stato per controllo sui prodotti
import { useEffect, useState } from "react"

// import del componente del singolo prodotto
import CardProduct from "../components/CardProduct";

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
                <h2>Lista Prodotti</h2>
                <div className="products-content">
                    {products.map((product) => (
                        <CardProduct
                            key={product.id}
                            title={product.title}
                            image={product.image}
                            price={product.price}
                            category={product.category}
                            description={product.description}
                        />
                    ))}

                </div>
            </div>
        </section>
    )
}

export default ListProducts