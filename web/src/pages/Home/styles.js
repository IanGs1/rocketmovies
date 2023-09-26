import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;

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

    padding: 5.4rem 12.3rem;

    overflow-y: auto;
    grid-area: content;
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    > h1 {
        color: ${({ theme }) => theme.home.title};
        font-family: 'Roboto Slab';
        font-size: 3.2rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    > button {
        max-height: 4.8rem;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: .8rem;

        background: ${({ theme }) => theme.home.buttonBg};
        color: ${({ theme }) => theme.home.buttonText};

        font-feature-settings: 'liga' off;
        font-family: 'Roboto Slab';
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;

        border: none;
        border-radius: 8px;
        padding: 3.2rem;
    }
`;