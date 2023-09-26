import { FiX, FiPlus } from 'react-icons/fi';

import { Container } from './styles';

export function Marker({ title, isNew = false, ...rest}) {
    return (
        <Container readOnly={!isNew} className={isNew ? 'newContainer' : 'oldContainer'}>
            <input type="text" value={title} className={isNew ? 'newInput' : ''} {...rest}/>

            {isNew ? <FiX size={16}/> : <FiPlus size={16}/>}
        </Container>
    )
}