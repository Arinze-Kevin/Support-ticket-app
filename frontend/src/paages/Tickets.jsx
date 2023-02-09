import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTickets, reset } from "../features/tickets/ticketSlice";
import BackButton from "../components/BackButton";
import TicketItem from "../components/TicketItem";
import styled from "styled-components";

const Container = styled.div`
   text-align: center;
   margin-top: -1em;
`;

const Section = styled.div`
`;

const Title = styled.div`
   font-weight: 900;
   font-size: 2.3em;
`;

const Desc = styled.div`
   display: flex;
   justify-content: space-between;
   padding: 6px;
   background-color: gray;
   font-size: 1.6em;
   margin-top: 1em;
`;

function Tickets() {
    const { tickets, isLoading, isSuccess } = useSelector((state) => state.tickets.tickets)
    const dispatch = useDispatch()
  console.log("tickets", tickets)

    // useEffect(() => {
    //     dispatch(getTickets())
    // }, [dispatch])

    // console.log(tickets)

    // if (isLoading) {
    //     return <h3>Loading...</h3>
    // }

    useEffect(() => {
        return () => {
            if (isSuccess) {
                // dispatch(reset())
            }
        }
    }, [dispatch, isSuccess])

    useEffect(() => {
        dispatch(getTickets())
    }, [dispatch])

    return (

        <Container>
            <BackButton url='/' />
            <Title>Tickets</Title>
            <Section>
              <Desc>
                <div style={{ marginLeft: '3em' }}>Date</div>
                <div style={{ marginLeft: '-1.5em' }}>Product</div>
                <div style={{ marginLeft: '-3em' }}>Status</div>
                <div></div>
              </Desc>
            </Section>
            {tickets?.length > 0 ? tickets?.map((ticket)  => (
                <TicketItem key={ticket._id} ticket={ticket} />
              )) : null }
        </Container>
        
    )
}

export default Tickets