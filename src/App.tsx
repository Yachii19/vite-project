import './App.css'

function InformationBox({boxContent, boxColor, boxWidth, boxHeight, borderColor}) {
  return (
    <div className='main-container'>
      <div className='name'>John Rein Vinuya</div>
      <div style={{
        width: boxWidth, 
        height: boxHeight, 
        backgroundColor: 
        boxColor, 
        border: `2px solid ${borderColor}`,

      }} className='box-container'>
        <div className='box-content'>{boxContent}</div>
      </div>
    </div>
   
  )
}

function App() {
  return (
    <>
      <InformationBox boxContent={'CPEITEL'} boxColor={'#bbdefb'} boxWidth={200} boxHeight={200} borderColor={'black'}/>
    </>
  )
}

export default App
