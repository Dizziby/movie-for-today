import React, {useState} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import {BASE_URL, X_API_KEY} from '../../constants/constants';
import {useQuery} from '@tanstack/react-query';
import {GetTopResponse} from '../../types/types';
import {Picker} from '@react-native-picker/picker';
import Movie from '../Movie';

export const Top = () => {
  const [topType, setTopType] = useState('TOP_250_BEST_FILMS');

  const fetchTop = () => {
    return fetch(`${BASE_URL}/api/v2.2/films/top?type=${topType}&page=1`, {
      headers: {
        accept: 'application/json',
        'X-API-KEY': X_API_KEY,
      },
    }).then(res => res.json());
  };

  const {data, isLoading} = useQuery<GetTopResponse>({
    queryKey: ['getTop', topType],
    queryFn: fetchTop,
    enabled: !!topType,
  });

  return (
    <View style={styles.container}>
      <Picker
        style={styles.dropdown}
        selectedValue={topType}
        onValueChange={(itemValue, itemIndex) => setTopType(itemValue)}>
        <Picker.Item label="TOP 250 BEST FILMS" value="TOP_250_BEST_FILMS" />
        <Picker.Item
          label="TOP 100 POPULAR FILMS"
          value="TOP_100_POPULAR_FILMS"
        />
        <Picker.Item label="TOP AWAIT FILMS" value="TOP_AWAIT_FILMS" />
      </Picker>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View>
          <FlatList
            data={data?.films}
            renderItem={({item}) => (
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
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
    paddingHorizontal: 10,
    paddingVertical: 10,
    paddingBottom: 50
  },
  dropdown: {
    color: '#646d79',
    zIndex: 10,
  },
});
