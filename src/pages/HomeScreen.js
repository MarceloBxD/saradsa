import React from 'react';
import {Image, Flex, Button, Text} from 'native-base';
import {useNavigation} from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <Flex
      flex="1"
      gap="5"
      bgColor="#000"
      justifyContent="center"
      alignItems="center">
      <Text fontWeight="bold" fontSize="17" color="#fff">
        Bem vindo(a) ao atendimento DsaOdonto!
      </Text>
      <Image
        size={150}
        alt="Brushing teeths image"
        source={require('../assets/escovando.png')}
      />

      <Button
        size="md"
        w="100%"
        mt="2"
        colorScheme="fuchsia"
        bottom="5"
        position="absolute"
        variant="subtle"
        onPress={() => navigation.navigate('Cadaster')}>
        Cadastre-se
      </Button>
    </Flex>
  );
}
