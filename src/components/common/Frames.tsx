import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
} from 'react-native';
import {BASE_URL} from '../../constants/constants';
import {useQuery} from '@tanstack/react-query';
import {GetFramesMovieResponse} from '../../types/types';
import Dropdown from './Dropdown';
import Movie from '../Movie';

const Frames = ({id}: {id: number}) => {
  const fetchFramesMovie = () => {
    return fetch(`${BASE_URL}/api/v2.2/films/${id}/images?type=STILL&page=1`, {
      headers: {
        accept: 'application/json',
        'X-API-KEY': 'e8feb6b3-532c-4bc2-837d-8f87b17be0fa',
      },
    }).then(res => res.json());
  };

  const {data, isLoading} = useQuery<GetFramesMovieResponse>(
    ['getFramesMovie', id],
    fetchFramesMovie,
  );

  return (
    <Dropdown nameButton={'Frames'}>
      {isLoading ? (
        <ActivityIndicator />
      ) : data?.items?.length ? (
        <FlatList
          data={data?.items}
          renderItem={({item}) => (
            <Image
              style={styles.frame}
              source={{
                uri: item.previewUrl,
              }}
            />
          )}
          keyExtractor={item => item.previewUrl}
          numColumns={1}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      ) : (
        <Text style={styles.message}>No images</Text>
      )}
    </Dropdown>
  );
};

export default Frames;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1b2937',
  },
  frame: {
    height: 200,
    width: 300,
  },
  message: {
    textAlign: 'center',
    color: '#fff',
    marginBottom: 8,
  },
});
