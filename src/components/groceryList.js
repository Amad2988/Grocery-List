import GroceryItem from '../components/groceryItem';

const GroceryList = (props) => {
    return(
        <div style={style.divStyle}>
            <h1>Grocery Shopping List</h1>

            {props.grocery.map((grocery, idx) => <GroceryItem grocery={grocery} key={idx}/>)}

        </div>
    )
};

const style = {
    divStyle:{
        fontFamily: 'Lucida Sans',
        fontWeight: 'light'
    }
    
};

export default GroceryList;