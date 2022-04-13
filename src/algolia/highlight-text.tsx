/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { Text } from 'react-native';
import { connectHighlight } from 'react-instantsearch-native';

type BaseProperties = {
  attribute: string;
  hit: any;
};

type HighlightOptionsProperties = BaseProperties & {
  highlightProperty: string;
};

type HighlightsOutputProperties = {
  value: string;
  isHighlighted: boolean;
};

type HighlightProperties = BaseProperties & {
  highlight: (options: HighlightOptionsProperties) => HighlightsOutputProperties[];
};

const Highlight = ({ attribute, hit, highlight }: HighlightProperties) => {
  const highlights = highlight({
    highlightProperty: '_highlightResult',
    attribute,
    hit,
  });

  return (
    <Text>
      {highlights.map(({ value, isHighlighted }: HighlightsOutputProperties, index) => {
        const style = {
          backgroundColor: isHighlighted ? 'yellow' : 'transparent',
        };

        return (
          <Text key={index} style={style}>
            {value}
          </Text>
        );
      })}
    </Text>
  );
};

export default connectHighlight(Highlight);
