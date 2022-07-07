const Navbar = () => {
    return(
        <nav style={styles.navStyle}>
            <h1> Grocery List </h1>
        </nav>
    );
};

const styles = {
    navStyle: {
        display: 'flex',
        justifyContent: 'space-around',
        marginLeft: '500px',
        marginBottom: '30px',
        marginTop:'20px',
        border: 'solid white 1px',
        borderRadius: '12px',
        color:'white',
        width: '800px',
        fontFamily: 'Arial',
        
    }
}

export default Navbar