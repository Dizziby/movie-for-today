import React from 'react';
import { FlatList, View } from 'react-native';
import Movie from '../Movie';
import { ISearchMovie } from '../../types/types';

const SearchMovie = ({ films }: { films: ISearchMovie[] }) => {
  return (
    <View>
      <FlatList
        data={films}
        renderItem={({ item }) => (
          <Movie
            name={item.nameRu}
            poster={item.posterUrlPreview}
            rating={item.rating}
            id={item.filmId}
          />
        )}
        keyExtractor={item => String(item.filmId)}
        numColumns={2}
      />
    </View>
  );
};

export default SearchMovie;
