import React from 'react'
import './Categories.sass'

class Categories extends React.Component {
  constructor(props) {
    super(props)
  }  
  
  render() {
    const categories = this.props.categories
    if(categories){
      return(
          <ul className='catList'>
            {categories.map(category => (<li onClick={() => this.props.displayCategory(category.name)}>{category.name}</li>))}
          </ul>
      );}
    else
      return null
  }
} 

export default Categories;