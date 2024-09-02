import React, { useState } from 'react';

function App() {
  const [position, setPosition] = useState({ top: 100, left: 100 });
  const getRandomPosition = () => {
  const randomTop = Math.floor(Math.random() * (window.innerHeight - 100));
  const randomLeft = Math.floor(Math.random() * (window.innerWidth - 100));
  return { top: randomTop, left: randomLeft };
  };
  const handleMouseEnter = () => {
  const newPosition = getRandomPosition();
  setPosition(newPosition);
  };
  return (
	<div
    	onMouseEnter={handleMouseEnter}
    	style={{ position: 'absolute',
    	top: `${position.top}px`,
    	left: `${position.left}px`,
    	width: '100px', height: '100px',
    	backgroundColor: 'rgb(160, 160, 160)',
    	borderRadius: '50%',
    	boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2), 0 4px 10px rgba(0, 0, 0, 0.3)',
    	display: 'flex',
    	justifyContent: 'center',
    	alignItems: 'center',
    	color: 'white',
    	fontSize: '16px',
    	textAlign: 'center',
    	cursor: 'pointer',
    	transition: 'all 0.3s ease',}}
    	>
    	Hover me !
	</div>
  );
}

export default App;
