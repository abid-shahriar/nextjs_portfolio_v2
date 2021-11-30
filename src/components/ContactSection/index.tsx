import styled from 'styled-components';

export default function ContactSection() {
  return <StyledSection></StyledSection>;
}

const StyledSection = styled.section`
  min-height: calc(100vh - var(--nav-height));
  background-color: var(--bg-dark);
`;
