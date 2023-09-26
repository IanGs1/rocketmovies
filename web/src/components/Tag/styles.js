import styled from "styled-components";

export const Container = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    
    background: ${({ theme }) => theme.home.tagBg};
    color: ${({ theme }) => theme.home.tagText};

    font-family: 'Roboto';
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    border: none;
    border-radius: 8px;
    padding: .5rem 1.6rem;
`;