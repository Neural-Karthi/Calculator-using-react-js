import React,{useState} from 'react'
import './Calculator.css'
function Calculator() {
    const [data,setdate]=useState("");
    const [resultvalue,setresult]=useState("")
    const [isChecked, setIsChecked] = useState(false);
    const eventhandler=e=>{
        setdate(e.target.value)
    }
    const result=e=>{
        switch (e.detail) {
            case 1: {
                if(isNaN(data)){
                    setresult(eval(data))
                }
                break;
              }
              case 2: {
                setresult('');
                setdate('')
                setdate(eval(data))
                break;
              }
              default: {
                break;
              }
         };
    }
    const handleOnChange = () => {
        setIsChecked(!isChecked);
        let check=isChecked;
        if(check==true){
            document.getElementById('outer_border').style.backgroundColor='#243441';
            document.getElementById('outer_border').style.borderColor='#243441';
            document.getElementById('item_name').style.color='white';
            document.getElementById('inputedValue').style.color='white';
            document.getElementById('result_box').style.color='white';
        }
        else if(check!=true){
            document.getElementById('outer_border').style.backgroundColor='white';
            document.getElementById('outer_border').style.borderColor='white';
            document.getElementById('item_name').style.color='black';
            document.getElementById('inputedValue').style.color='black';
            document.getElementById('result_box').style.color='black';
        }
    }
  return (
    <div>
        <center>
            <div className='outer_border' id='outer_border' >
                <div className='row_1'>
                    <div style={{display:'flex',alignItems:'center'}}>
                        <h2 className='item_name' id='item_name'>Calculator</h2>
                        <label class="switch">
                              <input type="checkbox"   checked={isChecked} onChange={handleOnChange}/>
                              <span class="slider round"></span>
                        </label>
                    </div>
                     <input type="text" name="inputedValue" id="inputedValue" className="Inputed_value" value={data} onChange={eventhandler}/>
                     <h2 className='result_box' id="result_box">{resultvalue}</h2>
                </div>
               <div className='table_outer'>
                     <table className="table">
                        <tr>
                            <td><button className="button_change" onClick={e=>{setdate('');setresult('')}}>AC</button></td>
                            <td><button className="button_change" onClick={e=>setdate(data.substring(0,data.length-1))}>EDIT</button></td>
                            <td><button className="button_change" name="symquotient" onClick={e=>setdate(data+'%')}>%</button></td>
                            <td><button className="button_change" name="symreminder" onClick={e=>setdate(data+'/')}>/</button></td>
                        </tr>
                        <tr>
                            <td><button className="button_" name="num7" onClick={e=>setdate(data+7)}>7</button></td>
                            <td><button className="button_" name="num8" onClick={e=>setdate(data+8)}>8</button></td>
                            <td><button className="button_" name="num9" onClick={e=>setdate(data+9)}>9</button></td>
                            <td><button className="button_change" name="symmultiplication" onClick={e=>setdate(data+'*')}>x</button></td>
                        </tr>
                        <tr>
                            <td><button className="button_" name="num4" onClick={e=>setdate(data+4)}>4</button></td>
                            <td><button className="button_" name="num5" onClick={e=>setdate(data+5)}>5</button></td>
                            <td><button className="button_" name="num6" onClick={e=>setdate(data+6)}>6</button></td>
                            <td><button className="button_change" name="symminus" onClick={e=>setdate(data+'-')}>-</button></td>
                        </tr>
                        <tr>
                            <td><button className="button_" name="num1" onClick={e=>setdate(data+1)}>1</button></td>
                            <td><button className="button_" name="num2" onClick={e=>setdate(data+2)}>2</button></td>
                            <td><button className="button_" name="num3" onClick={e=>setdate(data+3)}>3</button></td>
                            <td><button className="button_change" name="symplus" onClick={e=>setdate(data+'+')}>+</button></td>
                        </tr>
                        <tr>
                            <td><button className="button_" name="num0" onClick={e=>setdate(data+0)}>0</button></td>
                            <td><button className="button_" name="symminus" onClick={e=>setdate(data+'.')}>.</button></td>
                            <td colSpan={2}><button className="button_result" onClick={result}>=</button></td>
                        </tr>
                     </table>
               </div>
            </div>
        </center>
    </div>
  )
}
export default Calculator
