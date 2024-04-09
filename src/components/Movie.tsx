import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useAppNavigation } from '../types/types';

const Movie = ({
  name,
  poster,
  rating,
  id,
}: {
  name: string;
  poster: string;
  rating?: number | string | null;
  id: number;
}) => {
  const navigation = useAppNavigation();

  let ratingFormat;
  if (typeof rating === 'number') {
    ratingFormat = Math.round(rating * 10) / 10;
  } else if (typeof rating === 'string') {
    if (rating.includes('%')) {
      ratingFormat = Number(rating.slice(0, 2)) / 10;
    } else {
      ratingFormat = Number(rating);
    }
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate('HomeScreen', {
          screen: 'MovieDetails',
          params: { id: id },
        })
      }>
      <Image
        style={styles.poster}
        source={{
          uri: poster,
        }}
      />
      <Text style={styles.name}>{name}</Text>
      {rating && (
        <View style={styles.rating}>
          <Text style={styles.ratingText}>{ratingFormat}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Movie;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: 10,
    marginVertical: 10,
    width: 200,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#646d79',
    position: 'relative',
  },
  poster: {
    width: '100%',
    height: 300,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  name: {
    textAlign: 'center',
    color: '#88d9dd',
    fontSize: 12,
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
    width: 30,
    height: 30,
    backgroundColor: '#1b2937',
    borderRadius: 8,
  },
  ratingText: {
    color: '#fff',
  },
});
