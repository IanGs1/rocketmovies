import styled from "styled-components";

export const Container = styled.button`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #FF859B;

    color: #312E38;
    font-family: 'Roboto Slab';
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    border: none;
    border-radius: 10px;
    padding: 1.4rem 14rem;

    &.unactive {
        filter: opacity(.5);
    }
`;