import React from "react";

// nested routing in shop page
import { Route } from "react-router-dom";

// import SHOP_DATA from "./shop.data";

//colection state into redux
// import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";

// import CollectionPreview from "../../components/preview-collections/collection-preview.compotent";

//colection state into redux
// import { selectCollection } from "../../redux/shop/shop.selectors";

//Collection overview component
import CollectionsOverview from "../../components/collection-overview/collections-overview.component";

// nested routing in shop page
import CollectionPage from "../collection/collection.component";

import './shop-page.styles.scss'

// nested routing in shop page
const ShopPage = ({ match }) => (
    <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
);

//Collection overview component
// const ShopPage = () => (
//     <div className="shop-page">
//         <CollectionsOverview />
//     </div>
// );

//Collection overview component
export default ShopPage;


//colection state into redux
// const ShopPage = ({ collections }) => {
//     <div className="shop-page">
//         {
//             collections.map(({ id, ...otherCollectionProps }) => (
//                 <CollectionPreview key={id} {...otherCollectionProps} />
//             ))
//         }
//     </div>
// };


//colection state into redux
// const mapStateToProps = createStructuredSelector({
//     collections: selectCollection
// });


//colection state into redux
// export default connect(mapStateToProps)(ShopPage);


// class ShopPage extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             collections: SHOP_DATA
//         }
//     }

//     render() {
//         const { collections } = this.state;
//         return (
//             <div className="shop-page">
//                 {
//                     collections.map(({ id, ...otherCollectionProps }) => (
//                         <CollectionPreview key={id} {...otherCollectionProps} />
//                     ))
//                 }
//             </div>
//         );

//     }
// };

// export default ShopPage;