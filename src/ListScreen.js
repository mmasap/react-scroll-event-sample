import React, { useEffect } from 'react';

const ListScreen = (props) => {
  useEffect(() => {
    let timer;
    const scrollEvent = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        console.log('scroll event');
      }, 500);
    };
    window.addEventListener('scroll', scrollEvent);
    return () => window.removeEventListener('scroll', scrollEvent);
  }, []);

  return (
    <div style={{ height: 1000 }}>
      <p>ListScreen</p>
      <button onClick={props.clickConfirm}>Detail</button>
    </div>
  );
};

export default ListScreen;
