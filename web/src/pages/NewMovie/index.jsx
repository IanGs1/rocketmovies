import { FiArrowLeft } from 'react-icons/fi';

import { Container, Content, Guide, Form, InputsWrapper, Markers, Tags, ButtonsWrapper, DeleteButton, CreateButton } from './styles';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { Marker } from '../../components/Marker';

export function NewMovie() {
    return (
        <Container>
            <Header />
            
            <Content>
                <Guide>
                    <a href="">
                        <FiArrowLeft />
                        Voltar
                    </a>

                    <h1>Novo filme</h1>
                </Guide>

                <Form>
                    <InputsWrapper>
                        <Input title="Título"/>
                        <Input title="Sua nota (de 0 a 5)" type="number"/>
                    </InputsWrapper>

                    <TextArea resize="none" placeholder="Observações"/>

                    <Markers>
                        <h2>Marcadores</h2>

                        <Tags>
                            <Marker title="React"/>
                            <Marker isNew placeholder="Novo marcador"/>
                        </Tags>
                    </Markers>

                    <ButtonsWrapper>
                        <DeleteButton>Excluir filme</DeleteButton>
                        <CreateButton>Salvar alterações</CreateButton>
                    </ButtonsWrapper>
                </Form>
            </Content>
        </Container>
    )
}