/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { Text } from 'react-native';
import { connectHighlight } from 'react-instantsearch-native';

type BaseProps = {
  attribute: string;
  hit: any;
};

type HighlightOptionsProps = BaseProps & {
  highlightProperty: string;
};

type HighlightsOutputProps = {
  value: string;
  isHighlighted: boolean;
};

type HighlightProps = BaseProps & {
  highlight: (options: HighlightOptionsProps) => HighlightsOutputProps[];
};

const Highlight = ({ attribute, hit, highlight }: HighlightProps) => {
  const highlights = highlight({
    highlightProperty: '_highlightResult',
    attribute,
    hit,
  });

  return (
    <Text>
      {highlights.map(({ value, isHighlighted }: HighlightsOutputProps, index) => {
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
