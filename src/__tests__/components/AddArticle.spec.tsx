/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import AddArticle, { AddArticleProps } from '../../components/AddArticle';
import { expect } from '@jest/globals';
import { MockedProvider } from '@apollo/client/testing';
import { UpsertArticle } from '../../../@types-extensions/graphql.d.ts';

const article = {
  name: 'Article 1',
  quantity: 500,
  price: 1.99,
  store: 'store 1',
};

const mockedResponse = {
  data: {
    upsertArticle: {
      id: '1',
      ...article,
      unit: 'g',
      store: {
        id: '1',
        name: article.store,
      },
    },
  },
};

const mocks = [
  {
    request: {
      query: UpsertArticle,
      variables: {
        ...article,
        name: `${article.name} - ${article.quantity} g`,
        unit: 'g',
      },
    },
    result: mockedResponse,
  },
];

const AddArticleComponent = (props: AddArticleProps) => (
  <MockedProvider mocks={mocks}>
    <AddArticle {...props} />
  </MockedProvider>
);

const createTestProps: (props?: {
  [key in keyof AddArticleProps]?: boolean | any;
}) => AddArticleProps = (props) => ({
  visible: true,
  toggle: jest.fn(),
  store: article.store,
  ...props,
});

afterAll(async () => {
  await new Promise((resolve) => setTimeout(resolve));
});

describe('AddArticle', () => {
  it('should show the modal by default', async () => {
    jest.useRealTimers();
    const props: AddArticleProps = createTestProps();
    const rendered = render(<AddArticleComponent {...props} />);
    await waitFor(() => {
      expect(rendered.getAllByText('Add Article')).toBeTruthy();
    });
  });

  it('should not show the modal when the visible is set to false', () => {
    jest.useRealTimers();
    const props: AddArticleProps = createTestProps({ visible: false });
    const rendered = render(<AddArticleComponent {...props} />);
    expect(rendered.queryByText('Add Article')).toBeNull();
  });

  it('should allow user to enter the value and create article', () => {
    jest.useRealTimers();
    const props: AddArticleProps = createTestProps();
    const rendered = render(<AddArticleComponent {...props} />);
    expect(rendered.getAllByText('Add Article')).toBeTruthy();

    const nameInput = rendered.getByTestId('name');
    fireEvent.changeText(nameInput, article.name);

    const quantityInput = rendered.getByTestId('quantity');
    fireEvent.changeText(quantityInput, article.quantity.toString());

    const priceInput = rendered.getByTestId('price');
    fireEvent.changeText(priceInput, article.price.toString());

    const addArticleButton = rendered.getByTestId('add-article');
    fireEvent.press(addArticleButton);
  });

  it('should display correctly', () => {
    const props: AddArticleProps = createTestProps();
    const rendered = render(<AddArticleComponent {...props} />);
    expect(rendered).toMatchInlineSnapshot(`
      <Modal
        animationType="none"
        deviceHeight={null}
        deviceWidth={null}
        hardwareAccelerated={false}
        hideModalContentWhileAnimating={false}
        onBackdropPress={[MockFunction]}
        onModalHide={[Function]}
        onModalWillHide={[Function]}
        onModalWillShow={[Function]}
        onRequestClose={[MockFunction]}
        panResponderThreshold={4}
        scrollHorizontal={false}
        scrollOffset={0}
        scrollOffsetMax={0}
        scrollTo={null}
        supportedOrientations={
          Array [
            "portrait",
            "landscape",
          ]
        }
        swipeThreshold={100}
        transparent={true}
        visible={true}
      >
        <View
          accessible={true}
          collapsable={false}
          focusable={true}
          forwardedRef={[Function]}
          onClick={[Function]}
          onResponderGrant={[Function]}
          onResponderMove={[Function]}
          onResponderRelease={[Function]}
          onResponderTerminate={[Function]}
          onResponderTerminationRequest={[Function]}
          onStartShouldSetResponder={[Function]}
          style={
            Object {
              "backgroundColor": "black",
              "bottom": 0,
              "height": 1334,
              "left": 0,
              "opacity": 0,
              "position": "absolute",
              "right": 0,
              "top": 0,
              "width": 750,
            }
          }
        />
        <View
          collapsable={false}
          deviceHeight={null}
          deviceWidth={null}
          forwardedRef={[Function]}
          hideModalContentWhileAnimating={false}
          onBackdropPress={[MockFunction]}
          onModalHide={[Function]}
          onModalWillHide={[Function]}
          onModalWillShow={[Function]}
          panResponderThreshold={4}
          pointerEvents="box-none"
          scrollHorizontal={false}
          scrollOffset={0}
          scrollOffsetMax={0}
          scrollTo={null}
          style={
            Object {
              "flex": 1,
              "justifyContent": "flex-end",
              "margin": 0,
              "transform": Array [
                Object {
                  "translateY": 1334,
                },
              ],
            }
          }
          supportedOrientations={
            Array [
              "portrait",
              "landscape",
            ]
          }
          swipeThreshold={100}
        >
          <View
            style={
              Object {
                "alignItems": "center",
                "backgroundColor": "#F3F9FC",
                "height": 380,
                "justifyContent": "flex-end",
                "width": "100%",
              }
            }
          >
            <Text
              style={
                Object {
                  "color": "#333333",
                  "fontSize": 32,
                  "fontWeight": "bold",
                  "position": "absolute",
                  "top": 20,
                }
              }
            >
              Add Article
            </Text>
            <TextInput
              onChangeText={[Function]}
              placeholder="Article Name"
              style={
                Object {
                  "borderBottomWidth": 0.8,
                  "borderColor": "#828382",
                  "fontSize": 24,
                  "height": 40,
                  "marginBottom": 30,
                  "padding": 5,
                  "paddingBottom": 0,
                  "width": "80%",
                }
              }
              testID="name"
              value=""
            />
            <View
              style={
                Object {
                  "alignItems": "flex-start",
                  "flexDirection": "row",
                  "justifyContent": "space-between",
                  "width": "80%",
                }
              }
            >
              <TextInput
                keyboardType="numeric"
                onChangeText={[Function]}
                placeholder="Quantity"
                selectTextOnFocus={true}
                style={
                  Array [
                    Object {
                      "borderBottomWidth": 0.8,
                      "borderColor": "#828382",
                      "fontSize": 24,
                      "height": 40,
                      "marginBottom": 30,
                      "padding": 5,
                      "paddingBottom": 0,
                      "width": "80%",
                    },
                    Object {
                      "width": "30%",
                    },
                  ]
                }
                testID="quantity"
                value="0"
              />
              <RNCSegmentedControl
                enabled={true}
                fontStyle={
                  Object {
                    "color": undefined,
                    "fontSize": 14,
                  }
                }
                onChange={[Function]}
                selectedIndex={0}
                style={
                  Array [
                    Object {
                      "height": 32,
                    },
                    Object {
                      "height": 40,
                      "width": "60%",
                    },
                  ]
                }
                values={
                  Array [
                    "g",
                    "kg",
                    "piece",
                  ]
                }
              />
            </View>
            <TextInput
              keyboardType="numeric"
              onChangeText={[Function]}
              placeholder="Price"
              selectTextOnFocus={true}
              style={
                Object {
                  "borderBottomWidth": 0.8,
                  "borderColor": "#828382",
                  "fontSize": 24,
                  "height": 40,
                  "marginBottom": 30,
                  "padding": 5,
                  "paddingBottom": 0,
                  "width": "80%",
                }
              }
              testID="price"
              value="0"
            />
            <View
              accessibilityState={
                Object {
                  "disabled": true,
                }
              }
              accessible={true}
              collapsable={false}
              focusable={true}
              onClick={[Function]}
              onResponderGrant={[Function]}
              onResponderMove={[Function]}
              onResponderRelease={[Function]}
              onResponderTerminate={[Function]}
              onResponderTerminationRequest={[Function]}
              onStartShouldSetResponder={[Function]}
              style={
                Object {
                  "alignItems": "center",
                  "backgroundColor": "#828382",
                  "borderRadius": 10,
                  "height": 50,
                  "justifyContent": "center",
                  "marginVertical": 30,
                  "opacity": 1,
                  "width": "80%",
                }
              }
              testID="add-article"
            >
              <Text
                style={
                  Object {
                    "color": "#F3F9FC",
                    "fontSize": 24,
                  }
                }
              >
                Add Article
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    `);
  });
});
