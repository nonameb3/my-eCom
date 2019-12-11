import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import CollectionOverview from "./collection-overview.component";
import WithSpinerHOC from "../with-spinner/with-spinner.component";

const GET_COLLECTIONS = gql`
  {
    collections {
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

const WithSpiner = WithSpinerHOC(CollectionOverview);

const CollectionOverviewContainer = () => {
  return (
    <Query query={GET_COLLECTIONS}>
      {({ loading, error, data }) => {
        return (
          <WithSpiner
            isLoading={loading}
            collections={data ? data.collections : null}
          />
        );
      }}
    </Query>
  );
};

export default CollectionOverviewContainer;
