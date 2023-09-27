import { Container } from './styles';

export function Button({ children, isUnactive, ...rest }) {
    return (
        <Container {...rest} className={isUnactive ? 'unactive' : ''} disabled={isUnactive}>
            {children}
        </Container>
    )
}