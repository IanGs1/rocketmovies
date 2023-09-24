import styled from "styled-components";

export const Container = styled.div`
    flex: 1;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.6rem;

    background-color: ${({ theme }) => theme.signIn.inputBg};

    border-radius: 10px;
    padding: 1.9rem 1.6rem;

    > input {
        width: 100%;

        background-color: ${({ theme }) => theme.signIn.inputBg};
        color: ${({ theme }) => theme.signIn.inputText};

        font-family: 'Roboto Slab', sans-serif;
        font-size: 1.6rem;

        border: none;

        &:focus {
            outline: none;
        }

        &::placeholder {
            color: ${({ theme }) => theme.signIn.placeholder};
            font-family: Roboto Slab;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }
    }

    > svg {
        color: ${({ theme }) => theme.signIn.inputPlaceholder}
    }
`;