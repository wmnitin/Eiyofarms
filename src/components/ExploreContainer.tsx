import React from 'react';
import './ExploreContainer.css';
import rooffarmins from '../assets/rooffarmins.jpg';

interface ContainerProps {
  name: string;
  isHome: boolean;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name, isHome }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <p style={{marginTop: '10px'}}>Have you ever wanted to grow your own vegetables or herbs at home but were unable to do so for lack of space? If so, hydroponic gardening could be the answer you’ve been looking for.</p>
      {isHome && <img src={rooffarmins}  />}
      <p style={{marginTop: '10px'}}>Rooftop hydroponic greenhouse gardens have emerged in cities because urban areas often lack space on the ground for gardening -- the world's most popular hobby. Where there is free space suitable for gardening, development and building is not far behind due to the commercial opportunities presented</p>
      {/* <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p> */}
    </div>
  );
};

export default ExploreContainer;
