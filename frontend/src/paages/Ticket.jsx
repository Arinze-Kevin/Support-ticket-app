import { useEffect } from "react"
import { toast } from "react-toastify"
import { useSelector, useDispatch } from "react-redux"
import { getTicket, reset, closeTicket } from "../features/tickets/ticketSlice"
import BackButton from "../components/BackButton"
import { useParams, useNavigate } from "react-router-dom"
import styled from "styled-components"

const Container = styled.div`
`;

const Div = styled.div`
  background-color: #eeeeee;
  padding: 10px;
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
                    Ticket ID: {ticket?.updatedTicket?._id}
                    <span>{ticket?.status}</span>
                </h2>
                <h3>
                    Date Submitted: {new Date(ticket?.updatedTicket?.createdAt).toLocaleString('en-US')}
                </h3>
                <h3>Product: {ticket?.updatedTicket?.product}</h3>
                <hr />
                <Div>
                    <h3>Description of Issue</h3>
                    <p>{ticket?.updatedTicket?.description}</p>
                </Div>
            </header>

            {ticket.status !== 'closed' && (<button style={{ textAlign: 'center', backgroundColor: 'red', color: 'white', cursor: 'pointer', marginLeft: '8.5em', marginTop: '2em', padding: '10px 10px', width: '80%' }} onClick={onTicketClose}>Close Ticket</button>)}
        </Container>
    )
}

export default Ticket