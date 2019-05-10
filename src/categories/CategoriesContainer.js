import { connect } from 'react-redux'
import Categories from './Categories'
import { displayCategory } from '../actions'

const mapStateToProps = state => {
  return {
    categories: state.categories
  }
}
  
const mapDispatchToProps = dispatch => {
  return {
    displayCategory: name => dispatch(displayCategory(name))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Categories)
