import { Container } from "./styles";

export function Input({ icon: Icon, title }) {
    return (
        <Container>
            {Icon && <Icon size={20}/>}

            <input placeholder={title}/>
        </Container>
    )
}