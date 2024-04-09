import React, { useEffect, useMemo, useRef, useState } from 'react';
import { BASE_URL } from '../../constants/constants';
import { useQuery } from '@tanstack/react-query';
import { GetTrailerMovieResponse } from '../../types/types';
import Dropdown from './Dropdown';
import { ActivityIndicator, Alert, AppState, StyleSheet, Text, View } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

const Trailer = ({ id }: { id: number }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const togglePlaying = () => {
    setIsPlaying(prev => !prev);
  };

  const onStateChange = (state: string) => {
    if (state === 'ended') {
      setIsPlaying(false);

      Alert.alert('video has finished playing!');
    }
  };

  const fetchTrailerMovie = () => {
    return fetch(`${BASE_URL}/api/v2.2/films/${id}/videos`, {
      headers: {
        accept: 'application/json',
        'X-API-KEY': 'e8feb6b3-532c-4bc2-837d-8f87b17be0fa',
      },
    }).then(res => res.json());
  };

  const { data, isLoading } = useQuery<GetTrailerMovieResponse>(
    ['getTrailerMovie', id],
    fetchTrailerMovie,
  );

  // TODO not using
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);
  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
        console.log('App has come to the foreground!');
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
      console.log('AppState', appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  const idVideo = useMemo(() => {
    let urlYoutube: string = '';
    data?.items.forEach(el => {
      if (el.site === 'YOUTUBE' && el.name.includes('Трейлер') && !urlYoutube) {
        urlYoutube = el.url;
      }
    });
    const tempArray = urlYoutube?.split('/');
    return tempArray[tempArray.length - 1];
  }, [data]);

  return (
    <Dropdown nameButton={'Trailer'}>
      {isLoading ? (
        <ActivityIndicator />
      ) : data?.items?.length && idVideo ? (
        <YoutubePlayer height={300} play={false} videoId={idVideo} onChangeState={onStateChange} />
      ) : (
        <Text style={styles.message}>No videos</Text>
      )}
    </Dropdown>
  );
};

export default Trailer;

const styles = StyleSheet.create({
  message: {
    textAlign: 'center',
    color: '#fff',
    marginBottom: 8,
  },
});
