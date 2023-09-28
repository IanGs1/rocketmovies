import styled from "styled-components";

export const Container = styled.div`
    &::before {
        width: 100%;
        height: 144px;

        content: '';

        background: rgba(255, 133, 155, 0.05);

        position: absolute;
        top: 0;
        right: 0;
        z-index: -1;
    }

    padding: 6.3rem 14.4rem;
    
    > a {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        gap: .8rem;

        color: #FF859B;
        font-family: 'Roboto Slab';
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-decoration: none;
    }
`;

export const ProfileForm = styled.div`
    width: 186px;
    height: 186px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: relative;

    margin: 0 auto 6.4rem;
    > img {
        width: 100%;
        height: 100%;

        border-radius: 50%;
    }
`;

export const InputWrapper = styled.div`
    > label {
        width: 48px;
        height: 48px;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: #FF859B;
        border-radius: 50%;

        cursor: pointer;

        position: absolute;
        bottom: 0;
        right: 0;
    }

    > input {
        display: none;
    }
`;

export const Form = styled.form`
    max-width: 34rem;

    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    margin: 0 auto;
`;

export const FormWrapper = styled.div`
    > div {
        margin-bottom: .8rem;

        > input {
            &.placeholderSpecial {
                &::placeholder {
                    color: #F4EDE8;
                }
            }
        }
    }
`