import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import Category from "./category.component";
import WithSpinerHOC from "../../components/with-spinner/with-spinner.component";

const GET_COLLECTIONS_BY_TITLE = gql`
  query GetCollectionsByTitle($title: String!) {
    getCollectionsByTitle(title: $title) {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

const CategoryWithSpiner = WithSpinerHOC(Category);

const CategoryContainer = ({ match }) => {
  return (
    <Query
      query={GET_COLLECTIONS_BY_TITLE}
      variables={{ title: match.params.categoryId }}
    >
      {({ loading, data }) => {
        return (
          <CategoryWithSpiner
            isLoading={loading}
            collection={data ? data.getCollectionsByTitle : null}
          />
        );
      }}
    </Query>
  );
};

export default CategoryContainer;
