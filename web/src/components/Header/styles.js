import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 6.4rem;

    background-color: ${({ theme }) => theme.header.background};
    padding: 2.4rem 12.3rem;

    border-bottom: 1px solid #3E3B47;

    grid-area: header;
`;

export const Brand = styled.h3`
    color: ${({ theme }) => theme.header.brand};
    font-family: 'Roboto Slab';
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const Profile = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: .9rem;

    > img {
        width: 64px;
        height: 64px;

        border-radius: 50%;
        border: 1px solid #3E3B47;
    }
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    > p {
        color: ${({ theme }) => theme.header.profileText};
        font-family: 'Roboto Slab';
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    > span {
        color: ${({ theme }) => theme.header.profileSpan};
        font-family: 'Roboto Slab';
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`;