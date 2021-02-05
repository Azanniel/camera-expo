import React from 'react';
import {
  View, Image, TouchableOpacity, Text, ToastAndroid,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';
import { useNavigation, useRoute } from '@react-navigation/native';

import styles from './styles';

interface PictureCapturedRouteParams {
  picture: string;
}

const PictureCaptured = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const { picture } = route.params as PictureCapturedRouteParams;

  const savePicture = async () => {
    const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
    if (status === 'granted') {
      await MediaLibrary.saveToLibraryAsync(picture);
      ToastAndroid.show('Guardado com sucesso', ToastAndroid.SHORT);
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.picture}
        source={{ uri: picture }}
      />
      <View style={styles.containerActions}>
        <TouchableOpacity
          style={styles.buttonSave}
          onPress={savePicture}
        >
          <Text style={styles.buttonSaveText}>Guardar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonCancel}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="close-sharp" size={32} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PictureCaptured;
