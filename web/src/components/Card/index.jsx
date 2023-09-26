import { Container, Description, Tags } from './styles';

import { Stars } from '../Stars';
import { Tag } from '../Tag';

export function Card({ title, rating = 4, children, tags = [] }) {
    return (
        <Container>
            <h1>{title}</h1>

            <Stars rating={rating}/>

            <Description>
                {children}
            </Description>

            <Tags>
                {tags.map(tag => {
                    return (
                        <Tag key={tag.id}>{tag.name}</Tag>
                    )
                })}
            </Tags>
        </Container>
    )
}