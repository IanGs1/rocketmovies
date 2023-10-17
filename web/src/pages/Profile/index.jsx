import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from 'react-icons/fi';

import { Link } from 'react-router-dom';

import { Container, ProfileForm, InputWrapper, Form, FormWrapper } from './styles';

import { useAuth } from '../../hooks/auth';
import { useState } from 'react';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function Profile() {
    const { user, updateProfile } = useAuth();

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')

    async function handleUpdateProfile() {
        const user = {
            name,
            email,
            password: oldPassword,
            new_password: newPassword
        }

        await updateProfile({ user });
    }

    return (
        <Container>
            <Link to='/'>
                <FiArrowLeft />
                Voltar    
            </Link>

            <ProfileForm>
                <img src="https://github.com/iangs1.png" alt="Foto de perfil do usuário" />
                
                <InputWrapper>
                    <label htmlFor="photoInput">
                        <FiCamera size={20} stroke='#312E38'/>
                    </label>

                    <input type="file" id='photoInput'/>
                </InputWrapper>
            </ProfileForm>

            <Form onSubmit={e => e.preventDefault()}>
                <FormWrapper>
                    <Input 
                    title={user.name} 
                    icon={FiUser} 
                    className="placeholderSpecial"
                    onChange={e => setName(e.target.value)}
                    />

                    <Input 
                    title={user.email} 
                    icon={FiMail} 
                    className="placeholderSpecial"
                    onChange={e => setEmail(e.target.value)}
                    />
                </FormWrapper>
                
                <FormWrapper>
                    <Input 
                    title="Senha atual" 
                    icon={FiLock}
                    type='password'
                    onChange={e => setOldPassword(e.target.value)}
                    />
    
                    <Input 
                    title="Nova senha" 
                    icon={FiLock}
                    type='password'
                    onChange={e => setNewPassword(e.target.value)}
                    />
                </FormWrapper>

                <Button 
                isUnactive={!name || !email ? true : false} 
                type="submit"
                onClick={handleUpdateProfile}
                >
                    Salvar
                </Button>
            </Form>
        </Container>
    )
}