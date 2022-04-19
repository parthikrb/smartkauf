import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import FAB, { FABProperties as FABProperties } from '../../components/floating-action-button';
import { expect } from '@jest/globals';

const createTestProperties: () => FABProperties = () => ({
  bottom: 20,
  onPress: jest.fn(),
});

describe('FAB', () => {
  it('should call onPress callback', () => {
    const properties: FABProperties = createTestProperties();
    const rendered = render(<FAB {...properties} />);
    const button = rendered.getByTestId('FAB');
    fireEvent.press(button);
    expect(properties.onPress).toHaveBeenCalled();
  });

  it('displays correctly', () => {
    const properties: FABProperties = createTestProperties();
    const rendered = render(<FAB {...properties} />);
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
            "backgroundColor": "#0DBB89",
            "borderRadius": 25,
            "bottom": 20,
            "display": "flex",
            "height": 50,
            "justifyContent": "center",
            "opacity": 1,
            "position": "absolute",
            "right": 20,
            "width": 50,
          }
        }
        testID="FAB"
      >
        <View
          color="#F3F9FC"
          name="add-outline"
          size={40}
        />
      </View>
    `);
  });
});
