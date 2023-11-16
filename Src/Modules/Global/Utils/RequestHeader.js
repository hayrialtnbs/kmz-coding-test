import AsyncStorage from '@react-native-async-storage/async-storage';

export function emptyHeader() {
  return {
    'GUID': '24BE-DB0E-D75E-4060',
    'Content-Type': 'application/json',
  };
}
export async function HeaderWithoutORG() {
  let token = await AsyncStorage.getItem('@token');
  return {
    ...emptyHeader(),
    Authorization: 'Bearer ' + token,
  };
}