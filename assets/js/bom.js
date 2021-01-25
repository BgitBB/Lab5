/*  
Here is the exercise on working on the remaining bom method 
Location , Navigator , screen , Window 
Follow the Instruction on the comments 
1. Declare the UI Variables for selecting on the elements 
2. Use the innerHTML property to display the result on each element 
3. The Text  of the elements will lead you what bom information is required 
Adding Extra is Possible if you want to explore more ...
Good Luck !!! 
*/




// Define UI Variables  here 
const all = document.querySelectorAll(".badge");

const href = all[0];
const protocol = all[1];
const host = all[2];
const port = all[3];
const hostname = all[4];
const pathname = all[5];
const origin = all[6];


const appname = all[7];
const appversion = all[8];
const paltfrom = all[9];
const language = all[10];
const cookieEnabled = all[11];
const appCodeName = all[12];
const product = all[13];
const vendor = all[14];
const onLine = all[15];
const hardwareConcurrency = all[16];

const height = all[17];
const width = all[18];
const pixelDepth = all[19];
const availHeight = all[20];
const availWidth = all[21];
const colorDepth = all[22];

const length = all[23];
const state = all[24];

// const href = document.querySelector(".badge");
// const protocol = document.querySelector(".badge");
// const host = document.querySelector(".badge");
// const hostname = document.querySelector(".badge");

// const appname = document.querySelector(".badge");








// Display the BOM Information on the innerHTML of the elements
href.innerHTML = location.href;
protocol.innerHTML = location.protocol;
host.innerHTML = location.host;
port.innerHTML = location.port;
hostname.innerHTML = location.hostname;
pathname.innerHTML = location.pathname;
origin.innerHTML = location.origin;

appname.innerHTML = navigator.appName;
appversion.innerHTML = navigator.appVersion;
paltfrom.innerHTML = navigator.platform;
language.innerHTML = navigator.language;
cookieEnabled.innerHTML = navigator.cookieEnabled;
appCodeName.innerHTML = navigator.appCodeName;
product.innerHTML = navigator.product;
vendor.innerHTML = navigator.vendor;
onLine.innerHTML = navigator.onLine;
hardwareConcurrency.innerHTML = navigator.hardwareConcurrency;

height.innerHTML = screen.height;
width.innerHTML = screen.width;
pixelDepth.innerHTML = screen.pixelDepth;
availHeight.innerHTML = screen.availHeight;
availWidth.innerHTML = screen.availWidth;
colorDepth.innerHTML = screen.colorDepth;

length.innerHTML = history.length;
state.innerHTML = history.state;









// Reload Icon

const rIcon = document.querySelector(".fa-retweet");

rIcon.addEventListener('click', function (){
    location.reload();
})