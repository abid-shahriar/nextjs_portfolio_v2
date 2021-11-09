import styled from 'styled-components';

export default function BackgroundAnimation() {
  return (
    <Container className='night'>
      <div className='shooting_star'></div>
      <div className='shooting_star'></div>
      <div className='shooting_star'></div>
      <div className='shooting_star'></div>
      <div className='shooting_star'></div>
      <div className='shooting_star'></div>
      <div className='shooting_star'></div>
      <div className='shooting_star'></div>
      <div className='shooting_star'></div>
      <div className='shooting_star'></div>
      <div className='shooting_star'></div>
      <div className='shooting_star'></div>
      <div className='shooting_star'></div>
      <div className='shooting_star'></div>
      <div className='shooting_star'></div>
      <div className='shooting_star'></div>
    </Container>
  );
}

const Container = styled.div`
  z-index: -1;
`;
