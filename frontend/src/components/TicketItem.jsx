import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Container = styled.div`
    margin-top: 10em;
    background-color: red;
`;

const Div = styled.div`
margin-top: 10em;
background-color: red;
`;

function TicketItem({ ticket }) {
    return (
        <Container>
            <div>{new Date(ticket.createdAt).toLocaleString('en-US')}</div>
            <div>{ticket.product}</div>
            <Div>{ticket.status}</Div>
            <Link to={`/ticket/${ticket._id}`}>View</Link>
        </Container>
        
    )
}

export default TicketItem