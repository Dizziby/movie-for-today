import React, { useState } from 'react';
import {
  ActivityIndicator,
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { BASE_URL, X_API_KEY } from '../../constants/constants';
import { useQuery } from '@tanstack/react-query';
import { GetFiltersResponse } from '../../types/types';
import { Picker } from '@react-native-picker/picker';
import Movie from '../Movie';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface IFilters {
  sorting: string;
  type: string;
  minRating: string;
  maxRating: string;
  fromYear: string;
  toYear: string;
  keyword: string;
}

const defaultFilters: IFilters = {
  sorting: 'RATING',
  type: 'ALL',
  minRating: '0',
  maxRating: '10',
  fromYear: '2022',
  toYear: '2023',
  keyword: '',
};

export const Filters = () => {
  const [filters, setFilters] = useState(defaultFilters);
  const [showFilters, setShowFilters] = useState(true);

  const fetchFilters = () => {
    console.log(
      `${BASE_URL}/api/v2.2/films?genres=0&order=${filters.sorting}&type=${filters.type}&ratingFrom=${filters.minRating}&ratingTo=${filters.maxRating}&yearFrom=${filters.fromYear}&yearTo=${filters.toYear}&page=1`,
      'link',
    );
    return fetch(
      `${BASE_URL}/api/v2.2/films?order=${filters.sorting}&type=${filters.type}&ratingFrom=${filters.minRating}&ratingTo=${filters.maxRating}&yearFrom=${filters.fromYear}&yearTo=${filters.toYear}&page=1`,
      {
        headers: {
          accept: 'application/json',
          'X-API-KEY': X_API_KEY,
        },
      },
    ).then(res => res.json());
  };

  const { data, isLoading } = useQuery<GetFiltersResponse>({
    queryKey: ['getFilters', filters],
    queryFn: fetchFilters,
  });

  console.log(data, 'data');

  return (
    <View style={styles.container}>
      <View style={{ display: showFilters ? 'flex' : 'none' }}>
        <View style={styles.pair}>
          <View style={styles.inputBlock}>
            <Text>SORTING</Text>
            <Picker
              style={styles.dropdown}
              selectedValue={filters.sorting}
              onValueChange={(itemValue, itemIndex) =>
                setFilters(prevState => ({ ...prevState, sorting: itemValue }))
              }>
              <Picker.Item label="RATING" value="RATING" />
              <Picker.Item label="NUM_VOTE" value="NUM_VOTE" />
              <Picker.Item label="YEAR" value="YEAR" />
            </Picker>
          </View>
          <View style={styles.inputBlock}>
            <Text>TYPE</Text>
            <Picker
              style={styles.dropdown}
              selectedValue={filters.type}
              onValueChange={(itemValue, itemIndex) =>
                setFilters(prevState => ({ ...prevState, type: itemValue }))
              }>
              <Picker.Item label="ALL" value="ALL" />
              <Picker.Item label="FILM" value="FILM" />
              <Picker.Item label="TV_SHOW" value="TV_SHOW" />
              <Picker.Item label="TV_SERIES" value="TV_SERIES" />
              <Picker.Item label="MINI_SERIES" value="MINI_SERIES" />
            </Picker>
          </View>
        </View>

        <View style={styles.pair}>
          <View style={styles.inputBlock}>
            <Text>MIN RATING</Text>
            <TextInput
              style={styles.input}
              value={filters.minRating}
              onChangeText={text => setFilters(prevState => ({ ...prevState, minRating: text }))}
            />
          </View>
          <View style={styles.inputBlock}>
            <Text>MAX RATING</Text>
            <TextInput
              style={styles.input}
              value={filters.maxRating}
              onChangeText={text => setFilters(prevState => ({ ...prevState, maxRating: text }))}
            />
          </View>
        </View>

        <View style={styles.pair}>
          <View style={styles.inputBlock}>
            <Text>FROM YEAR</Text>
            <TextInput
              style={styles.input}
              value={filters.fromYear}
              onChangeText={text => setFilters(prevState => ({ ...prevState, fromYear: text }))}
            />
          </View>
          <View style={styles.inputBlock}>
            <Text>TO YEAR</Text>
            <TextInput
              style={styles.input}
              value={filters.toYear}
              onChangeText={text => setFilters(prevState => ({ ...prevState, toYear: text }))}
            />
          </View>
        </View>

        <Text>KEYWORD</Text>
        <TextInput
          style={styles.input}
          value={filters.keyword}
          onChangeText={text => setFilters(prevState => ({ ...prevState, keyword: text }))}
          placeholder={'Keywords'}
          placeholderTextColor={'#a6ade3'}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setShowFilters(prevState => !prevState)}>
        <Text style={styles.buttonText}>Filters</Text>
        {showFilters ? (
          <Ionicons name={'caret-up-outline'} size={15} color={'#fff'} />
        ) : (
          <Ionicons name={'caret-down-outline'} size={15} color={'#fff'} />
        )}
      </TouchableOpacity>

      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View>
          <FlatList
            data={data?.items}
            renderItem={({ item }) => (
              <Movie
                name={item.nameRu}
                poster={item.posterUrlPreview}
                rating={item.ratingKinopoisk}
                id={item.kinopoiskId}
              />
            )}
            keyExtractor={item => String(item.kinopoiskId)}
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
  },
  dropdown: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 8,
    margin: 0,
    padding: 0,
    borderColor: '#a6ade3',
    backgroundColor: '#a6ade3',
  },

  input: {
    borderWidth: 1,
    borderRadius: 8,
    height: 32,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderColor: '#a6ade3',
    color: '#a6ade3',
  },
  pair: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  inputBlock: {
    flexGrow: 1,
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginVertical: 8,
    backgroundColor: '#a6ade3',
    paddingVertical: 6,
    paddingHorizontal: 12,
    width: '100%',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
  },
});
