function Invert(){
  sendData("*V~");
}

function InAnim(){
  sendData("*I~");
}

function OutAnim(){
  sendData("*O~");
}

function SaveSettings(){
  sendData("*W~");
}

function ResetHardware(){
  sendData("*R~");
}

function SubmitAutoClear(){
  const val = inputClear.value();
  sendData("*C"+ val + "~");
}

function SubmitSpeed(){
  const val = inputSpeed.value();
  sendData("*S"+ val + "~");
}


function SubmitDelay(){
  const val = inputDelay.value();
  sendData("*P"+ val + "~");
}

function SubmitMessage(){
  const msg = inputMsg.value();
  sendData("*M"+ msg + "~");
}

function disconnectBle(){
  blueTooth.disconnect();
}

function clearMessage(){
  receivedValue = "";
}
