import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const Movie = ({
  name,
  poster,
  rating,
}: {
  name: string;
  poster: string;
  rating?: string;
}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.poster}
        source={{
          uri: poster,
        }}
      />
      <Text style={styles.name}>{name}</Text>
      {rating && rating !== 'null' && <Text>{rating}</Text>}
    </View>
  );
};

export default Movie;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginVertical: 10,
    width: 200,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#646d79',
  },
  poster: {
    width: '100%',
    height: 300,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  name: {
    textAlign: 'center',
    color: '#646d79',
  },
  rating: {
    textAlign: 'center',
    color: '#646d79',
  },
});
