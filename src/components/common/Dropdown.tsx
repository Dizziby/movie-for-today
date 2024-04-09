import React, {ReactNode, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Dropdown = ({
  nameButton,
  children,
}: {
  nameButton: string;
  children: ReactNode;
}) => {
  const [show, setShow] = useState(false);

  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setShow(prevState => !prevState)}>
        <Text style={styles.buttonText}>{nameButton}</Text>
        {show ? (
          <Ionicons name={'caret-up-outline'} size={15} color={'#fff'} />
        ) : (
          <Ionicons name={'caret-down-outline'} size={15} color={'#fff'} />
        )}
      </TouchableOpacity>
      {show && children}
    </View>
  );
};

export default Dropdown;

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
