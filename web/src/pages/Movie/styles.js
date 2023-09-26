import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-rows: 116px auto;
    grid-template-areas: 
    "header"
    "content"
    ;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;
    padding: 4rem 12.3rem;

    grid-area: content;
`;

export const Search = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2.4rem;

    > a {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: .8rem;

        color: ${({ theme }) => theme.newMovie.back};
        font-family: 'Roboto Slab';
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-decoration: none;
    }
`;

export const Title = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.9rem;
    
    > h1 {
        color: ${({ theme }) => theme.movie.title};
        font-family: 'Roboto Slab';
        font-size: 3.6rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
`;

export const Infos = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: .8rem;
`;

export const Profile = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: .8rem;

    > img {
        width: 16px;
        height: 16px;

        border: 1px solid #3E3B47;
        border-radius: 50%;
    }

    > p {
        color: '#F4EDE8';
        text-align: justify;
        font-family: 'Roboto';
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`;

export const Time = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: .8rem;

    > svg {
        color: '#FF859B';
    }

    > p {
        color: '#F4EDE8';
        text-align: justify;
        font-family: 'Roboto';
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`;

export const Tags = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: .8rem;

    > span {
        background-color: '#282124';
    }
`;

export const Summary = styled.div`
    color: #F4EDE8;
    text-align: justify;
    font-family: 'Roboto Slab';
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;