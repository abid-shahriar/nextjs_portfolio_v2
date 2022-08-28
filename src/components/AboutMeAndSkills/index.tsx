import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Typography } from '..';
import SkillBox from './SkillBox';
import SocialIcons from './SocialIcons';

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
  return (
    <StyledSection>
      <AboutMe>
        <ImageContainer className="wow fadeInUp">
          <img src="./me.jpg" alt="abid shahriar" />
        </ImageContainer>

        <BioInfo>
          <div className="wow fadeInUp" style={{ animationDelay: isMobile ? '0.5s' : '0.5s' }}>
            <Typography>
              I&apos;m a self-taught full stack JavaScript developer from Bangladesh with 3+ years of experience in web
              development.
            </Typography>
          </div>

          <div className="wow fadeInUp" style={{ animationDelay: isMobile ? '0.5s' : '0.7s' }}>
            <Typography margin="1rem 0 4rem 0">
              Currently working as a Backend Engineer at{' '}
              <a href="https://www.valkyrie-it.com/deck" target="_blank" rel="noopener noreferrer">
                Valkyrie IT LTD.
              </a>
            </Typography>
          </div>
          <div className="wow fadeInUp" style={{ animationDelay: isMobile ? '0.5s' : '0.9s' }}>
            <Typography margin=".5rem 0 0 0">
              Email: <a href="mailto:abidshahriar7@gmail.com">abidshahriar7@gmail.com</a>
            </Typography>
          </div>

          <div className="wow fadeInUp" style={{ animationDelay: isMobile ? '0.5s' : '1.2s' }}>
            <Typography margin=".5rem 0 0 0">
              Phone: <a href="tel:+8801726389558">+8801726389558</a>
            </Typography>
          </div>
          <div className="wow fadeInUp" style={{ animationDelay: isMobile ? '0.5s' : '1.5s' }}>
            <Typography margin=".5rem 0 0 0">
              Resume: <a onClick={handlePdfDownload}>Click here to download</a>
            </Typography>
          </div>
          <SocialIcons isMobile={isMobile} />
        </BioInfo>
      </AboutMe>
      <Skills>
        <div className="wow fadeInUp" style={{ animationDelay: isMobile ? '0.5s' : '0.5s' }}>
          <Typography margin="0 0 2rem 0">
            For my office work and practice projects, I have worked with a lof of technologies from this web development world. In
            this constantly evolving field, I always try to keep myself up-to-date with latest technologies. Learning new
            technologies and doing experiments with them is kinda my thing.
          </Typography>
        </div>

        <div className="wow fadeInUp" style={{ animationDelay: isMobile ? '0.5s' : '0.7s' }}>
          <Typography>Here are some of the technologies I have worked with:</Typography>
        </div>

        <SkillsWrapper>
          <div className="wow fadeInUp" style={{ animationDelay: isMobile ? '0.5s' : '1s' }}>
            <SkillBox
              title="frontend"
              skills={[
                'HTML',
                'CSS',
                'JavaScript',
                'SCSS',
                'ReactJS',
                'NextJS',
                'Redux',
                'ReactPDF',
                'Styled Components',
                'StoryBook',
                'ContextApi',
              ]}
            />
          </div>
          <div className="wow fadeInUp" style={{ animationDelay: isMobile ? '0.5s' : '1.3s' }}>
            <SkillBox
              title="backend"
              skills={[
                'NodeJS',
                'MongoDB',
                'Express',
                'Postgres',
                'Knex',
                'Mongoose',
                'Cookie',
                'Prisma',
                'CORS',
                'REST Api',
                'Formidable',
              ]}
            />
          </div>
          <div className="wow fadeInUp" style={{ animationDelay: isMobile ? '0.5s' : '1.5s' }}>
            <SkillBox
              title="others"
              skills={[
                'TypeScript',
                'github',
                'git',
                'Photoshop',
                'Figma',
                'ESlint',
                'Testing',
                'MailGun',
                'Responsive Design',
                'DigitalOcean',
                'SEO',
              ]}
            />
          </div>
        </SkillsWrapper>
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
  align-items: center;
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

const SkillsWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;

  & > * {
    margin: 2rem;
  }

  @supports (gap: 4rem) {
    gap: 4rem;

    @media (max-width: 992px) {
      gap: 2rem;
    }

    & > * {
      margin: 0rem;
    }
  }
  @media (max-width: 992px) {
    flex-direction: column;
  }
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
