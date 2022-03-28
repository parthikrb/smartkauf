import React from 'react';
import { render } from '@testing-library/react-native';
import { expect } from '@jest/globals';
import { Text } from 'react-native';
import SafeAreaView from '../../components/SafeAreaView';

describe('SafeAreaView', () => {
  it('display the children', () => {
    const ChildrenComponent = <Text>Hello Test</Text>;
    const rendered = render(<SafeAreaView>{ChildrenComponent}</SafeAreaView>);
    expect(rendered.getByText('Hello Test')).toBeTruthy();
  });

  it('should display correctly', () => {
    const ChildrenComponent = <Text>Hello Test</Text>;
    const rendered = render(<SafeAreaView>{ChildrenComponent}</SafeAreaView>);
    expect(rendered).toMatchInlineSnapshot(`
      <View
        style={
          Object {
            "backgroundColor": "#F3F9FC",
            "flex": 1,
            "paddingTop": 0,
          }
        }
      >
        <Text>
          Hello Test
        </Text>
      </View>
    `);
  });
});
