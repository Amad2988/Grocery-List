
import './App.css';
import grocery from './data/groceryData';
import { Component } from 'react';
import Navbar from './components/Navbar';
import GroceryItem from './components/groceryList'

class App extends Component {
  state = {
    grocery: grocery,
    item: '',
    brand: '',
    units: Number,
    quantity: Number,
    isPurchased: Boolean
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()


    const addGrocery = {
      item: this.state.item,
      brand: this.state.brand,
      units: this.state.units,
      quantity: this.state.quantity,

    }

    console.log(addGrocery)
    this.setState({
      grocery: [addGrocery, ...this.state.grocery],
      item: '',
      brand: '',
      units: Number,
      quantity: Number,

    })
  }

  render() {
    return (
      <>
        <Navbar />
        <div className='container'>
          <div className='container2'>
            <form onSubmit={this.handleSubmit}>

              <label htmlFor='item'>Item </label>
              <input type='text' value={this.state.item} onChange={this.handleChange} id='item' />

              <label htmlFor='brand'>Brand </label>
              <input type='text' value={this.state.brand} onChange={this.handleChange} id='brand' />

              <label htmlFor='units'>Units </label>
              <input type='Number' value={this.state.units} onChange={this.handleChange} id='units' />

              <label htmlFor='quantity'>Quantity </label>
              <input type='Number' value={this.state.quantity} onChange={this.handleChange} id='quantity' />

              <input type='checkbox' /><span>Purchased</span> <br></br>  <br></br>             

              <input type='submit' />

            </form>
            <GroceryItem grocery={this.state.grocery} />
          </div>
        </div>
        
      </>
    )

  }

};

export default App;
