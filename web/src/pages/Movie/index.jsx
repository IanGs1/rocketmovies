import { FiArrowLeft, FiClock } from 'react-icons/fi';

import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';

import { Container, Content, Search, Title, Infos, Profile, Time, Tags, Summary, } from './styles';

import { Header } from '../../components/Header';
import { Stars } from '../../components/Stars';
import { Tag } from '../../components/Tag';

export function Movie() {
    const [movie, setMovie] = useState(null);

    const [hour, setHour] = useState('');
    const [minute, setMinute] = useState('');

    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    const { user } = useAuth();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    const params = useParams();
    
    function handleFormatCreatedAt() {
        const dateAndTime = movie.movie.created_at && movie.movie.created_at.split(" ");

        const dateArray = dateAndTime[0];
        const timeArray = dateAndTime[1];

        const date = dateArray.split("-");
        const time = timeArray.split(":");

        setHour(time[0]);
        setMinute(time[1]);

        setDay(date[2]);
        setMonth(date[1]);
        setYear(date[0].slice(-2));
    }

    useEffect(() => {
        async function handleLoadMovieInfos() {
            const response = await api.get(`/movies/${params.movie_id}`);

            setMovie(response.data);
        }

        handleLoadMovieInfos();
        movie && handleFormatCreatedAt();
    })


    return (
        <Container>
            <Header />

            <Content>
                <Search>
                    <Link to='/'>
                        <FiArrowLeft />
                        Voltar
                    </Link>

                    <Title>
                        {
                            movie && 
                            <h1>{movie.movie.title}</h1>
                        }

                        {
                            movie && 
                            <Stars rating={movie.movie.rating} size={20}/>
                        }
                    </Title>

                    <Infos>
                        <Profile>
                            <img src={avatarUrl} alt="Foto de perfil do usuário" />

                            <p>Por {user.name}</p>
                        </Profile>

                        <Time>
                            <FiClock size={16} stroke='#FF859B'/>

                            <p>{day}/{month}/{year} às {hour}:{minute}</p>
                        </Time>
                    </Infos>
                </Search>

                <Tags>
                        {
                            movie && movie.tags &&
                            movie.tags.map(tag => (
                                <Tag key={tag.id}>{tag.name}</Tag>
                            ))
                        }
                </Tags>

                <Summary>
                        {
                            movie &&
                            movie.movie.description
                        }
                </Summary>
            </Content>
        </Container>
    )
}