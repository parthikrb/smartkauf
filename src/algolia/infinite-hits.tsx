import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { connectInfiniteHits } from 'react-instantsearch-native';
import Highlight from './highlight-text';
import { Article } from '../generated/graphql';

const styles = StyleSheet.create({
  separator: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  item: {
    padding: 10,
    flexDirection: 'column',
  },
  titleText: {
    fontWeight: 'bold',
  },
});

type InfiniteHitsProperties = {
  hits: Article[];
  hasMore: boolean;
  refineNext: () => void;
};

const InfiniteHits = ({ hits, hasMore, refineNext }: InfiniteHitsProperties) => (
  <FlatList
    data={hits}
    keyExtractor={(item) => item.id}
    ItemSeparatorComponent={() => <View style={styles.separator} />}
    onEndReached={() => hasMore && refineNext()}
    renderItem={({ item }) => (
      <View style={styles.item}>
        <Highlight attribute="name" hit={item} />
      </View>
    )}
  />
);

export default connectInfiniteHits(InfiniteHits);
