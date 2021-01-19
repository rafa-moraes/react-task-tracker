const Button = ({color, text}) => {
    return (
        <button style={{backgroundColor: color}} className='btn'>{text}</button>
    )
}

Button.defaultProps = {
    color: 'steelblue'
}
Button.prototypes = {
    text: PropTypes.string,
}


export default Button
