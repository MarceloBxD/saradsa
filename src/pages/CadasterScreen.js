import React, {useState, useContext, useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  FormControl,
  Image,
  Input,
  Text,
  Button,
  Center,
  Box,
  VStack,
  ScrollView,
  useToast,
} from 'native-base';
import {AuthContext} from '../contexts/auth';

import FormController from '../components/FormController';

export default function ScheduleScreen() {
  const toast = useToast();
  const navigation = useNavigation();

  const {users, setUsers} = useContext(AuthContext);

  const [formData, setData] = useState({
    name: 'Simone Alexandre',
    email: 'simone.alexandre77@gmail.com',
    password: '051528',
    confirmPassword: '051528',
  });

  const handleSignUp = () => {
    if (
      formData.name === '' ||
      formData.email === '' ||
      formData.password === '' ||
      formData.confirmPassword === ''
    ) {
      alert('Preencha todos os campos');
      return;
    } else if (formData.password !== formData.confirmPassword) {
      alert('Senhas não conferem');
    } else {
      toast.show({
        render: () => (
          <Box
            p="3"
            bg="green.500"
            rounded="md"
            _text={{
              color: 'white',
              fontWeight: 'bold',
            }}>
            Cadastro realizado com sucesso!
          </Box>
        ),
      });
      // console.log(JSON.stringify(formData, null, 2));
      setUsers([...users, formData]);
      navigation.navigate('Login');
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          size="sm"
          mr="3"
          onPress={() => navigation.navigate('Login')}
          colorScheme="purple"
          variant="subtle">
          Login
        </Button>
      ),
    });
  }, []);

  return (
    <ScrollView>
      <Center>
        <VStack my="3" width="90%" mx="3" maxW="300px">
          <FormController
            value={formData.name}
            onChangeText={value => setData({...formData, name: value})}
            name="name"
            label="Nome"
            helperText="Name should contain at least 3 characters."
            placeholder="Sara dos Santos Almeida"
          />
          <FormController
            value={formData.email}
            onChangeText={value => setData({...formData, name: value})}
            name="email"
            label="Email"
            helperText="Email should contain especial characters."
            placeholder="name@email.com"
          />
          <FormController
            value={formData.password}
            onChangeText={value => setData({...formData, name: value})}
            name="password"
            label="Password"
            helperText="Password should contain at least one especial characters."
            placeholder="***********"
          />
          <FormController
            value={formData.confirmPassword}
            onChangeText={value => setData({...formData, name: value})}
            name="confirmPassword"
            label="Confirm Password"
            helperText="Password should contain at least one especial characters."
            placeholder="***********"
          />
          <Button
            onPress={() => handleSignUp()}
            mt="3"
            colorScheme="purple"
            variant="subtle">
            Finalizar cadastro
          </Button>
        </VStack>
        <Image
          alt="Alternative Image"
          size={20}
          mt="5"
          source={require('../assets/tooth.png')}
        />
        <Text nOfLines={2} maxW="200">
          Aproveita o desconto.
        </Text>
        <Text fontWeight="bold" nOfLines={2} maxW="200">
          Agende com a Dra Sara.
        </Text>
      </Center>
    </ScrollView>
  );
}
