import React from 'react';
import Counter from './components/counter';

const style={
  display: 'flex',
  justifyContent:'center'
}
const style1={
  width: '50vh',
  height: '40vh',
  marginTop:'20vh',
  border:'1px solid violet',
  borderRadius:'6px',
  background:'#',
  display: 'flex',
  justifyContent:'center'
}
function App() {
  return (
    <div style={style}>
      <div style = {style1}>
        < Counter />
      </div>
    </div>
  );
}

export default App;
