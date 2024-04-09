import React, {useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  View,
} from 'react-native';
import {BASE_URL} from '../../constants/constants';
import {useQuery} from '@tanstack/react-query';
import {GetInfoMovieResponse} from '../../types/types';
import Frames from '../../components/common/Frames';
import Similars from '../../components/common/Similars';
import Trailer from '../../components/common/Trailer';

const MovieDetails = ({route}: any) => {
  const fetchInfoMovie = () => {
    return fetch(`${BASE_URL}/api/v2.2/films/${route.params.id}`, {
      headers: {
        accept: 'application/json',
        'X-API-KEY': 'e8feb6b3-532c-4bc2-837d-8f87b17be0fa',
      },
    }).then(res => res.json());
  };

  const {data, isLoading} = useQuery<GetInfoMovieResponse>(
    ['getInfoMovie', route.params.id],
    fetchInfoMovie,
  );

  console.log(data, 'data');

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Text>Loading</Text>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.infoBlock}>
            <Image
              style={styles.poster}
              source={{uri: data?.posterUrlPreview}}
            />
            <View style={styles.info}>
              <Text style={styles.name}>{data?.nameRu}</Text>
              <Text>
                {data?.ratingKinopoisk && (
                  <Text style={styles.ratingKinopoisk}>
                    Kinopoisk: {data?.ratingKinopoisk}{' '}
                  </Text>
                )}
                {data?.ratingImdb && (
                  <Text style={styles.ratingImdb}>
                    Imdb: {data?.ratingImdb}
                  </Text>
                )}
              </Text>
              <Text>
                <Text style={styles.year}>{data?.year} </Text>
                {data?.countries.map(item => (
                  <Text key={item.country} style={styles.country}>
                    {item.country}{' '}
                  </Text>
                ))}
              </Text>
              <Text>
                {data?.genres.map(item => (
                  <Text key={item.genre} style={styles.genres}>
                    {item.genre}{' '}
                  </Text>
                ))}
              </Text>
              {data?.slogan && (
                <Text style={styles.slogan}>{data?.slogan} </Text>
              )}
            </View>
          </View>

          <Text style={styles.description}>{data?.description}</Text>
          {data?.kinopoiskId && <Frames id={data?.kinopoiskId} />}
          {data?.kinopoiskId && <Similars id={data?.kinopoiskId} />}
          {data?.kinopoiskId && <Trailer id={data?.kinopoiskId} />}
        </ScrollView>
      )}
    </View>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#111111',
  },
  infoBlock: {
    position: 'relative',
    marginBottom: 8,
  },
  poster: {
    width: '100%',
    height: 600,
  },
  info: {
    backgroundColor:
      'linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,1) 100%)',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
  name: {
    color: '#fff',
    fontSize: 16,
  },
  ratingImdb: {
    color: '#88d9dd',
  },
  ratingKinopoisk: {
    color: '#88d9dd',
  },
  genres: {
    color: '#fff',
  },
  country: {
    color: '#fff',
  },
  description: {
    color: '#fff',
    textAlign: 'justify',
    marginBottom: 8,
    paddingHorizontal: 8,
  },
  year: {
    color: '#fff',
  },
  slogan: {
    color: '#fff',
    fontStyle: 'italic',
  },
});
