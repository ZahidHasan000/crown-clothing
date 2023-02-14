import React from "react";

//Collection routing and selector
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component";

//Collection routing and selector
import { selectCollection } from "../../redux/shop/shop.selectors";

import './collection.styles.scss'

//data normalization + collection page
const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {
                    items.map(item => (<CollectionItem key={item.id} item={item} />))
                }
            </div>
        </div>
    )
};

//Collection routing and selector
// const CollectionPage = ({collection}) => {
//     console.log(collection);
//     return (
//         <div className="collection-page">
//             <h2>Collection Page</h2>
//         </div>
//     )
// };


// const CollectionPage = ({match}) => {
//     console.log(match.params.collectionId);
//     return (
//         <div className="collection-page">
//             <h2>Collection Page</h2>
//         </div>
//     )
// };

//Collection routing and selector
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

//Collection routing and selector
export default connect(mapStateToProps)(CollectionPage);

// export default CollectionPage;