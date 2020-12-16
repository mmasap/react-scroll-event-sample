import { useState } from 'react';
import ListScreen from './ListScreen';
import DetailScreen from './DetailScreen';

const App = () => {
  const [displayDetail, setDisplayDetail] = useState(false);

  if (!displayDetail) {
    return <ListScreen clickConfirm={() => setDisplayDetail(true)} />;
  } else {
    return <DetailScreen clickBack={() => setDisplayDetail(false)} />;
  }
};

export default App;
