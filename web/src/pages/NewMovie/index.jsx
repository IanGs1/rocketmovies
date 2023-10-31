
import { FiArrowLeft } from 'react-icons/fi';

import { Container, Content, Guide, Form, InputsWrapper, Markers, Tags, ButtonsWrapper, DeleteButton, CreateButton } from './styles';

import { Link } from 'react-router-dom';

import { useState } from 'react';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { Marker } from '../../components/Marker';

export function NewMovie() {
    const [movieName, setMovieName] = useState('');
    const [movieRating, setMovieRating] = useState(0);
    const [movieDescription, setMovieDescription] = useState('');

    const [newTag, setNewTag] = useState('');
    const [tags, setTags] = useState([]);

    const navigate = useNavigate();

    function handleAddTag() {
        setTags(prevState => [...prevState, newTag]);
        setNewTag('');
    }
 
    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter(tag => tag !== deleted));
    }

    async function handleAddNewMovie() {
        try {
            await api.post('/movies', {
                title: movieName,
                description: movieDescription,
                rating: movieRating,
                tags,
            })

            alert('Movie created successfully!');
            navigate('/');
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert('Was not possible to create the movie!');
            }
        }
    }

    return (
        <Container>
            <Header />
            
            <Content>
                <Guide>
                    <Link to='/'>
                        <FiArrowLeft />
                        Voltar
                    </Link>

                    <h1>Novo filme</h1>
                </Guide>

                <Form onSubmit={e => e.preventDefault()}>
                    <InputsWrapper>
                        <Input 
                        title="Título"
                        onChange={e => setMovieName(e.target.value)}
                        />
                        <Input 
                        title="Sua nota (de 0 a 5)" 
                        type="number"
                        onChange={e => setMovieRating(e.target.value)}
                        />
                    </InputsWrapper>

                    <TextArea  
                    placeholder="Observações"
                    onChange={e => setMovieDescription(e.target.value)}
                    />

                    <Markers>
                        <h2>Marcadores</h2>

                        <Tags>
                            {
                                tags.map((tag, index) => (
                                    <Marker 
                                    key={String(index)}
                                    value={tag}
                                    onClick={() => handleRemoveTag(tag)}
                                    onChange={() => {}}
                                    />
                                ))
                            }

                            <Marker 
                            isNew 
                            placeholder="Novo marcador"
                            value={newTag}
                            onChange={e => setNewTag(e.target.value)}
                            onClick={handleAddTag}
                            />
                        </Tags>
                    </Markers>

                    <ButtonsWrapper>
                        <DeleteButton>Excluir filme</DeleteButton>
                        <CreateButton onClick={handleAddNewMovie}>Salvar alterações</CreateButton>
                    </ButtonsWrapper>
                </Form>
            </Content>
        </Container>
    )
}