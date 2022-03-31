/* THIS IS A GENERATED FILE */
import gql from 'graphql-tag';

declare module '*/Article.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const getArticles: DocumentNode;
  export const ArticleFragment: DocumentNode;

  export default defaultDocument;
}

declare module '*/Store.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const getStores: DocumentNode;
  export const getStore: DocumentNode;
  export const createStore: DocumentNode;
  export const updateStore: DocumentNode;
  export const deleteStore: DocumentNode;
  export const storeFragment: DocumentNode;

  export default defaultDocument;
}

export const ArticleFragment = gql`
  fragment ArticleFragment on Article {
    id
    name
    quantity
    price
    stores {
      id
      name
    }
  }
`;
export const StoreFragment = gql`
  fragment storeFragment on Store {
    id
    name
    location
  }
`;
export const GetArticles = gql`
  query getArticles {
    articles {
      ...ArticleFragment
    }
  }
  ${ArticleFragment}
`;
export const GetStores = gql`
  query getStores {
    stores {
      ...storeFragment
    }
  }
  ${StoreFragment}
`;
export const GetStore = gql`
  query getStore($id: ID!) {
    store(where: { id: $id }) {
      ...storeFragment
    }
  }
  ${StoreFragment}
`;
export const CreateStore = gql`
  mutation createStore($name: String!, $location: String!) {
    createStore(data: { name: $name, location: $location }) {
      id
      name
      location
    }
  }
`;
export const UpdateStore = gql`
  mutation updateStore($id: ID!, $name: String!, $location: String!) {
    updateStore(where: { id: $id }, data: { name: $name, location: $location }) {
      id
      name
      location
    }
  }
`;
export const DeleteStore = gql`
  mutation deleteStore($id: ID!) {
    deleteStore(where: { id: $id }) {
      id
      name
    }
  }
`;
