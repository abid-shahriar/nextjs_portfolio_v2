import styled from 'styled-components';
import Link from 'next/link';

import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaGithubSquare } from 'react-icons/fa';

export default function SocialIcons() {
  return (
    <IconsContainer>
      <Link href='https://github.com/abid-shahriar' passHref>
        <a target='_blank' rel='noopener noreferrer nofollow' className='wow fadeInUp' data-wow-delay='2.7s' title='github icon'>
          <FaGithubSquare />
        </a>
      </Link>
      <Link href='https://linkedin.com/in/abidshahriar/' passHref>
        <a target='_blank' rel='noopener noreferrer nofollow' className='wow fadeInUp' data-wow-delay='2.9s' title='linkedin icon'>
          <FaLinkedin />
        </a>
      </Link>
      <Link href='https://instagram.com/find.abid' passHref>
        <a target='_blank' rel='noopener noreferrer nofollow' className='wow fadeInUp' data-wow-delay='3.1s' title='instagram icon'>
          <FaInstagramSquare />
        </a>
      </Link>
      <Link href='https://facebook.com/abid.sh.akash' passHref>
        <a target='_blank' rel='noopener noreferrer nofollow' className='wow fadeInUp' data-wow-delay='3.3s' title='facebook icon'>
          <FaFacebookSquare />
        </a>
      </Link>
    </IconsContainer>
  );
}

const IconsContainer = styled.div`
  margin-top: 4rem;
  display: flex;
  a {
    color: whitesmoke;
    transition: 0.15s;

    :hover {
      color: var(--color-secondary);
    }
  }

  svg {
    margin: 0 1rem;
    height: 4rem;
    width: 4rem;
  }
`;
