import React from 'react'
import { Alert} from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Message = ({variant, text, link, linktext, id}) => {
  return (
    <Alert variant={variant}>
        <span>{`${text}`} <Link to={`${link}`}>{`${linktext}`}</Link></span>
    </Alert>
  )
}

export default Message