import React from 'react';

const DetailScreen = (props) => {
  return (
    <div style={{ height: 1000 }}>
      <p>DetailScreen</p>
      <button onClick={props.clickBack}>Back</button>
    </div>
  );
};

export default DetailScreen;
