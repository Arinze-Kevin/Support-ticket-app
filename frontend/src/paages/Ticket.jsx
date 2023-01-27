import { useEffect } from "react"
import { toast } from "react-toastify"
import { useSelector, useDispatch } from "react-redux"
import { getTicket, reset } from "../features/tickets/ticketSlice"
import BackButton from "../components/BackButton"
import { useParams } from "react-router-dom"
import styled from "styled-components"

const Container = styled.div`
`;

function Ticket() {
    const {ticket, isLoading, isSuccess, isError, message} = useSelector((state) => state.tickets)

    const params = useParams()
    const dispatch = useDispatch()
    const {ticketId} = useParams()

    useEffect(() => {
        if(isError) {
            toast.error(message)
        }

        dispatch(getTicket(ticketId))
        // eslint-disabled-next-line 
    }, [isError, message, ticketId])

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
                    Ticket ID: {ticket._id}
                    <span>{ticket.status}</span>
                </h2>
                <h3>
                    Date Submitted: {new Date(ticket.createdAt).toLocaleString('en-US')}
                </h3>
                <hr />
                <div>
                    <h3>Description of Issue</h3>
                    <p>{ticket.description}</p>
                </div>
            </header>
        </Container>
    )
}

export default Ticket