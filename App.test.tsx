import React from 'react';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';

import App from './App';

describe('<App />', () => {
  it('has 1 child', () => {
    const tree: ReactTestRendererJSON = renderer.create(<App />).toJSON() as ReactTestRendererJSON;
    expect(tree?.children?.length).toBe(1);
  });

  it('displays correctly', () => {
    const tree: ReactTestRendererJSON = renderer.create(<App />).toJSON() as ReactTestRendererJSON;
    expect(tree).toMatchInlineSnapshot(
      `
      <View
        style={
          Object {
            "alignItems": "center",
            "backgroundColor": "#fff",
            "flex": 1,
            "justifyContent": "center",
          }
        }
      >
        <Text>
          Open up App.tsx to start checking on your app!
        </Text>
      </View>
    `,
    );
  });
});
