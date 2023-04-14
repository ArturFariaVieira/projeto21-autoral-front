import api from './api';

export async function signUp(name, telNumber, email, password ) {
  console.log(name)
  const response = await api.post('/sign-up', { name, telNumber, email, password });
  return response.data;
}
//
