import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaQuestionCircle, FaTicketAlt } from 'react-icons/fa'

const Container = styled.div`
   text-align: center;
   margin-top: 5em;
`;

const Section = styled.section`

`;

const Title = styled.h1`
   font-weight: 900;
   font-size: 2.3em;
`;

const Desc = styled.p`
   font-weight: 900;
   font-size: 1.5em;
`;

const Div = styled.div`
   padding: 10px;
   width: 30%;
   margin-left: 25em;
   margin-top: 4em;
   border: 10px solid #48494b;
//    text-align: center;
    letter-spacing: 3px;
    background-color: #48494b;
    border-radius: 20%;
    cursor: pointer;
`;

const Div1 = styled.div`
   padding: 10px;
   width: 30%;
   margin-left: 25em;
   margin-top: 2em;
   border: 10px solid black;
//    text-align: center;
    letter-spacing: 3px;
    // margin-top: 10px;
    background-color: black;
    // color: red;
    border-radius: 20%;
    cursor: pointer;
`;

function Home() {
    return (
        <Container>
            <Section>
                <Title>What do you need help with?</Title>
                <Desc>Please choose from an option below</Desc>
            </Section>

            <Div>
                <Link to='/new-ticket'>
                   <FaQuestionCircle /> Create New Ticket
                </Link>
            </Div>

            <Div1>
                <Link to='/tickets'>
                   <FaTicketAlt /> View My Ticket
                </Link>
            </Div1>
        </Container>
        
    )
}

export default Home
