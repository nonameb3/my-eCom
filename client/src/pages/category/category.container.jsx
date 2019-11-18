import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import Category from "./category.component";
import WithSpinerHOC from "../../components/with-spinner/with-spinner.component";

import { selectIsCollecttionLoaded } from "../../redux/shop/shop.selection";

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollecttionLoaded(state)
});

export default compose(connect(mapStateToProps), WithSpinerHOC)(Category);
