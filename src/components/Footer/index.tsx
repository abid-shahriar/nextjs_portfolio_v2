import styled from 'styled-components';
import { Typography } from '..';

export default function index() {
  return (
    <Footer>
      <Typography>Abid Shahriar &copy; 2023</Typography>
      <Typography>5800 Bogura, Bangladesh</Typography>
    </Footer>
  );
}

const Footer = styled.footer`
  background-color: #131a22;
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    font-size: 1.6rem;
  }
`;
