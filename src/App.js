import './App.css';
import React , {useState} from 'react';
function App() {
  const [horizental, sethorizental] = useState(0)
  const [vertical, setvertical] = useState(2)
  const [blur, setblur] = useState(10)
  const [color, setcolor] = useState('rgba(0, 0, 0, 0.5)')
  const [check, setcheck] = useState(false)

  // btn
  const copyBoxShadow = () => {
    const boxShadow = `${check ? 'inset' : ''} ${horizental}px ${vertical}px ${blur}px ${color}`;
    navigator.clipboard.writeText(boxShadow);
    alert('Copied to clipboard');
  };
  return (
    <div className="App">
      <div className='controls' >
      <p className='appName' >Box shadow css generator</p>

        <label>horizontal-offset :</label>
      <input type="range"  min="-200" max="200"  value={horizental}  onChange={(e)=>sethorizental(e.target.value)} />
      
        <label>vertical-offset:</label>
      <input type="range"  min="-200" max="200"  value={vertical}  onChange={(e)=>setvertical(e.target.value)} />
      
        <label>blur-radius :</label>
      <input type="range"  min="0" max="200"  value={blur}  onChange={(e)=>setblur(e.target.value)} />
      
        <label>Color :</label>  <br/>
      <input type="color"  min="0" max="200"  value={color}  onChange={(e)=>setcolor(e.target.value)} />
      
   {/* Switch  */}
              <div className="switch">
                <label>s
                  Outline
                  <input type="checkbox" checked={check} onChange={()=>setcheck(!check)} />
                  <span className="lever"></span>
                  Inset
                </label>
              </div>
      </div>
      <div className='output' >
        <div className='box' style={{boxShadow : ` ${check?"inset":""} ${horizental}px ${vertical}px ${blur}px ${color}`  }}  >
          <p> box-shadow:{horizental}px {vertical}px {blur}px {color}</p>
         <button  className='btn' onClick={copyBoxShadow}>Copy CSS</button>


        </div>



      </div>
    </div>
  );
}

export default App;
