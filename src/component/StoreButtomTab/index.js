import React, { useEffect } from 'react';
import { Image, View, TouchableOpacity, Text } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import Lang from '../../component/language';

const BottomTab = (props) => {
  const navigation = useNavigation();

  const renderImageOnline = () => {

    return (
      <View style={styles.container}>
        <Image
          source={require('../../assets/Images/orders.png')}
          style={styles.bottomTab}
        />
        <Text style={styles.text}>{Lang.Home}</Text>
      </View>
    );

  };
  const renderImageNotification = () => {

    return (
      <View style={styles.container}>
        <Image
          source={require('../../assets/Images/analytic.png')}
          style={styles.bottomTab}
        />
        <Text style={styles.text}>{Lang.AboutApp}</Text>
      </View>
    );

  };
  const renderImageReport = () => {

    return (
      <View style={styles.container}>
        <Image
          source={require('../../assets/Images/histroy.png')}
          style={styles.bottomTab}
        />
        <Text style={styles.text}>{Lang.HowToPlay}</Text>
      </View>
    );

  };
  const renderImageSetting = () => {

    return (
      <View style={styles.container}>
        <Image
          source={require('../../assets/Images/share.png')}
          style={styles.bottomTab}
        />
        <Text style={styles.text}>{Lang.Login}</Text>
      </View>
    );

  };

  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.bottomTabContainer}
        onPress={() => {
          navigation.navigate('Home');
        }}>

        {renderImageOnline()}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.bottomTabContainer}
        onPress={() => {
           navigation.navigate('About');
        }}>
        {renderImageNotification()}
      </TouchableOpacity>



      <TouchableOpacity
        style={styles.bottomTabContainer}
        onPress={() => {
          navigation.navigate('Quiz');
        }}>
        {renderImageReport()}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.bottomTabContainer}
        onPress={() => {
          navigation.navigate('Login');
        }}>
        {renderImageSetting()}
      </TouchableOpacity>
    </View>
  );
};

export default BottomTab;