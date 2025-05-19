import styled from 'styled-components';
import Typography from '../Typography';
import { useAnimation } from '../../hooks/useAnimation';

interface Props {
  timeDuration: string;
  companyName: string;
  companyLocation: string;
  designation: string;
  employmentType?: 'Full-time' | 'Part-time';
}
export const SingleTimelineItem = (props: Props) => {
  const { timeDuration, companyName, companyLocation, designation, employmentType = 'Full-time' } = props;

  useAnimation({ suffix: 'timeline_' });

  return (
    <TimelineItem>
      <TimelineDate dateTime="1970-01-01" className="timeline_animate fadeInUp" style={{ animationDelay: '.5s' }}>
        <Typography color="#cbd5e1" fontSize="1.5rem">
          {timeDuration} :: {employmentType}
        </Typography>
      </TimelineDate>
      <div className="timeline_animate fadeInUp" style={{ animationDelay: '.7s' }}>
        <Typography variant="h3" margin=".7rem 0 0 0" fontSize="1.7rem">
          {designation} at {companyName}
        </Typography>
      </div>

      <div className="timeline_animate fadeInUp" style={{ animationDelay: '.9s' }}>
        <Typography color="#cbd5e1" fontSize="1.5rem">
          {companyLocation}
        </Typography>
      </div>
    </TimelineItem>
  );
};

const TimelineItem = styled.div`
  position: relative;
  padding-bottom: 3em;
  padding-left: 2rem;

  &:last-child {
    padding-bottom: 0;
  }

  &::before {
    content: '';
    background-color: var(--color-primary);
    display: block;
    position: absolute;
    top: 2em;
    left: 0em;
    width: 0.125em;
    height: 100%;
    transform: translateX(-50%);
  }
`;

const TimelineDate = styled.time`
  display: flex;
  align-items: center;
  position: relative;

  /* create a dot in the timeline */
  & > p::before {
    content: '';
    position: absolute;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    top: 50%;
    left: -1.9em;
    transform: translateY(-50%);
    background-color: var(--color-primary);
    margin-right: 0.5em;
  }
`;

export const EmploymentTimeline = () => {
  return (
    <>
      <div>
        <SingleTimelineItem
          timeDuration="Oct 2023 - Present"
          companyName="Confidential (Stealth Mode Company)"
          companyLocation="Minnesota, USA"
          designation="Frontend Developer"
        />

        <SingleTimelineItem
          timeDuration="Nov 2021 - Oct 2023"
          companyName="Valkyrit IT Limited"
          companyLocation="Dhaka, Bangladesh"
          designation="Backend Engineer"
        />

        <SingleTimelineItem
          timeDuration="Mar 2021 - May 2021"
          companyName="Manaknight Digital"
          companyLocation="Toronto, Ontario, Canada"
          designation="Frontend Developer"
          employmentType="Part-time"
        />
        <SingleTimelineItem
          timeDuration="Nov 2020 - Oct 2021"
          companyName="Wikiance"
          companyLocation="Kolkata, West Bengal, India"
          designation="Frontend Engineer"
        />
      </div>
    </>
  );
};
