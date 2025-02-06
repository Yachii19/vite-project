import './App.css';

interface InformationBoxProps {
  boxContent: string;
  boxColor: string;
  boxWidth: string;
  boxHeight: string; 
  borderColor: string;
}

function InformationBox({ boxContent, boxColor, boxWidth, boxHeight, borderColor }: InformationBoxProps) {
  return (
    <div className='main-container'>
      <div className='name'>John Rein Vinuya</div>
      <div style={{
        width: boxWidth,
        height: boxHeight,
        backgroundColor: boxColor,
        border: `2px solid ${borderColor}`,
      }} className='box-container'>
        <div className='box-content'>{boxContent}</div>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <InformationBox 
        boxContent="CPEITEL" 
        boxColor="#bbdefb" 
        boxWidth="200px" 
        boxHeight="200px" 
        borderColor="black" 
      />
    </>
  );
}

export default App;
