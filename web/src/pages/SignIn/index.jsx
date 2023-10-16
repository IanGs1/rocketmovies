import { Container, Main, Background, TextWrapper, Form, InputWrapper, Button } from './styles';

import { Link } from 'react-router-dom';

import { useState } from 'react';
import { useAuth } from '../../hooks/auth';

import { Input } from '../../components/Input';
import { FiMail, FiLock } from 'react-icons/fi';

export function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const { signIn } = useAuth();

    function handleSignIn() {
        signIn({ email, password })
    }

    return (
        <Container>
            <Main>
                <TextWrapper>
                    <h1>RocketMovies</h1>
                    <p>Aplicação para acompanhar tudo que assistir.</p>
                </TextWrapper>

                <Form onSubmit={e => e.preventDefault()}>
                    <h2>Faça seu login</h2>

                    <InputWrapper>
                        <Input icon={FiMail} type='email' title={'E-mail'} onChange={e => setEmail(e.target.value)}/>
                        <Input icon={FiLock} type='password' title={'Senha'} onChange={e => setPassword(e.target.value)}/>
                    </InputWrapper>

                    <Button onClick={handleSignIn}>
                        Entrar
                    </Button>
                </Form>

                <Link to='/register'>Criar conta</Link>
            </Main>

            <Background />
        </Container>
    )
}