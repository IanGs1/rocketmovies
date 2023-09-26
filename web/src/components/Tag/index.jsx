import { Container } from './styles';

export function Tag({ children, ...rest }) {
    return (
        <Container {...rest}>
            {children}
        </Container>
    )
}