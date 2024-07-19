import * as React from 'react';
import {Text, View, Image} from 'react-native';

import type {Props} from './types';
import {styles} from './styles';

export default function Card({title, bgImage}: Props) {
  return (
    <View style={styles.card_template}>
      <Image
        style={styles.card_image}
        source={{
          uri: bgImage,
        }}
      />
      <View style={styles.text_container}>
        <Text style={styles.card_title}>{title}</Text>
      </View>
    </View>
  );
}
