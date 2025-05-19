import styled from 'styled-components';
import Link from 'next/link';

import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import { useAnimation } from '../../hooks/useAnimation';

export default function SocialIcons({ isMobile }: { isMobile: boolean }) {
  useAnimation({ suffix: 'social_' });

  return (
    <IconsContainer>
      <Link href="https://github.com/abid-shahriar" passHref legacyBehavior>
        <a
          target="_blank"
          rel="noopener noreferrer nofollow"
          title="github icon"
          className="social_animate fadeInUp"
          style={{ animationDelay: '.5s' }}
        >
          <FaGithubSquare />
        </a>
      </Link>
      <Link href="https://linkedin.com/in/abidshahriar/" passHref legacyBehavior>
        <a
          target="_blank"
          rel="noopener noreferrer nofollow"
          title="linkedin icon"
          className="social_animate fadeInUp"
          style={{ animationDelay: '.7s' }}
        >
          <FaLinkedin />
        </a>
      </Link>
      <Link href="https://instagram.com/find.abid" passHref legacyBehavior>
        <a
          target="_blank"
          rel="noopener noreferrer nofollow"
          title="instagram icon"
          className="social_animate fadeInUp"
          style={{ animationDelay: '.9s' }}
        >
          <FaInstagramSquare />
        </a>
      </Link>
      <Link href="https://facebook.com/abid.sh.akash" passHref legacyBehavior>
        <a
          target="_blank"
          rel="noopener noreferrer nofollow"
          title="facebook icon"
          className="social_animate fadeInUp"
          style={{ animationDelay: '1.1s' }}
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
