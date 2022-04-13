/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useEffect, useState } from 'react';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { BottomSheet } from 'react-native-btr';
import colors from '../config/colors';
import {
  Article,
  ArticleFragmentFragmentDoc,
  useUpsertArticleMutation,
} from '../generated/graphql';

export type AddArticleProps = {
  visible: boolean;
  toggle: () => void;
  store: string;
};

type ArticleProps = {
  name: string;
  price: number;
  quantity: number;
  unit: string;
};

const units = ['g', 'kg', 'piece'];

const BASE_UNIT_INDEX = 0;
const INITIAL_PRICE_AND_QUANTITY = 0;

const AddArticle = ({ visible, toggle, store }: AddArticleProps) => {
  const initialArticle = {
    name: '',
    price: INITIAL_PRICE_AND_QUANTITY,
    quantity: INITIAL_PRICE_AND_QUANTITY,
    unit: units[BASE_UNIT_INDEX],
  };

  const [article, setArticle] = useState<ArticleProps>(initialArticle);
  const [selectedIndex, setSelectedIndex] = useState(BASE_UNIT_INDEX);
  const [isInvalidArticle, setIsInvalidArticle] = useState(true);

  const [upsertArticle] = useUpsertArticleMutation({
    variables: {
      name: `${article.name} - ${article.quantity} ${article.unit}`,
      price: parseFloat(String(article.price)),
      quantity: parseFloat(String(article.quantity)),
      store,
      unit: article.unit as 'g' | 'kg' | 'piece',
    },
    update: (cache, { data }) => {
      cache.modify({
        fields: {
          articles(existingArticles: Article[] = []) {
            const newArticle = cache.writeFragment({
              data: data?.upsertArticle,
              fragment: ArticleFragmentFragmentDoc,
            });
            return [...existingArticles, newArticle] as Article[];
          },
        },
      });
    },
  });

  const handleArticleChange = (name: string, value: string) => {
    const trimmedValue = value.trim();
    const capitalizedValue = trimmedValue.charAt(0).toUpperCase() + trimmedValue.slice(1);
    setArticle({
      ...article,
      [name]: name === 'name' ? capitalizedValue : trimmedValue,
    });
  };

  const handleAddArticle = async () => {
    if (isInvalidArticle) return;
    await upsertArticle();
    toggle();
    setArticle(initialArticle);
  };

  useEffect(() => {
    setIsInvalidArticle(
      !(
        article.name.length &&
        article.quantity > INITIAL_PRICE_AND_QUANTITY &&
        article.price > INITIAL_PRICE_AND_QUANTITY
      ),
    );
  }, [article]);

  return (
    <BottomSheet visible={visible} onBackButtonPress={toggle} onBackdropPress={toggle}>
      <View style={styles.container}>
        <Text style={styles.title}>Add Article</Text>
        <TextInput
          testID="name"
          style={styles.input}
          placeholder="Article Name"
          value={article.name}
          onChangeText={(value: string) => handleArticleChange('name', value)}
        />
        <View style={styles.quantityContainer}>
          <TextInput
            testID="quantity"
            keyboardType="numeric"
            style={[
              styles.input,
              {
                width: '30%',
              },
            ]}
            placeholder="Quantity"
            selectTextOnFocus={true}
            value={article.quantity?.toString()}
            onChangeText={(value: string) => handleArticleChange('quantity', value)}
          />
          <SegmentedControl
            style={styles.segmentedControl}
            fontStyle={{
              fontSize: 14,
            }}
            values={units}
            selectedIndex={selectedIndex}
            onChange={(event) => {
              setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
              setArticle({
                ...article,
                unit: units[event.nativeEvent.selectedSegmentIndex],
              });
            }}
          />
        </View>
        <TextInput
          testID="price"
          keyboardType="numeric"
          style={styles.input}
          placeholder="Price"
          selectTextOnFocus={true}
          value={article.price?.toString()}
          onChangeText={(value: string) => handleArticleChange('price', value)}
        />
        <TouchableOpacity
          testID="add-article"
          style={[
            styles.button,
            {
              backgroundColor: isInvalidArticle ? colors.neutral : colors.primary,
            },
          ]}
          onPress={handleAddArticle}
          disabled={isInvalidArticle}
        >
          <Text style={styles.buttonText}>Add Article</Text>
        </TouchableOpacity>
      </View>
    </BottomSheet>
  );
};

export default AddArticle;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: 380,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    color: colors.black,
    fontSize: 32,
    fontWeight: 'bold',
    position: 'absolute',
    top: 20,
  },
  input: {
    borderBottomWidth: 0.8,
    borderColor: colors.neutral,
    height: 40,
    width: '80%',
    fontSize: 24,
    padding: 5,
    paddingBottom: 0,
    marginBottom: 30,
  },
  quantityContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  segmentedControl: {
    height: 40,
    width: '60%',
  },
  button: {
    backgroundColor: colors.primary,
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 30,
  },
  buttonText: {
    color: colors.white,
    fontSize: 24,
  },
});
