import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {
    // const onClick = () => {
    //     console.log("Clicked")
    // }

    return (
        <header className = 'header'>
            <h1>{title}</h1>
            {showAdd ? <Button color = 'red' text = 'CLOSE' onClick = {onAdd} /> : <Button color = 'green' text = 'ADD' onClick = {onAdd} />}
            
        </header>
    )
}

Header.defaultProps = {
    title: "Todo List"
}

Header.propTypes = {
    title : PropTypes.string.isRequired,
}



export default Header