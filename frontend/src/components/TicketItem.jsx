import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Container = styled.div`
display: flex;
justify-content: space-between;
padding: 6px;
background-color: #eeeeee;
font-size: 1.6em;
margin-top: 1em;
`;

const Button = styled.div`
  border: 2px solid black;
  padding: 0px 20px;
  margin-right: 2em;
`;

const Div = styled.div`
   margin-left: 2em;
   border: 2px solid black;
   background-color: black;
   color: gray;
   padding: 0px 10px;

`;

function TicketItem({ ticket }) {
    return (
        <Container>
            <div>{new Date(ticket.createdAt).toLocaleString('en-US')}</div>
            <div>{ticket.product}</div>
            <Div>{ticket.status}</Div>
            <Button>
            <Link style={{textDecoration: 'none'}} to={`/ticket/${ticket._id}`}>View</Link>
            </Button>
        </Container>
        
    )
}

export default TicketItem