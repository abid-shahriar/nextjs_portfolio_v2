import styled from 'styled-components';
import Link from 'next/link';

import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaGithubSquare } from 'react-icons/fa';

export default function SocialIcons({ isMobile }: { isMobile: boolean }) {
  return (
    <IconsContainer>
      <Link href='https://github.com/abid-shahriar' passHref>
        <a
          target='_blank'
          rel='noopener noreferrer nofollow'
          className='wow fadeInUp'
          style={{ animationDelay: isMobile ? '0.5s' : '1.7s' }}
          title='github icon'
        >
          <FaGithubSquare />
        </a>
      </Link>
      <Link href='https://linkedin.com/in/abidshahriar/' passHref>
        <a
          target='_blank'
          rel='noopener noreferrer nofollow'
          className='wow fadeInUp'
          style={{ animationDelay: isMobile ? '0.7s' : '1.9s' }}
          title='linkedin icon'
        >
          <FaLinkedin />
        </a>
      </Link>
      <Link href='https://instagram.com/find.abid' passHref>
        <a
          target='_blank'
          rel='noopener noreferrer nofollow'
          className='wow fadeInUp'
          style={{ animationDelay: isMobile ? '0.9s' : '2.1s' }}
          title='instagram icon'
        >
          <FaInstagramSquare />
        </a>
      </Link>
      <Link href='https://facebook.com/abid.sh.akash' passHref>
        <a
          target='_blank'
          rel='noopener noreferrer nofollow'
          className='wow fadeInUp'
          style={{ animationDelay: isMobile ? '1.1s' : '2.3s' }}
          title='facebook icon'
        >
          <FaFacebookSquare />
        </a>
      </Link>
    </IconsContainer>
  );
}

const IconsContainer = styled.div`
  margin-top: 2rem;
  width: 100%;

  a {
    display: inline-block;
    color: whitesmoke;
    transition: 0.15s;

    &:not(:first-child) {
      margin-left: 1rem;
    }

    :hover {
      color: var(--color-secondary);
    }
  }

  svg {
    height: 4rem;
    width: 4rem;

    @media (max-width: 768px) {
      height: 3rem;
      width: 3rem;
    }
  }
`;
