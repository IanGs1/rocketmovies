import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from 'react-icons/fi';

import { Container, Link, ProfileForm, InputWrapper, Form, FormWrapper } from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function Profile() {
    return (
        <Container>
            <Link>
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

            <Form>
                <FormWrapper>
                    <Input title="Ian Goldfeld Santos" icon={FiUser} className="placeholderSpecial"/>
                    <Input title="goldfeld35@gmail.com" icon={FiMail} className="placeholderSpecial"/>
                </FormWrapper>
                
                <FormWrapper>
                    <Input title="Senha atual" icon={FiLock}/>
                    <Input title="Nova senha" icon={FiLock}/>
                </FormWrapper>

                <Button isUnactive type="submit">
                    Salvar
                </Button>
            </Form>
        </Container>
    )
}