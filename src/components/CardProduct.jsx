function CardProduct(props) {

    // destrutturazione oggetto
    const { title, image, price, category, description } = props

    return (
        <div className="card">
            <h1 className="title">{title}</h1>
            <img src={image} alt="" />
            <h3 className="price">{price}</h3>
            <h3 className="category">{category}</h3>
            <p className="description">{description}</p>
        </div>
    )
}

export default CardProduct