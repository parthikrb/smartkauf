import React from 'react';
import { render } from '@testing-library/react-native';
import { expect } from '@jest/globals';
import StoreCard, { StoreCardProperties as StoreCardProperties } from '../../components/store-card';
import { NavigationContainer } from '@react-navigation/native';

const StoreCardComponent = (properties: StoreCardProperties) => (
  <NavigationContainer>
    <StoreCard {...properties} />
  </NavigationContainer>
);

const createTestProperties: (properties?: {
  [key in keyof StoreCardProperties]?: string;
}) => StoreCardProperties = (properties) => ({
  name: 'Store Name',
  location: 'Getting Location...',
  id: 'store-id',
  ...properties,
});

describe('StoreCard', () => {
  it('should not show location but name', () => {
    const properties: StoreCardProperties = createTestProperties();
    const { getByText, queryByText } = render(<StoreCardComponent {...properties} />);
    expect(getByText('Store Name')).toBeTruthy();
    expect(queryByText('Getting Location...')).toBeNull();
  });

  it('should show the valid location', () => {
    const properties: StoreCardProperties = createTestProperties({
      location: 'Bairro, Cidade',
    });
    const { getByText } = render(<StoreCardComponent {...properties} />);
    expect(getByText('Store Name')).toBeTruthy();
    expect(getByText('Bairro, Cidade')).toBeTruthy();
  });

  it('should display the component correctly', () => {
    const properties: StoreCardProperties = createTestProperties();
    const rendered = render(<StoreCardComponent {...properties} />);
    expect(rendered).toMatchInlineSnapshot(`
      <View
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
            "backgroundColor": "#2142AB",
            "borderRadius": 10,
            "display": "flex",
            "elevation": 5,
            "height": 140,
            "justifyContent": "center",
            "margin": 10,
            "opacity": 1,
            "padding": 10,
            "shadowColor": "#333333",
            "shadowOffset": Object {
              "height": 2,
              "width": 0,
            },
            "shadowOpacity": 0.25,
            "shadowRadius": 3.84,
            "width": "45%",
          }
        }
      >
        <Text
          style={
            Object {
              "color": "#F3F9FC",
              "fontSize": 26,
              "fontWeight": "bold",
            }
          }
        >
          Store Name
        </Text>
      </View>
    `);
  });
});
