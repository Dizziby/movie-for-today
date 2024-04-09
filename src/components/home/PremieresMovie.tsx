import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Movie from '../Movie';
import { useQuery } from '@tanstack/react-query';
import { GetPremieresResponse } from '../../types/types';
import { BASE_URL, month } from '../../constants/constants';

const PremieresMovie = () => {
  const currentDate = new Date();
  const currentMonth = month[currentDate.getMonth()];

  const fetchPremieres = () => {
    return fetch(`${BASE_URL}/api/v2.2/films/premieres?year=2023&month=${currentMonth}`, {
      headers: {
        accept: 'application/json',
        'X-API-KEY': 'e8feb6b3-532c-4bc2-837d-8f87b17be0fa',
      },
    }).then(res => res.json());
  };

  const { data, isLoading } = useQuery<GetPremieresResponse>(['getPremieres'], fetchPremieres);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Text>Loading</Text>
      ) : (
        <View>
          <Text style={styles.title}>Premieres</Text>
          <FlatList
            data={data?.items}
            renderItem={({ item }) => (
              <Movie id={item.kinopoiskId} name={item.nameRu} poster={item.posterUrlPreview} />
            )}
            keyExtractor={item => String(item.kinopoiskId)}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      )}
    </View>
  );
};

export default PremieresMovie;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#111111',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  title: {
    color: '#646d79',
  },
});
