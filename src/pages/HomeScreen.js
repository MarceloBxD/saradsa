import React from 'react';
import {Image, Flex, Button, Text} from 'native-base';
import {useNavigation} from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <Flex flex="1" justifyContent="center" alignItems="center">
      <Image
        size={150}
        alt="Brushing teeths image"
        source={require('../assets/escovando.png')}
      />
      <Text fontSize="16">Você já possui conta?</Text>
      <Button
        onPress={() => navigation.navigate('Login')}
        size="md"
        colorScheme="fuchsia"
        w="150"
        mt="2"
        variant="subtle">
        login
      </Button>
      <Button
        size="md"
        w="150"
        mt="2"
        colorScheme="info"
        bottom="5"
        position="absolute"
        variant="subtle"
        onPress={() => navigation.navigate('Cadaster')}>
        Cadastre-se
      </Button>
    </Flex>
  );
}
