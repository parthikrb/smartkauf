/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import GlobalStyles from '../global-styles';
import { InstantSearch, connectRefinementList } from 'react-instantsearch-native';
import SearchBox from '../algolia/search-box';
import InfiniteHits from '../algolia/infinite-hits';
import { useGetArticlesQuery } from '../generated/graphql';
import algoliasearch, { SearchIndex } from 'algoliasearch';

// eslint-disable-next-line unicorn/no-null
const VirtualRefinementList = connectRefinementList(() => null);

const SearchScreen = () => {
  // API keys below contain actual values tied to your Algolia account
  const client = algoliasearch(
    process.env.ALGOLIA_APP_ID as string,
    process.env.ALGOLIA_KEY as string,
  );
  const index: SearchIndex = client.initIndex('articles');

  const [searchState, setSearchState] = useState({});

  const { data } = useGetArticlesQuery();

  useEffect(() => {
    data &&
      // eslint-disable-next-line unicorn/no-array-for-each
      data.articles.forEach((article) => {
        const algoliaArticle = {
          ...article,
          objectID: article.id,
        };
        index.saveObject(algoliaArticle).catch((error) => console.error(error));
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const onSearchStateChange = (searchState: any) => {
    setSearchState(searchState);
  };

  return (
    <View style={GlobalStyles.screenContainer}>
      <Text>SearchScreen</Text>
      <InstantSearch
        searchClient={client}
        indexName="articles"
        searchState={searchState}
        onSearchStateChange={onSearchStateChange}
      >
        <VirtualRefinementList attribute="article" />
        <SearchBox />
        <InfiniteHits />
      </InstantSearch>
    </View>
  );
};

export default SearchScreen;
