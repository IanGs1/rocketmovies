import styled from "styled-components";

export const Container = styled.textarea`
    height: 27.4rem;

    background: ${({ theme }) => theme.newMovie.textAreaBg};

    color: ${({ theme }) => theme.newMovie.textAreaText};
    font-family: 'Roboto';
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    border: none;
    border-radius: 10px;
    padding: 1.9rem 1.6rem;

    resize: none;

    &::placeholder {
        color: ${({ theme }) => theme.newMovie.textAreaPlaceholder};
        font-family: 'Roboto';
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`;