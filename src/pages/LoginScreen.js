import React, {useState, useContext, useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  FormControl,
  Image,
  Flex,
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
  const {users} = useContext(AuthContext);

  const [formData, setData] = useState({
    email: 'simone.alexandre77@gmail.com',
    password: '051528',
  });

  const handleSignIn = () => {
    if (formData.email === '' || formData.password === '') {
      alert('Preencha todos os campos');
      return;
    } else {
      const user = users.find(user => user.email === formData.email);
      if (user) {
        if (user.password === formData.password) {
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
                Login realizado com sucesso!
              </Box>
            ),
          });
          navigation.navigate('Schedule');
        } else {
          alert('Senha incorreta');
        }
      } else {
        toast.show({
          render: () => (
            <Box
              p="3"
              bg="red.500"
              rounded="md"
              _text={{
                color: 'white',
                fontWeight: 'bold',
              }}>
              Não temos um usuário com esse email cadastrado!
            </Box>
          ),
        });
      }
    }
  };

  return (
    <ScrollView>
      <Center>
        <VStack my="3" width="90%" mx="3" maxW="300px">
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
          <Button
            onPress={() => handleSignIn()}
            mt="3"
            colorScheme="purple"
            variant="subtle">
            Login
          </Button>
        </VStack>
      </Center>
    </ScrollView>
  );
}
