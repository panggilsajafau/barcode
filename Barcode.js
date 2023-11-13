let generateBtn = document.querySelector('.container .generateBtn');
let downloadBtn = document.querySelector('.container .download-btn');
let userInput = document.querySelector('.container .userInput');
let lineColorss = document.querySelector('.container .linecolor input');
let backgroundColor = document.querySelector('.container .backgroundColor input');
let barCodeBox = document.querySelector('.container .barcode-box');
let lineColorBox = document.querySelector('.container .linecolor div');
let backgroundColorBox = document.querySelector('.container .backgroundColor div');
let svg = document.querySelector('.container .barcode-box svg');

let generate =()=>{
if(userInput.value != ''){
  barCodeBox.style.display = 'block';
  generateBtn.style.width = '120px';
  downloadBtn.style.display = 'block';
 JsBarcode('#barcode', userInput.value, {
         background: backgroundColor.value,
         lineColor: lineColorss.value,
 });
} 
}

let getColor =()=>{
 lineColorBox.style.backgroundColor = lineColorss.value;
 backgroundColorBox.style.backgroundColor = backgroundColor.value;
}

let triggerDownload =(imgURI,filename)=>{
 let a = document.createElement('a');
 a.setAttribute('download','image.svg')
 a.setAttribute('href',imgURI);
 a.setAttribute('target','_blank');
 
 a.click();
}

let save =()=>{
 let data = (new XMLSerializer()).serializeToString(svg);   
 let svgBlob = new Blob([data], { type: 'image/svg+xml;charset=utf-8' })
 let url = URL.createObjectURL(svgBlob);

 triggerDownload(url);
}


downloadBtn.addEventListener('click',()=>{
 if(userInput.value != ''){
   save();    
 }      
});
backgroundColor.addEventListener('input',getColor)
lineColorss.addEventListener('input',getColor)
generateBtn.addEventListener('click',generate)