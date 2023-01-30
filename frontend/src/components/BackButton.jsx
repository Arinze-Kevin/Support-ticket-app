import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from 'react-router-dom'
import styled from "styled-components";

const Div = styled.div`
   margin-right: 60em;
//    padding: 10px;
   background-color: black;
   color: white;
   border: 10px solid black;
   width: 5em;
   cursor: pointer;
`;

const BackButton = ({ url }) => {
    return (
        <Div>
            <Link style={{textDecoration: 'none'}} to={url} >
               <FaArrowCircleLeft /> Go back
            </Link>
        </Div>
    )
}

export default BackButton