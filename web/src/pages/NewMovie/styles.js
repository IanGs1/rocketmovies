import styled from 'styled-components';

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

    padding: 4rem 12.3rem 8.5rem;

    grid-area: content;
`;

export const Guide = styled.div`
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

    > h1 {
        color: ${({ theme }) => theme.newMovie.title};
        font-family: 'Roboto Slab';
        font-size: 3.6rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 4rem;
`;

export const InputsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 4rem;

    > input {
        font-family: 'Roboto';

        &::placeholder {
            font-family: 'Roboto';
        }
    }
`;

export const Markers = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    > h2 {
        color: ${({ theme }) => theme.newMovie.markersTitle};
        font-family: 'Roboto Slab';
        font-size: 2rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`;

export const Tags = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2.4rem;

    background: ${({ theme }) => theme.newMovie.markersBg};

    border: none;
    border-radius: 8px;
    padding: 1.6rem;
`;

export const ButtonsWrapper = styled.div`
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4rem;
`

export const DeleteButton = styled.button`
    flex: 1;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.newMovie.deleteButtonBg};
    color: ${({ theme }) => theme.newMovie.deleteButtonText};

    font-family: 'Roboto Slab';
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    border: none;
    border-radius: 10px;
    padding: 1.6rem 25rem;
`;

export const CreateButton = styled.button`
    flex: 1;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.newMovie.createButtonBg};
    color: ${({ theme }) => theme.newMovie.createButtonText};

    font-family: 'Roboto Slab';
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    border: none;
    border-radius: 10px;
    padding: 1.6rem 25rem;
`;