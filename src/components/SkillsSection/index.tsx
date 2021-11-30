import styled from 'styled-components';

import SkillBox from './SkillBox';
import { Typography } from '..';

export default function index() {
  return (
    <StyledSection id='skills'>
      <SkillsWrapper>
        <div className='wow fadeInUp' data-wow-delay='1s'>
          <SkillBox title='frontend' skills={['HTML', 'CSS', 'SCSS', 'JavaScript', 'ReactJS', 'NextJs', 'Redux']} />
        </div>
        <div className='wow fadeInUp' data-wow-delay='1.3s'>
          <SkillBox title='backend' skills={['NodeJS', 'Express', 'Mongoose', 'JWT', 'CORS', 'Cookie', 'Prisma']} />
        </div>
        <div className='wow fadeInUp' data-wow-delay='1.5s'>
          <SkillBox title='others' skills={['Styled Components', 'ContextApi', 'TypeScript', 'StoryBook', 'React-PDF', 'MongoDB', 'Postgres']} />
        </div>
      </SkillsWrapper>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  min-height: calc(100vh - var(--nav-height));
  background-color: var(--bg-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  && {
    padding: 10rem 2.5%;
  }
`;

const SkillsWrapper = styled.div`
  display: flex;
  justify-content: space-around;

  & > * {
    margin: 2rem;
  }

  @supports (gap: 4rem) {
    gap: 4rem;

    & > * {
      margin: 0rem;
    }
  }
`;
