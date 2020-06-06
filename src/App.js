import React,{useState, useEffect} from 'react';
import logo from './logo.svg';
// import './App.css';
import styled from 'styled-components';

import './App.css'
import Testp from './components/P'
import ThemeSwitcher from 'react-css-vars'
import brain from 'brain.js';




const lightTheme = {
  fon: '#FFFFFF',
  p: '#0D0C22',
  titel:'#0D0C22',
  Accent:'#A261D6',
  Progress:'#F3F3F4',
  ElAccent:'#FFFFFF',
  Substrates:'#F3F3F4',
  SubstratesP:'#3D3D4E',
  Accenbutton:'#F3F3F4',
  Secondarybutton:'#3D3D4E',
  SecondarybuttonLine:'#DBDBDE',

  
}
 
const darkTheme = {
  fon: '#131417',
  p: 'white',
  titel:'rgba(255, 255, 255, 0.95)',
  Accent:'#FFDD2D',
  Progress:'#252830',
  ElAccent:'#444857',
  Substrates:'#2C303A',
  SubstratesP:'#D5D6D8',
  Accenbutton:'#444857',
  Secondarybutton:'#AAABAE',
  SecondarybuttonLine:'#AAABAE',
  
}



const App =() =>{

const [basicTheme, setBasicTheme]= useState(true)



useEffect(() => {

// console.log(net.train)

})

const [primer, setPrimer] = useState(null);

// const [resultat, setResultat] = useState(null);

const [vvodim, setVvodim] = useState(null);




function test(){


  const trainingData = [
    {input: ["Общие положения","Должностные обязанности","Права"], output: "Инструкция"},
    {input: ["Договор","Положение","Так то"], output: "Другое"},
    {input: ["Права","Должностные обязанности","Ответственность"], output: "Инструкция"},
    {input: ["Права","Должностные обязанности","Общие положения"], output: "Инструкция"},
    {input: ["Договор","тяжело","тяжело"], output: "Другое"},
  ];
  
  const lstm = new brain.recurrent.LSTM();
  const result = lstm.train(trainingData, {
    iterations: 1500,
    log: details => console.log(details),
    errorThresh: 0.011
  });
  
  const run1 = lstm.run(["Общие положения","Права","Должностные обязанности"]);

  



console.log('Итак: ' +  run1);
// setResult(run1)
}





















// var brain = require('brain.js');
// var net = new brain.recurrent.LSTM();

// var net = new brain.recurrent.LSTM();

// net.train([
//   {input: "Саша", output: 1},
//   {input: "Паша", output: 1},
//   {input: "Костя", output: 0},

// ]
// );


        
// var output = net.run(["Ваша"]);  // [0.987]
// console.log(output);









const changeTeme = ()=>{ 

  if(basicTheme == false){
    setBasicTheme(true)
  }else if(basicTheme == true){
    setBasicTheme(false)

  }
}


  return (
<>
    {/* <DarkTheme light={lightTheme} dark={darkTheme} /> */}

    <ThemeSwitcher theme={basicTheme ? lightTheme : darkTheme}>
    <div  className="App">
      <header className="App-header ">
       <div className="Substrates">
       <Testp/>

{/* <h2> {resultat} </h2> */}
       </div>

       <p>Что есть</p>
<textarea onChange={e =>  setPrimer(e.target.value)}></textarea>
<p>Что должно быть</p>
{/* <textarea onChange={e =>  setResult(e.target.value)}></textarea> */}
      
<textarea onChange={e =>  setVvodim(e.target.value)}></textarea>



        <h2> привет</h2>
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       
      </header>
     
      <button className="FirstAccentButton"  onClick={()=>test()}>Запустить сеть</button>
      <button className="SecondAccentButton" >close</button>
      <button className="buttonSecondary"  onClick={() => changeTeme()}>close</button>
    </div>
    </ThemeSwitcher>
    </>
  );
}

export default App;












// onClick={()=> changeTeme()}







// const [themecolor, setThemecolor]=useState(true)
// const changeTeme = () =>{

//   if(themecolor == true){
//      // Черная тема
//     gsap.to("p", {duration: 0, css: { color: "#3D3D4E"}});
//     gsap.to(["h1","h2", "h3", "h4", "h5"], {duration: 0, css: { color: "#0D0C22"}});
//     gsap.to("body", {duration: 0, css: { background: "#FFFFFF"}});
//     gsap.to(".buttonSecondary", {duration: 0, css: { border: "1px solid #AAABAE", color: "#3D3D4E"}});
//     gsap.to(".Substrates", {duration: 0, css: { background: "#F3F3F4"}});
//     setThemecolor(false)
//   }

//   else  if(themecolor == false){
  
// // Светлая тема
//     gsap.to("p", {duration: 0, css: { color: "rgba(255, 255, 255, 0.8)"}});
//     gsap.to(["h1","h2", "h3", "h4", "h5"], {duration: 0, css: { color: "rgba(255, 255, 255, 0.95)"}});
//     gsap.to("body", {duration: 0, css: { background: "#131417"}});
//     gsap.to(".buttonSecondary", {duration: 0, css: { border: "1px solid #DBDBDE", color: "#D5D6D8"}});
//     gsap.to(".Substrates", {duration: 0, css: { background: "#2C303A"}});
//     setThemecolor(true)
//   }
// }
