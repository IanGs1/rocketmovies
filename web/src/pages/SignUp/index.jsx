import { Container, Main, Background, TextWrapper, Form, InputWrapper, Button } from './styles';

import { Link, useNavigate } from 'react-router-dom';

import { useState } from 'react';
import { api } from '../../services/api';

import { Input } from '../../components/Input';
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';

export function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    function handleSubmit() {
        api.post('/users', { name, email, password })
        .then(() => {
            alert('Signed up successfully!');
            navigate('/');
        })
        .catch(error => {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert('An error occurred while signing up! Please try again.');
            }
        });
    }

    return (
        <Container>
            <Main>
                <TextWrapper>
                    <h1>RocketMovies</h1>
                    <p>Aplicação para acompanhar tudo que assistir.</p>
                </TextWrapper>

                <Form onSubmit={e => e.preventDefault()}>
                    <h2>Crie sua conta</h2>

                    <InputWrapper>
                        <Input
                        type='text' 
                        icon={FiUser} 
                        title={'Nome'}
                        onChange={event => setName(event.target.value)}
                        />
                        
                        <Input 
                        icon={FiMail} 
                        type='email' 
                        title={'E-mail'}
                        onChange={event => setEmail(event.target.value)}
                        />
                        
                        <Input 
                        icon={FiLock} 
                        type='password' 
                        title={'Senha'}
                        onChange={event => setPassword(event.target.value)}
                        />
                    </InputWrapper>

                    <Button onClick={handleSubmit}>
                        Cadastrar
                    </Button>
                </Form>

                <Link to='/'>
                    <FiArrowLeft size={16}/> 
                    Voltar para o login
                </Link>
            </Main>

            <Background />
        </Container>
    )
}