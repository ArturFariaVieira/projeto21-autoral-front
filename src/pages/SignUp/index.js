import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.png'

import AuthLayout from '../../layouts/Auth';

import Input from '../../components/Form/Input';
import Button from '../../components/Form/Button';
import { Row, Title, Label } from '../../components/Auth';
import Link from '../../components/Link';


import useSignUp from '../../hooks/api/useSignUp';

export function SignUp() {
  const [name, setName] = useState('') 
  const [telNumber, setTelNumber] = useState('') 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { loadingSignUp, signUp } = useSignUp();

  const navigate = useNavigate();
  

  async function submit(event) {
    event.preventDefault();

    if (password !== confirmPassword) {
      toast('As senhas devem ser iguais!');
    } else {
      try {
        await signUp(name, telNumber, email, password);
        toast('Cadastro criado com sucesso! Por favor, faça login.');
        navigate('/sign-in');
      } catch (error) {
        toast('Não foi possível fazer o cadastro!');
      }
    }
  }

  return (
    <AuthLayout background={Logo}>
      <Row>
        <img src={Logo} alt="Event Logo" width="60px" />
        <Title>Salão Carlos</Title>
      </Row>
      <Row>
        <Label>Criar Conta</Label>
        <form onSubmit={submit}>
          <Input label="Nome" type="text" fullWidth value={name} onChange={e => setName(e.target.value)} />
          <Input label="Telefone" type="text" fullWidth value={telNumber} onChange={e => setTelNumber(e.target.value)} />
          <Input label="E-mail" type="text" fullWidth value={email} onChange={e => setEmail(e.target.value)} />
          <Input label="Senha" type="password" fullWidth value={password} onChange={e => setPassword(e.target.value)} />
          <Input label="Repita sua senha" type="password" fullWidth value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
          <Button type="submit" color="primary" fullWidth disabled={loadingSignUp}>Inscrever</Button>
        </form>
      </Row>
      <Row>
        <Link to="/sign-in">Já tem conta? Faça login</Link>
      </Row>
    </AuthLayout>
  );
}
