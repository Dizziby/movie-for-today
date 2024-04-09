import React from 'react';
import { BASE_URL } from '../../constants/constants';
import { useQuery } from '@tanstack/react-query';
import { GetSimilarsMovieResponse } from '../../types/types';
import Dropdown from './Dropdown';
import { ActivityIndicator, FlatList, Image, StyleSheet, Text } from 'react-native';
import Movie from '../Movie';

const Similars = ({ id }: { id: number }) => {
  const fetchSimilarsMovie = () => {
    return fetch(`${BASE_URL}/api/v2.2/films/${id}/similars`, {
      headers: {
        accept: 'application/json',
        'X-API-KEY': 'e8feb6b3-532c-4bc2-837d-8f87b17be0fa',
      },
    }).then(res => res.json());
  };

  const { data, isLoading } = useQuery<GetSimilarsMovieResponse>(
    ['getSimilarsMovie', id],
    fetchSimilarsMovie,
  );

  return (
    <Dropdown nameButton={'Similars'}>
      {isLoading ? (
        <ActivityIndicator />
      ) : data?.items?.length ? (
        <FlatList
          data={data?.items}
          renderItem={({ item }) => (
            <Movie name={item.nameRu} poster={item.posterUrlPreview} id={item.filmId} />
          )}
          keyExtractor={item => String(item.filmId)}
          numColumns={1}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      ) : (
        <Text style={styles.message}>Not similars movies </Text>
      )}
    </Dropdown>
  );
};

export default Similars;

const styles = StyleSheet.create({
  message: {
    textAlign: 'center',
    color: '#fff',
    marginBottom: 8,
  },
});
