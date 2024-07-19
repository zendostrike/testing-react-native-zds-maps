import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  carrousel: {
    maxHeight: 250,
    maxWidth: 250,
  },
  carrouselContainer: {
    position: 'absolute',
    bottom: 10,
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
    paddingVertical: 6,
  },
});

export default styles;
