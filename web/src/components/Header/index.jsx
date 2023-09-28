import { Container, Brand, Profile, TextWrapper } from './styles';

import { Input } from '../Input';

export function Header() {
    return (
        <Container>
            <Brand>RocketMovies</Brand>

            <Input title="Pesquisar pelo título"/>

            <Profile to='/profile'>
                <TextWrapper>
                    <p>Ian Goldfeld Santos</p>
                    <span>sair</span>
                </TextWrapper>

                <img src="https://github.com/iangs1.png" alt="Foto de perfil" />
            </Profile>
        </Container>
    )
}