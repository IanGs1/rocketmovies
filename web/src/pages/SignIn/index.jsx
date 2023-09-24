import { Container, Main, Background, TextWrapper, Form, InputWrapper, Button, Link } from './styles';

import { Input } from '../../components/Input';
import { FiMail, FiLock } from 'react-icons/fi';

export function SignIn() {
    return (
        <Container>
            <Main>
                <TextWrapper>
                    <h1>RocketMovies</h1>
                    <p>Aplicação para acompanhar tudo que assistir.</p>
                </TextWrapper>

                <Form>
                    <h2>Faça seu login</h2>

                    <InputWrapper>
                        <Input icon={FiMail} title={'E-mail'}/>
                        <Input icon={FiLock} title={'Senha'}/>
                    </InputWrapper>

                    <Button>
                        Entrar
                    </Button>
                </Form>

                <Link>Criar conta</Link>
            </Main>

            <Background />
        </Container>
    )
}