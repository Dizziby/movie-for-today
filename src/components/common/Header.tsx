import React, {useState} from 'react';
import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MyAppText from './MyAppText';

const Header = ({title}: {title: string}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.modal}>
          <Text style={styles.messageModal}>Feature not available yet</Text>
          <Text
            style={styles.buttonModal}
            onPress={() => setModalVisible(!modalVisible)}>
            Close
          </Text>
        </View>
      </Modal>

      <Text style={styles.title}>{title}</Text>
      <View style={styles.icons}>
        <Pressable onPress={() => setModalVisible(!modalVisible)}>
          <Ionicons name={'heart-outline'} size={25} color={'#a6ade3'} />
        </Pressable>
        <Pressable onPress={() => setModalVisible(!modalVisible)}>
          <Ionicons
            name={'chatbubble-ellipses-outline'}
            size={25}
            color={'#a6ade3'}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    backgroundColor: '#111111',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#646d79',
  },
  icons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
  },
  title: {
    color: '#a6ade3',
    fontSize: 16,
  },
  modal: {
    display: 'flex',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#20303e',
    borderRadius: 12,
    width: 200,
    zIndex: 10,
    top: '50%',
    left: '50%',
    transform: [{translateX: -100}, {translateY: -50}],
  },
  messageModal: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    color: '#646d79',
  },
  buttonModal: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderTopWidth: 0.5,
    borderColor: '#646d79',
    width: '100%',
    textAlign: 'center',
    color: '#646d79',
  },
});
