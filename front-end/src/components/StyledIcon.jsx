import styled from 'styled-components'
const StyledIcon = styled((props) => {
    const { children } = props
    
    return children
})`cursor: pointer;
transition: transform 0.3s ease-out;

    ${props => props.active && css`
        transform: rotate(180deg);
    `}

`

export default StyledIcon