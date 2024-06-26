import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, TextInput, View, Text } from 'react-native';
import { BASE_URL, X_API_KEY } from '../../constants/constants';
import { useQuery } from '@tanstack/react-query';
import { GetSearchResponse } from '../../types/types';
import SearchMovie from './SearchMovie';

export const Search = () => {
  const [inputValue, setInputValue] = useState('');

  const fetchSearch = () => {
    return fetch(`${BASE_URL}/api/v2.1/films/search-by-keyword?keyword=${inputValue}&page=1`, {
      headers: {
        accept: 'application/json',
        'X-API-KEY': X_API_KEY,
      },
    }).then(res => res.json());
  };

  const { data, isLoading } = useQuery<GetSearchResponse>({
    queryKey: ['getSearch', inputValue],
    queryFn: fetchSearch,
    enabled: !!inputValue,
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setInputValue}
        value={inputValue}
        placeholder={'Enter movie title'}
        placeholderTextColor={'#a6ade3'}
      />
      {isLoading && inputValue ? (
        <ActivityIndicator />
      ) : data?.films.length ? (
        <SearchMovie films={data.films} />
      ) : inputValue ? (
        <Text style={styles.message}>Movies not found</Text>
      ) : null}
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
  input: {
    borderWidth: 1,
    borderRadius: 8,
    height: 40,
    paddingHorizontal: 8,
    marginBottom: 4,
    borderColor: '#a6ade3',
    color: '#a6ade3',
  },
  message: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
