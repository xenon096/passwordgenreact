import { useEffect, useState } from "react"

function App(){

  const char="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const num="1234567890"
  const spl="!@#$%^&*()"
  

  const [gen,setGen]=useState("");
  const [length,setLength]=useState(8);
  const [numbers,setNum]=useState(false);
  const [specials,setSpl]=useState(false);
  const handleClick=()=>{
    let pass="";
    let usable=""+char;


    if(numbers){
      usable+=num;
    }

  
  
    if(specials){
      usable+=spl;
    }
  

    for(let i=0;i<length;i++){
      const index=Math.floor(Math.random()*usable.length);
      pass+=usable[index];
    }
    setGen(pass);

  }
  const handleNum=(e)=>{
    setNum(e.target.checked); //numbers
  }
  const handleSpl=(e)=>{
    setSpl(e.target.checked); //special char
  }
  const handleLength=(e)=>{
    setLength(e.target.value); //length
  }

  
  useEffect(()=>{ //for running handleClick everytime page loads
    handleClick();
  },[length,numbers,specials])// handleClick() is called whenever dependencies(length/numbers/specials) changes


  const handleCopy=()=>{
    navigator.clipboard.writeText(gen);  //navigator has clipboard function, writegen writes the data in gen to clipboard
    alert("Password copied to clipboard");
  }


  return(
  <div className="bg-gray-900 h-screen py-16 flex items-center justify-center">
    <div className="container mx-auto bg-gray-700 p-4 rounded-2xl flex flex-col items-center gap-4">
      <h1 className="text-center text-white text-2xl font-bold">Password Generator</h1>

      <div className="flex items-center">{/*div for generated password and copy button  */}
        <input type="text" className=" bg-white rounded-l-sm flex px-16 py-1" value={gen}/>
        <button className="cursor-pointer bg-blue-600 text-white px-2 py-1 rounded-r-sm" onClick={handleCopy}>Copy</button>
        
      </div>
      
      
      
      <div className="flex items-center gap-2">  {/*div class for range and checkbox */}
        <input type="range" min={8} max={16} value={length} onChange={handleLength} className="cursor-pointer"/>
        <p className="text-white font-bold">{length}</p>
        <input type="checkbox" id="numbers" className="text-white cursor-pointer" checked={numbers} onChange={handleNum}/><label htmlFor="numbers">Numbers</label>
        <input type="checkbox" id="specials" className="text-white cursor-pointer" checked={specials} onChange={handleSpl}/><label htmlFor="specials">Special Characters</label>
      </div>
      
      
      <button className="text-white bg-green-500 px-2 py-1 rounded-sm 
      transition delay-150 duration-200 ease-in-out hover:bg-green-600 hover:scale-110"
      onClick={handleClick}>Generate</button>
    </div>
  </div>)
}
export default App