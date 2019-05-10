import { updateCurrentImage, addCategory, updateCategory } from '../actions'
import { connect } from 'react-redux'
import CatLoader from './CatLoader'

const mapStateToProps = state => {
  return {
    catImage: state.currentImage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onfetch: image => dispatch(updateCurrentImage(image)),
    saveCategory: name => dispatch(addCategory(name)),
    updateCategory: (name, index) => dispatch(updateCategory(name, index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CatLoader)