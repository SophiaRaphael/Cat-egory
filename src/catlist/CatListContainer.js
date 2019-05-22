import { connect } from 'react-redux'
import CatList from './CatList'

const mapStateToProps = state => {
  return {
    categories: state.categories,
    displayedCategory: state.displayedCategory,
    redisplay: state.redisplay
  }
}
  
export default connect(mapStateToProps)(CatList)
