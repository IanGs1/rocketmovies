import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    background: ${({ theme }) => theme.home.movieBg};

    border-radius: 16px;
    padding: 3.2rem;

    > h1 {
        color: ${({ theme }) => theme.home.movieTitle};
        font-family: 'Roboto Slab';
        font-size: 2.4rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
`;

export const Description = styled.p`
    color: ${({ theme }) => theme.home.movieDescription};
    font-family: Roboto;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    white-space: pre-wrap;
`;

export const Tags = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: .8rem;
`