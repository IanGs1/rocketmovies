import { Container, Main, Background, TextWrapper, Form, InputWrapper, Button, Link } from './styles';

import { Input } from '../../components/Input';
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';

export function SignUp() {
    return (
        <Container>
            <Main>
                <TextWrapper>
                    <h1>RocketMovies</h1>
                    <p>Aplicação para acompanhar tudo que assistir.</p>
                </TextWrapper>

                <Form>
                    <h2>Crie sua conta</h2>

                    <InputWrapper>
                        <Input icon={FiUser} title={'Nome'}/>
                        <Input icon={FiMail} title={'E-mail'}/>
                        <Input icon={FiLock} title={'Senha'}/>
                    </InputWrapper>

                    <Button>
                        Cadastrar
                    </Button>
                </Form>

                <Link>
                    <FiArrowLeft size={16}/> 
                    Voltar para o login
                </Link>
            </Main>

            <Background />
        </Container>
    )
}