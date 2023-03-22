import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Movie from '../Movie';
import {useQuery} from '@tanstack/react-query';
import {GetPremieresResponse} from '../../types/types';
import {BASE_URL} from '../../constants/constants';

const PremieresMovie = () => {
  const fetchPremieres = () => {
    return fetch(`${BASE_URL}/api/v2.2/films/premieres?year=2023&month=MARCH`, {
      headers: {
        accept: 'application/json',
        'X-API-KEY': 'e8feb6b3-532c-4bc2-837d-8f87b17be0fa',
      },
    }).then(res => res.json());
  };

  const {data: premieres, isLoading: isLoadingPremieres} =
    useQuery<GetPremieresResponse>(['getPremieres'], fetchPremieres);

  return (
    <View>
      {isLoadingPremieres ? (
        <Text>Loading</Text>
      ) : (
        <View>
          <Text style={styles.title}>Premieres</Text>
          <FlatList
            data={premieres?.items}
            renderItem={({item}) => (
              <Movie name={item.nameRu} poster={item.posterUrlPreview} />
            )}
            keyExtractor={item => String(item.kinopoiskId)}
            horizontal={true}
          />
        </View>
      )}
    </View>
  );
};

export default PremieresMovie;

const styles = StyleSheet.create({
  title: {
    color: '#646d79',
  },
});