import { FiX, FiPlus } from 'react-icons/fi';

import { Container } from './styles';

export function Marker({ title, isNew = false, onClick, ...rest}) {
    return (
        <Container readOnly={!isNew} className={isNew ? 'newContainer' : 'oldContainer'}>
            <input type="text" value={title} className={isNew ? 'newInput' : ''} {...rest}/>

            {isNew ? <FiPlus onClick={onClick} size={16}/> : <FiX onClick={onClick} size={16}/>}
        </Container>
    )
}