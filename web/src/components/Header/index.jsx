import { Container, Brand, Profile, TextWrapper, ProfilePicture } from './styles';

import { useAuth } from '../../hooks/auth';

import { Input } from '../Input';

export function Header() {
    const { signOut } = useAuth();

    function handleSignOut() {
        signOut();
    }

    return (
        <Container>
            <Brand>RocketMovies</Brand>

            <Input title="Pesquisar pelo título"/>

            <Profile>
                <TextWrapper>
                    <p>Ian Goldfeld Santos</p>
                    <span onClick={handleSignOut}>sair</span>
                </TextWrapper>

                <ProfilePicture to='/profile'>
                    <img src="https://github.com/iangs1.png" alt="Imagem de perfil do usuário" />
                </ProfilePicture>
            </Profile>
        </Container>
    )
}