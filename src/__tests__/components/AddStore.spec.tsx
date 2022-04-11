/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import AddStore, { AddStoreProps } from '../../components/AddStore';
import { expect } from '@jest/globals';
import { MockedProvider } from '@apollo/client/testing';

global.console.warn = jest.fn();
global.console.error = jest.fn();

jest.mock('expo-location', () => ({
  requestForegroundPermissionsAsync: () => ({
    status: 'granted',
  }),
  getCurrentPositionAsync: () =>
    Promise.resolve({
      coords: {
        latitude: -23.564,
        longitude: -46.654,
      },
    }),
  reverseGeocodeAsync: () => [
    {
      street: 'Rua',
      streetNumber: '1',
      district: 'Bairro',
      region: 'Cidade',
      postalCode: '00000',
    },
  ],
}));

const AddStoreComponent = (props: AddStoreProps) => (
  <MockedProvider mocks={[]}>
    <AddStore {...props} />
  </MockedProvider>
);

const createTestProps: (props?: {
  [key in keyof AddStoreProps]?: boolean | any;
}) => AddStoreProps = (props) => ({
  visible: true,
  toggle: jest.fn(),
  ...props,
});

// to disable the Reference error
// ReferenceError: You are trying to `import` a file after the Jest environment has been torn down
// https://stackoverflow.com/questions/67178109/jest-throwing-reference-error-about-an-import-inside-a-node-modules-dependency
afterAll(async () => {
  await new Promise((resolve) => setTimeout(resolve));
});

describe('AddStore', () => {
  it('should show the modal by default and location', async () => {
    jest.useRealTimers();
    const props: AddStoreProps = createTestProps();
    const rendered = render(<AddStoreComponent {...props} />);
    await waitFor(() => {
      expect(rendered.getAllByText('Add Store')).toBeTruthy();
    });
    expect(rendered.queryByText('Getting Location...')).toBeNull();
    expect(rendered.getByText('Bairro, Cidade')).toBeTruthy();
  });

  it('should not show the modal when the visible is set to false', () => {
    const props: AddStoreProps = createTestProps({ visible: false });
    const rendered = render(<AddStoreComponent {...props} />);
    expect(rendered.queryByText('Add Store')).toBeNull();
  });

  it('should display correctly', () => {
    const props = createTestProps();
    const rendered = render(<AddStoreComponent {...props} />);
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
                "height": 280,
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
              Add Store
            </Text>
            <TextInput
              onChangeText={[Function]}
              placeholder="Store Name"
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
              value=""
            />
            <View
              style={
                Object {
                  "alignItems": "center",
                  "display": "flex",
                  "flexDirection": "row",
                  "flexWrap": "wrap",
                  "justifyContent": "center",
                  "width": "80%",
                }
              }
            >
              <View
                color="#333333"
                name="location-outline"
                size={16}
              />
              <Text
                style={
                  Object {
                    "fontSize": 16,
                  }
                }
              >
                Getting Location...
              </Text>
            </View>
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
            >
              <Text
                style={
                  Object {
                    "color": "#F3F9FC",
                    "fontSize": 24,
                  }
                }
              >
                Add Store
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    `);
  });
});
