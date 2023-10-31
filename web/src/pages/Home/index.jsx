import { FiPlus } from 'react-icons/fi';

import { Container, Content, TextWrapper, Button } from './styles';

import { useState, useEffect } from 'react';
import { api } from '../../services/api';

import { Header } from '../../components/Header';
import { Card } from '../../components/Card';

export function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function handleListMovies() {
            const response = await api.get('/movies');

            setMovies(response.data);
        }

        handleListMovies();
    }, []);


    return (
        <Container>
            <Header />

            <Content>
                <TextWrapper>
                    <h1>Meus filmes</h1>
                    
                    <Button to='/new'>
                        <FiPlus size={16}/>
                        Adicionar filme
                    </Button>
                </TextWrapper>

                {
                    movies.map((movie, index) => (
                        <Card key={index} title={movie.title} rating={movie.rating}>
                            {movie.description}
                        </Card>
                    ))
                }
            </Content>
        </Container>
    )
}