import React, { useEffect, useRef, useState } from 'react';
import {
  Linking, Platform, Text, TouchableOpacity, View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { Camera } from 'expo-camera';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const TakePicture: React.FC = () => {
  const navigation = useNavigation();
  const camRef = useRef<Camera | null>();

  const [hasPermission, setHasPermission] = useState(false);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const requestPermissionCamera = async () => {
    const { status } = await Camera.requestPermissionsAsync();
    setHasPermission(status === 'granted');
  };

  useEffect(() => {
    requestPermissionCamera();
  }, []);

  if (hasPermission === false) {
    return (
      <View style={styles.containerWarining}>
        <Text style={styles.textWarning}>Precisamos de acesso à sua câmera</Text>
        <TouchableOpacity onPress={requestPermissionCamera} style={styles.buttonPermissions}>
          <Text style={styles.buttonTextPermission}>Conceder acesso</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const takePicture = async () => {
    if (camRef.current) {
      const { uri } = await camRef.current.takePictureAsync();
      navigation.navigate('PictureCaptured', { picture: uri });
    }
  };

  const openGallery = async () => {
    switch (Platform.OS) {
      case 'android':
        Linking.openURL('content://media/internal/images/media');
        break;
      case 'ios':
        Linking.openURL('photos-redirect://');
        break;
      default:
        break;
    }
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Camera
          style={styles.camera}
          ref={(cam) => { camRef.current = cam; }}
          ratio="16:9"
          type={type}
        >
          <View style={styles.borderToContainerActions}>
            <View style={styles.containerActions}>

              <TouchableOpacity
                onPress={openGallery}
              >
                <Ionicons name="albums-outline" size={30} color="#666" />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.borderTakePicture}
                onPress={takePicture}
              >
                <View style={styles.buttonTakePicture} />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setType(
                    type === Camera.Constants.Type.front
                      ? Camera.Constants.Type.back
                      : Camera.Constants.Type.front,
                  );
                }}
              >
                <Ionicons name="camera-reverse-outline" size={30} color="#666" />
              </TouchableOpacity>

            </View>
          </View>
        </Camera>
      </View>
    </>
  );
};

export default TakePicture;
