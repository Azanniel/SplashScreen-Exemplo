import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef} from 'react';
import {Animated} from 'react-native';

import Logo from '../../assets/Vampiro.png';

import {Container, LogoArea, LogoText} from './styles';

const SplashScreen = () => {
  const navigation = useNavigation();
  const logoAnime = useRef(new Animated.Value(0)).current;
  const logoText = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(logoAnime, {
        toValue: 1,
        tension: 10,
        friction: 2,
        useNativeDriver: false,
      }),
      Animated.timing(logoText, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: false,
      }),
    ]).start();

    setTimeout(() => {
      navigation.reset({
        index: 1,
        routes: [{name: 'Home'}],
      });
    }, 2000);
  }, [logoAnime, logoText, navigation]);

  return (
    <Container>
      <Animated.View
        style={{
          opacity: logoAnime,
          top: logoAnime.interpolate({
            inputRange: [0, 1],
            outputRange: [80, 0],
          }),
        }}>
        <LogoArea resizeMode="contain" source={Logo} />
      </Animated.View>
      <Animated.View
        style={{
          opacity: logoText,
        }}>
        <LogoText>Exemplo de SplashScreen</LogoText>
      </Animated.View>
    </Container>
  );
};

export default SplashScreen;
