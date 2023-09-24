import styled from "styled-components";

import backgroundImg from '../../assets/backgroundImg.png';

export const Container = styled.div`
    height: 100vh;

    display: grid;
    grid-template-columns: 1fr 1.5fr;
`;

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 4.5rem;

    padding: 0 13.4rem
`;

export const TextWrapper = styled.div`
    > h1 {
        color: ${({ theme }) => theme.signIn.title};
        font-family: 'Roboto Slab';
        font-size: 4.8rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    > p {
        color: ${({ theme }) => theme.signIn.subtitle};
        font-family: 'Roboto Slab';
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`;

export const Form = styled.form`
    width: 34rem;

    > h2 {
        color: ${({ theme }) => theme.signIn.formTitle};
        font-family: 'Roboto Slab';
        font-size: 2.4rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;

        margin-bottom: 4.8rem;
    }
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: .8rem;

    margin-bottom: 2.4rem;
`

export const Button = styled.button`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.signIn.buttonBg};
    color: ${({ theme }) => theme.signIn.buttonText};

    font-family: 'Roboto Slab';
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    border: none;
    border-radius: 10px;
    padding: 1.6rem;

`;

export const Link = styled.a`
    width: 34rem;

    color: ${({ theme }) => theme.signIn.textLink};
    font-family: 'Roboto Slab';
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    text-decoration: none;
    
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .8rem;
`

export const Background = styled.div`
    background: url(${backgroundImg}) no-repeat center;
    background-size: cover;

    filter: opacity(.3);
`;