import { useEffect } from "react"
import { toast } from "react-toastify"
import { useSelector, useDispatch } from "react-redux"
import { getTicket, reset, closeTicket } from "../features/tickets/ticketSlice"
import BackButton from "../components/BackButton"
import { useParams, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
${mobile({ fontSize: '12px'})}
`;

const Div = styled.div`
  background-color: #eeeeee;
  padding: 10px;
`;

const Button = styled.button`
 text-align: center;
 background-color: red;
 color: white;
 cursor: pointer;
 margin-left: 8.5em;
 margin-top: 2em;
 padding: 10px 10px; 
 width: 80%;
 ${mobile({ marginLeft: '2.7em'})}
 `;

 const Span = styled.span`
    margin-left: 29em;
    background-color: black;
    color: gray;
    width: 6em;
    ${mobile({ marginLeft: '1.3em', marginBottom: '5em'})}
 
 `;

function Ticket() {
    const {ticket, isLoading, isSuccess, isError, message} = useSelector((state) => state.tickets)
    
  console.log("tickettttttt", ticket)

    const params = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {ticketId} = useParams()

    useEffect(() => {
        if(isError) {
            toast.error(message)
        }

        dispatch(getTicket(ticketId))
        // eslint-disabled-next-line 
    }, [isError, message, ticketId])

    // Close ticket
    const onTicketClose = () => {
        dispatch(closeTicket(ticketId))
        toast.success('Ticket Closed')
        navigate('/tickets')
    }

    if(isLoading) {
        return <h1>Loading...</h1>
    }

    if(isError) {
        return <h3>Something went wrong</h3>
    }

    return (
        <Container>
            <header>
                <BackButton url='/tickets' />
                <h2>
                    Ticket ID: {ticket?.ticket?._id}
                    <Span>{ticket?.ticket?.status}</Span>
                </h2>
                <h3>
                    Date Submitted: {new Date(ticket?.ticket?.createdAt).toLocaleString('en-US')}
                </h3>
                <h3>Product: {ticket?.ticket?.product}</h3>
                <hr />
                <Div>
                    <h3>Description of Issue</h3>
                    <p>{ticket?.ticket?.description}</p>
                </Div>
            </header>

            {ticket.status !== 'closed' && (<Button onClick={onTicketClose}>Close Ticket</Button>)}
        </Container>
    )
}

export default Ticket