import React, { useEffect } from 'react';

const ListScreen = (props) => {
  useEffect(() => {
    let timer;
    window.addEventListener('scroll', () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        console.log('scroll event');
      }, 500);
    });
  }, []);

  return (
    <div style={{ height: 1000 }}>
      <p>ListScreen</p>
      <button onClick={props.clickConfirm}>Confirm</button>
    </div>
  );
};

export default ListScreen;
