import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.6rem;

    border-radius: 10px;
    padding: 1.6rem;

    &.newContainer {
        background: 'transparent';

        border: 2px dashed #948F99;
    }

    &.oldContainer {
        background: ${({ theme }) => theme.newMovie.markerBg};

        border: 'none';
    }

    > input {
        background: ${({ theme }) => theme.newMovie.markerBg};

        color: ${({ theme }) => theme.newMovie.markerText};
        font-family: 'Roboto';
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;    

        border: none;

        &:focus {
            outline: none;
        }

        &.newInput {
            background-color: transparent;
        }
    }

    > svg {
        color: #FF859B;
    }
`;