/*  
 * Bluetooth Test - Processing Side (In Chrome)
 * Arduino to HM10 module to Google Chrome
 * https://www.amazon.com/gp/product/B06WGZB2N4/ref=ppx_yo_dt_b_asin_title_o01_s00?ie=UTF8&psc=1
 * 
 * p5.ble.js
 https://yining1023.github.io/p5ble-website/
 
 * Paulus Tanuri
 * https://www.paulustanuri.com
 * https://www.youtube.com/channel/UCLdHpE6Qb-QaIo7O_J-VwEg
 * 
 */
 
 //globals
let blueToothCharacteristic;//this is a blu
let receivedValue = "";

let blueTooth;
let isConnected = false;

let brightness = 15;


function setup() {

  createCanvas(windowWidth, windowHeight);
  
  
  // Create a p5ble class
  console.log("setting up");
  blueTooth = new p5ble();

  connectButton = createButton('Connect');
  connectButton.mousePressed(connectToBle);
  connectButton.position(15, 15);
  
  disconnectButton = createButton('Disconnect');
  disconnectButton.mousePressed(disconnectBle);
  disconnectButton.position(15, 15);
  
  inputMsg = createInput("Hello");
  inputMsg.position(15, 80);  
  buttonSubmitMsg = createButton('submit');
  buttonSubmitMsg.position(15 + inputMsg.width + 5, 80);
  buttonSubmitMsg.mousePressed(SubmitMessage);
  
  inputSpeed = createInput(25);
  inputSpeed.size = 3;
  inputSpeed.position(15,140);
  
  const buttonSubmitSpeed = createButton('submit');
  buttonSubmitSpeed.mousePressed(SubmitSpeed);
  buttonSubmitSpeed.position(15 + inputSpeed.width + 5,140);

  inputDelay = createInput(5000);
  inputDelay.size = 5;
  inputDelay.position(15,200);
  const buttonSubmitDelay = createButton('submit');
  buttonSubmitDelay.mousePressed(SubmitDelay);
  buttonSubmitDelay.position(15 + inputDelay.width + 5,200);
  
  inputClear = createInput(2000);
  inputClear.size = 5;
  inputClear.position(15,260);
  const buttonInputClear = createButton('submit');
  buttonInputClear.mousePressed(SubmitAutoClear);
  buttonInputClear.position(15 + inputClear.width + 5,260);
  
  sliderBrightness = createSlider(0,15,15,1);
  sliderBrightness.position(15,320);
  
  
  
  
  
  const buttonToggleInAnim = createButton('Toggle In Animation');
  buttonToggleInAnim.mousePressed(InAnim);
  buttonToggleInAnim.position(350,80);
  
  const buttonToggleOutAnim = createButton('Toggle Out Animation');
  buttonToggleOutAnim.mousePressed(OutAnim);
  buttonToggleOutAnim.position(350, 110);
  
  const buttonToggleInvert = createButton('Toggle Display Invert');
  buttonToggleInvert.mousePressed(Invert);
  buttonToggleInvert.position(350, 140);
  
  const buttonSave = createButton('Save Last Settings');
  buttonSave.mousePressed(SaveSettings);
  buttonSave.position(350, 170);
  
  const buttonReset = createButton('Reset Hardware');
  buttonReset.mousePressed(ResetHardware);
  buttonReset.position(350, 200);
  
  receivedMessage = createDiv();
  receivedMessage.position(350,260);
  receivedMessage.style('border:1px solid #000000');
  receivedMessage.style('width:400px');
  receivedMessage.style('height:200px');
  receivedMessage.style('overflow:auto');
  receivedMessage.style('padding:5px 5px 5px 5px');
  receivedMessage.style('background-color:#FFFFFF');
  receivedMessage.html('test');
  const buttonClear = createButton('Clear Message');
  buttonClear.mousePressed(clearMessage);
  buttonClear.position(350, 480);
}


function draw() {
  drawScreen();
}
