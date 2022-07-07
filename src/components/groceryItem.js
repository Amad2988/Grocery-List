const groceryItem = (props) => {
    const {item, brand, units, quantity} = props.grocery
    return(
        <div>
            <h3>{item}</h3>
            <h3>{brand}</h3>
            <h3>{units}</h3>
            <h3>{quantity}</h3>
        </div>

    )
}

export default groceryItem;