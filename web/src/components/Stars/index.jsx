import { Container } from './styles';

import { FiStar } from 'react-icons/fi';

export function Stars({ rating }) {
    return (
        <Container>
            {rating >= 1 ? <FiStar fill="#FF859B" stroke="none"/> : <FiStar stroke="#FF859B"/>}
            {rating >= 2 ? <FiStar fill="#FF859B" stroke="none"/> : <FiStar stroke="#FF859B"/>}
            {rating >= 3 ? <FiStar fill="#FF859B" stroke="none"/> : <FiStar stroke="#FF859B"/>}
            {rating >= 4 ? <FiStar fill="#FF859B" stroke="none"/> : <FiStar stroke="#FF859B"/>}
            {rating >= 5 ? <FiStar fill="#FF859B" stroke="none"/> : <FiStar stroke="#FF859B"/>}
        </Container>
    )
}