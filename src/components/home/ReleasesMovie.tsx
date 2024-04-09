import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Movie from '../Movie';
import { useQuery } from '@tanstack/react-query';
import { GetReleasesResponse } from '../../types/types';
import { BASE_URL, month } from '../../constants/constants';

const ReleasesMovie = () => {
  const currentDate = new Date();
  const currentMonth = month[currentDate.getMonth()];

  const fetchReleases = () => {
    return fetch(`${BASE_URL}/api/v2.1/films/releases?year=2023&month=${currentMonth}&page=1`, {
      headers: {
        accept: 'application/json',
        'X-API-KEY': 'e8feb6b3-532c-4bc2-837d-8f87b17be0fa',
      },
    }).then(res => res.json());
  };

  const { data: releases, isLoading: isLoadingReleases } = useQuery<GetReleasesResponse>(
    ['getReleases'],
    fetchReleases,
  );

  return (
    <View style={styles.container}>
      {isLoadingReleases ? (
        <Text>Loading</Text>
      ) : (
        <View>
          <Text style={styles.title}>Releases</Text>
          <FlatList
            data={releases?.releases}
            renderItem={({ item }) => (
              <Movie
                id={item.filmId}
                name={item.nameRu}
                poster={item.posterUrlPreview}
                rating={item.rating}
              />
            )}
            keyExtractor={item => String(item.filmId)}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      )}
    </View>
  );
};

export default ReleasesMovie;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#111111',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  title: {
    color: '#646d79',
  },
});
