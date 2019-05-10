import React from 'react';
import {fetchRandomCat} from '../catApi';
import './CatLoader.sass';
import Loader from '../images/loader.svg'

class CatLoader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      categoryInput: '',
      categories: []
    }

    this.getRandomImage = this.getRandomImage.bind(this);
    this.getInputValue = this.getInputValue.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  getRandomImage = () => {
    this.setState({loading: true})
    let randomCat = fetchRandomCat();
    randomCat.then((response) => {
      this.props.onfetch(response[0].url);
      this.setState({loading: false});
    })
    .catch((error) => console.log('Error to load image : '+error))
  }

  getInputValue = (event) => {
    this.setState({
      categoryInput: event.target.value.toLowerCase()
    })
  }

  handleSave = () => {
    let category = this.state.categoryInput
    this.getRandomImage()
    this.setState({
      categoryInput: ''
    })
    
    let existingCategories = this.state.categories;
    let index = existingCategories.indexOf(category)
    if (index > -1)
      this.props.updateCategory(category, index)
    else
      this.props.saveCategory(category)
      this.setState({
        categories: this.state.categories.concat(category)
      })
  }

  render() {
    const {categoryInput, loading} = this.state
    return (
      <div>
        <div className='catImage'>
          { loading? <img src= {Loader} alt='Random Cat' className='loader'/>:
            <img src= {this.props.catImage} alt='Random Cat'/> }
        </div>
        <button onClick={this.getRandomImage} className='nextButton'>Next</button>
        <div className='categoryInputWrapper'>
          <input type= 'text' className= 'categoryName' placeholder = 'Enter a category' onChange= {this.getInputValue} value={categoryInput}/>
          <button onClick={this.handleSave}>Save</button>
        </div>
      </div>
    );
  }
}


export default CatLoader;