import React from 'react'
import './CatList.sass'

class CatList extends React.Component {
  constructor(props) {
    super(props);

    this.getClickedCategory = this.getClickedCategory.bind(this);
  }
  
  getClickedCategory = () => {
    let categories = this.props.categories
    let categoryToBeDisplayed = {}
    categories.map(category => {
      if(category.name === this.props.displayedCategory)
        categoryToBeDisplayed = category
    })
    return categoryToBeDisplayed
  }

  render() {
    let categoryToBeDisplayed = this.getClickedCategory()   
    
    if(Object.entries(categoryToBeDisplayed).length === 0 && categoryToBeDisplayed.constructor === Object)
      return null
    return (
      <ul className='categoryImages'>
        {categoryToBeDisplayed.images.map(image => <li><img src={image}/></li>)}
      </ul>
    );
  }
}

export default CatList
