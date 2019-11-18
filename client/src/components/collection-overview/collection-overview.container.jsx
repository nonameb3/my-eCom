import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import CollectionOverview from "./collection-overview.component";
import WithSpinerHOC from "../with-spinner/with-spinner.component";

import { selectIsFetching } from "../../redux/shop/shop.selection";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsFetching
});

export default compose(
  connect(mapStateToProps),
  WithSpinerHOC
)(CollectionOverview);
