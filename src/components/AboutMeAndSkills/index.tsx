import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Typography } from '..';
import SkillBox from './SkillBox';
import SocialIcons from './SocialIcons';
import { EmploymentTimeline } from './TimelIne';
import { useAnimation } from '../../hooks/useAnimation';

export default function AboutMeAndSkills() {
  const [isMobile, setIsMobile] = useState(false);

  function handlePdfDownload(e: any) {
    e.preventDefault();

    const a = document.createElement('a');
    a.setAttribute('download', 'ABID_SHAHRIAR_RESUME.pdf');
    a.setAttribute('href', '/ABID_SHAHRIAR_RESUME.pdf');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  useEffect(() => {
    const mobileWith = window.innerWidth < 992;

    if (mobileWith) {
      setIsMobile(true);
    }
  }, []);

  useAnimation({ suffix: 'about_' });

  return (
    <StyledSection>
      <AboutMe>
        <ImageContainer className="about_animate fadeIn" style={{ animationDelay: '.5s' }}>
          <img src="/me.jpg" alt="abid shahriar" width={320} height={320} />
        </ImageContainer>

        <BioInfo>
          <div className="about_animate fadeInUp" style={{ animationDelay: '.8s' }}>
            <Typography margin="0 0 4rem 0">
              With 4+ years of experience in the field, I specialize in creating robust and efficient web applications. My
              expertise spans both frontend and backend development, allowing me to deliver end-to-end solutions that meet
              business requirements. I am passionate about staying up-to-date with the latest technologies and continuously
              improving my skills.
            </Typography>
          </div>

          <EmploymentTimeline />

          <div className="about_animate fadeInUp" style={{ animationDelay: '.5s' }}>
            <Typography margin="6rem 0 0 0">
              Email: <a href="mailto:abidshahriar7@gmail.com">abidshahriar7@gmail.com</a>
            </Typography>
          </div>
          <div className="about_animate fadeInUp" style={{ animationDelay: '.8s' }}>
            <Typography margin=".5rem 0 0 0">
              Resume:{' '}
              <a onClick={handlePdfDownload} href="/ABID_SHAHRIAR_RESUME.pdf">
                Click here to download
              </a>
            </Typography>
          </div>
          <SocialIcons isMobile={isMobile} />
        </BioInfo>
      </AboutMe>
      <Skills>
        <div className="about_animate fadeInUp" style={{ animationDelay: '0' }}>
          <Typography margin="0 0 2rem 0">
            As a web developer, I have gained experience in various technologies and frameworks. I am always eager to learn and
            explore new developments in this dynamic field. I enjoy experimenting with different tools and techniques to enhance
            my skills and creativity.
          </Typography>
        </div>

        <div className="about_animate fadeInUp" style={{ animationDelay: '.3s' }}>
          <Typography variant="h2" margin="0 0 1.5rem 0" fontSize="2.2rem">
            Here are some of the technologies I have worked with:
          </Typography>
        </div>

        <div>
          <div className="about_animate fadeInUp" style={{ animationDelay: '.6s' }}>
            <Typography margin="0 0 1rem 0">
              <span
                style={{
                  color: '#cbd5e1',
                }}
              >
                Frontend:{' '}
              </span>
              HTML, CSS, JavaScript, ReactJS, NextJS, Redux, ReactPDF, Styled Components, MUI, StoryBook, ContextApi etc.
            </Typography>
          </div>
          <div className="about_animate fadeInUp" style={{ animationDelay: '.8s' }}>
            <Typography margin="0 0 1rem 0">
              <span
                style={{
                  color: '#cbd5e1',
                }}
              >
                Backend:{' '}
              </span>
              NodeJS, MongoDB Express, Postgres, Knex, Mongoose, Cookie, Prisma, CORS, REST Api, Formidable etc.
            </Typography>
          </div>
          <div className="about_animate fadeInUp" style={{ animationDelay: '.9s' }}>
            <Typography margin="0 0 1rem 0">
              <span
                style={{
                  color: '#cbd5e1',
                }}
              >
                Other:{' '}
              </span>
              TypeScript, Github, Git, Photoshop, Figma, ESlint, Testing, MailGun, Responsive Design, DigitalOcean, SEO etc.
            </Typography>
          </div>
        </div>
      </Skills>
    </StyledSection>
  );
}

const AboutMe = styled.div`
  padding: 2rem;
  background-color: rgba(133, 133, 133, 0.2);
  border-radius: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 4rem;
  max-width: var(--max-width);

  @media (max-width: 992px) {
    flex-direction: column;
  }

  @media (max-width: 340px) {
    padding: 2rem 1rem;
  }
`;

const BioInfo = styled.div``;

const ImageContainer = styled.div`
  margin-right: 4rem;

  @media (max-width: 992px) {
    margin-right: 0;
    margin-bottom: 2rem;
  }

  img {
    width: 100%;
    border-radius: 5px;
    width: 320px;

    @media (max-width: 400px) {
      width: 100%;
    }
  }
`;

const Skills = styled.div`
  padding: 2rem;
  background-color: rgba(133, 133, 133, 0.2);
  border-radius: 5px;
  max-width: var(--max-width);
`;

const StyledSection = styled.section`
  min-height: calc(100vh - var(--nav-height));
  background-color: #171e2e;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  & > * {
    /* border: 1px solid red; */
  }

  && {
    padding: 10rem 2.5%;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    font-weight: 300;
    color: #43a9fc;
  }
`;
