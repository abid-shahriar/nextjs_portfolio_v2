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
        <StyledTypo fontSize='3rem' textTransform='capitalize' fontWeight='400' margin='0 0 2rem 0'>
          {title}
        </StyledTypo>
      </div>

      <div>
        {skills.map((skill, index) => (
          <Typography key={index} margin='5px 0' fontWeight='400'>
            {skill}
          </Typography>
        ))}
      </div>
    </Container>
  );
}

const Container = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.1);
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3px);
  box-shadow: -3px 3px 0px 3px rgba(255, 255, 255, 0.2);
  padding: 2rem;
  border-radius: 5px;
  min-width: 320px;
`;

const StyledTypo = styled(Typography)`
  padding-bottom: 3px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.6);
`;
