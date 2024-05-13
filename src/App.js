import React, { useState } from 'react'
import "./index.css";
const App = () => {
  const [value,setValue] = useState("");
  const operators=["%","/","+","-","*"];
  // console.log(operators.includes("%"));
  const HandleButtonClick =(e)=>{
    if(e==="C"){
      setValue("");
    }
    else if(e==="<"){
      setValue(value.slice(0,-1));
    }
    else if(e==="="){
      // setValue(eval(value));
      let operand1="";
      let operand2="";
      let operator="";
      let op=false;
      for(let i =0;i<value.length;i++){
        if(operators.includes(value[i]) ){
          console.log(value[i]);
          operator=value[i];
          op=true;
        }
        else if(op){
          operand2+=value[i];
        }
        else{
          operand1+=value[i];
        }
      }
      switch(operator){
        case "+":
          setValue(parseFloat(operand1)+parseFloat(operand2))
          break
          case "-":
            setValue(parseFloat(operand1)-parseFloat(operand2))
            break
            case "/":
              setValue(parseFloat(operand1)/parseFloat(operand2))
              break
              case "%":
                setValue(parseFloat(operand1)%parseFloat(operand2))
                break
                case "*":
                  setValue(parseFloat(operand1)*parseFloat(operand2))
                  break
                  default:
                    setValue("Error");
                  }
                  if(!operator){
                    setValue(value)
                  }
    
    }
    else {
      setValue(value + e)
    }
  }
  return (
    <div class = "container">
      <input type="text" value={value}/>
      <div><button onClick={()=>HandleButtonClick("C")}>C</button><button onClick={()=>HandleButtonClick("<")}>&lt;</button><button onClick={()=>HandleButtonClick("%")}>%</button><button onClick={()=>HandleButtonClick("/")}>/</button></div>
      <div><button onClick={()=>HandleButtonClick("7")}>7</button><button onClick={()=>HandleButtonClick("8")}>8</button><button onClick={()=>HandleButtonClick("9")}>9</button><button onClick={()=>HandleButtonClick("+")}>+</button></div>
      <div><button onClick={()=>HandleButtonClick("4")}>4</button><button onClick={()=>HandleButtonClick("5")}>5</button><button onClick={()=>HandleButtonClick("6")}>6</button><button onClick={()=>HandleButtonClick("-")}>-</button></div>
      <div><button onClick={()=>HandleButtonClick("1")}>1</button><button onClick={()=>HandleButtonClick("2")}>2</button><button onClick={()=>HandleButtonClick("3")}>3</button><button onClick={()=>HandleButtonClick("*")}>*</button></div>
      <div><button onClick={()=>HandleButtonClick("0")}>0</button><button onClick={()=>HandleButtonClick("00")}>00</button><button onClick={()=>HandleButtonClick(".")}>.</button><button onClick={()=>HandleButtonClick("=")}>=</button></div>
    </div>
  )
}

export default App
