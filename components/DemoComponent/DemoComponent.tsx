import React, {useRef} from 'react';

import {FlatList, View} from 'react-native';
import {ZdsMapsView} from 'react-native-zds-maps';

import type {Place} from './types';

import styles from './styles';
import {exampleData} from './exampleData';
import Card from '../Card';

export default function DemoComponent() {
  const flatListRef = useRef<FlatList<Place> | null>();

  const handleMarkerTouch = (event: any) => {
    const foundPlaceIndex = exampleData.findIndex(
      place => place.id === event.nativeEvent.message,
    );

    if (!Number.isNaN(foundPlaceIndex)) {
      scrollToIndex(foundPlaceIndex);
    }
  };

  const renderItems = ({item}: {item: Place}) => {
    return <Card title={item.title} bgImage={item.imageSrc} />;
  };

  const scrollToIndex = (index: number) => {
    flatListRef.current?.scrollToIndex({animated: true, index: index});
  };

  return (
    <View>
      <ZdsMapsView
        style={styles.map}
        markers={exampleData}
        onMarkerClick={handleMarkerTouch}
      />

      <View style={styles.carrouselContainer}>
        <FlatList
          data={exampleData}
          renderItem={renderItems}
          keyExtractor={item => item.id}
          pagingEnabled
          horizontal
          ref={ref => {
            flatListRef.current = ref;
          }}
          style={styles.carrousel}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
