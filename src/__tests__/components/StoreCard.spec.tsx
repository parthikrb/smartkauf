import React from 'react';
import { render } from '@testing-library/react-native';
import { expect } from '@jest/globals';
import StoreCard, { StoreCardProps } from '../../components/StoreCard';

const createTestProps: (props?: {
  [key in keyof StoreCardProps]?: string;
}) => StoreCardProps = (props) => ({
  name: 'Store Name',
  location: 'Getting Location...',
  ...props,
});

describe('StoreCard', () => {
  it('should not show location but name', () => {
    const props: StoreCardProps = createTestProps();
    const { getByText, queryByText } = render(<StoreCard {...props} />);
    expect(getByText('Store Name')).toBeTruthy();
    expect(queryByText('Getting Location...')).toBeNull();
  });

  it('should show the valid location', () => {
    const props: StoreCardProps = createTestProps({
      location: 'Bairro, Cidade',
    });
    const { getByText } = render(<StoreCard {...props} />);
    expect(getByText('Store Name')).toBeTruthy();
    expect(getByText('Bairro, Cidade')).toBeTruthy();
  });

  it('should display the component correctly', () => {
    const props: StoreCardProps = createTestProps();
    const rendered = render(<StoreCard {...props} />);
    expect(rendered).toMatchInlineSnapshot(`
      <View
        accessible={true}
        collapsable={false}
        focusable={false}
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
