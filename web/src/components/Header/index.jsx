import { Container, Brand, Profile, TextWrapper, ProfilePicture } from './styles';

import { api } from '../../services/api';
import avatarPlaceholder from '../../assets/avatarPlaceholder.svg';

import { useAuth } from '../../hooks/auth';

import { Input } from '../Input';

export function Header({ ...rest }) {
    const { signOut, user } = useAuth();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    function handleSignOut() {
        signOut();
    }

    return (
        <Container>
            <Brand>RocketMovies</Brand>

            <Input title="Pesquisar pelo título" {...rest}/>

            <Profile>
                <TextWrapper>
                    <p>{user.name}</p>
                    <span onClick={handleSignOut}>sair</span>
                </TextWrapper>

                <ProfilePicture to='/profile'>
                    <img src={avatarUrl} alt={`Imagem de perfil de ${user.name}`} />
                </ProfilePicture>
            </Profile>
        </Container>
    )
}