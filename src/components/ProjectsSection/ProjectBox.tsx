import styled, { css } from 'styled-components';
import { FaGithubAlt, FaRegEye } from 'react-icons/fa';

import { Typography } from '..';

interface ProjectBoxProps {
  img: string;
  title: string;
  responsiveness: string;
  description?: string;
  stack: string[];
  liveLink: string;
  codeLink: string;
  delay: string;
}

export default function ProjectBox({ img, title, responsiveness, description, stack, liveLink, codeLink, delay }: ProjectBoxProps) {
  return (
    <Container className='wow fadeInUp' style={{ animationDelay: delay }}>
      <Image src={img} alt={title} />

      <Typography fontSize='2.5rem' fontWeight='500' textTransform='capitalize' margin='2rem 0 1rem 0'>
        {title}
      </Typography>
      <Typography textTransform='capitalize'>{responsiveness}</Typography>

      <StacksWrapper>
        {stack.map((item, index) => (
          <Stack key={index}>{item}</Stack>
        ))}
      </StacksWrapper>

      <LinksWrapper>
        <CodeLink href={codeLink} codeLink={codeLink} target='_blank' rel='noopener noreferrer nofollow'>
          <FaGithubAlt size='2rem' />
          <Typography>Code</Typography>
        </CodeLink>
        <a href={liveLink} target='_blank' rel='noopener noreferrer nofollow'>
          <FaRegEye size='2rem' />
          <Typography>Live</Typography>
        </a>
      </LinksWrapper>
    </Container>
  );
}

const Container = styled.div`
  min-width: 320px;
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3px);
  box-shadow: -3px 3px 0px 3px rgba(255, 255, 255, 0.2);
  padding: 2rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 720px) {
    min-width: 100%;
  }
`;

const CodeLink = styled.a<any>`
  ${({ codeLink }) =>
    !codeLink &&
    css`
      opacity: 0.5;
      pointer-events: none;
      background-color: rgba(255, 255, 255, 0.1);
    `}
`;

const Image = styled.img`
  min-height: 250px;
  max-width: 100%;
  border-radius: 5px;
`;

const StacksWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: 2rem;
  flex-grow: 1;
`;

const Stack = styled(Typography)`
  margin: 5px;
  /* margin-left: 0; */
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1px 10px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  white-space: nowrap;
`;

const LinksWrapper = styled.div`
  display: flex;
  margin-top: 5rem;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
    padding: 5px 20px;
    border: 1px solid rgba(255, 255, 255, 0.4);
    transition: 150ms;
    border-radius: 5px;

    svg {
      margin-right: 1rem;
    }

    & > * {
      pointer-events: none;
    }

    &:first-child {
      margin-right: 2rem;
    }

    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
    }
  }
`;
