import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Movie from '../Movie';
import {useQuery} from '@tanstack/react-query';
import {GetPremieresResponse, GetReleasesResponse} from '../../types/types';
import {BASE_URL} from '../../constants/constants';

const ReleasesMovie = () => {
  const fetchReleases = () => {
    return fetch(
      `${BASE_URL}/api/v2.1/films/releases?year=2023&month=JANUARY&page=1`,
      {
        headers: {
          accept: 'application/json',
          'X-API-KEY': 'e8feb6b3-532c-4bc2-837d-8f87b17be0fa',
        },
      },
    ).then(res => res.json());
  };

  const {data: releases, isLoading: isLoadingReleases} =
    useQuery<GetReleasesResponse>(['getReleases'], fetchReleases);

  return (
    <View>
      {isLoadingReleases ? (
        <Text>Loading</Text>
      ) : (
        <View>
          <Text style={styles.title}>Releases</Text>
          <FlatList
            data={releases?.releases}
            renderItem={({item}) => (
              <Movie name={item.nameRu} poster={item.posterUrlPreview} />
            )}
            keyExtractor={item => String(item.filmId)}
            horizontal={true}
          />
        </View>
      )}
    </View>
  );
};

export default ReleasesMovie;

const styles = StyleSheet.create({
  title: {
    color: '#646d79',
  },
});
