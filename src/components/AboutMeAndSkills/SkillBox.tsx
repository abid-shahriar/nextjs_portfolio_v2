import styled from 'styled-components';
import { Typography } from '..';
interface SkillBoxProps {
  skills: string[];
  title: string;
}

export default function SkillBox({ skills, title }: SkillBoxProps) {
  return (
    <Container>
      <div>
        <StyledTypo fontSize='2.2rem' textTransform='capitalize' fontWeight='400' margin='0 0 2rem 0'>
          {title}
        </StyledTypo>
      </div>

      <div>
        {skills.map((skill, index) => (
          <Typography key={index} margin='5px 0'>
            {skill}
          </Typography>
        ))}
      </div>
    </Container>
  );
}

const Container = styled.div`
  /* border: 1px solid rgba(255, 255, 255, 0.1); */
  background-color: rgba(0, 0, 0, 0.1);
  padding: 2rem;
  border-radius: 5px;
  min-width: 320px;

  @media (max-width: 1100px) {
    min-width: 250px;
  }
`;

const StyledTypo = styled(Typography)`
  padding-bottom: 3px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.6);
`;
