import { Container } from './styles';

import { FiStar } from 'react-icons/fi';

export function Stars({ rating, ...rest }) {
    return (
        <Container>
            {rating >= 1 ? <FiStar fill="#FF859B" stroke="none" {...rest}/> : <FiStar stroke="#FF859B" {...rest}/>}
            {rating >= 2 ? <FiStar fill="#FF859B" stroke="none" {...rest}/> : <FiStar stroke="#FF859B" {...rest}/>}
            {rating >= 3 ? <FiStar fill="#FF859B" stroke="none" {...rest}/> : <FiStar stroke="#FF859B" {...rest}/>}
            {rating >= 4 ? <FiStar fill="#FF859B" stroke="none" {...rest}/> : <FiStar stroke="#FF859B" {...rest}/>}
            {rating >= 5 ? <FiStar fill="#FF859B" stroke="none" {...rest}/> : <FiStar stroke="#FF859B" {...rest}/>}
        </Container>
    )
}