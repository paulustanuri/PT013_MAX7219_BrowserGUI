function drawScreen() {
  textSize(18);
  if (isConnected) {
    background(0, 255, 0);
    text('Connected :)', 100, 20);
    disconnectButton.show();
    connectButton.hide();
  } else {
    background(255, 0, 0);
    textAlign(LEFT, TOP);
    text('Disconnected :/', 90, 20);
    disconnectButton.hide();
    connectButton.show();
  }

  textSize(14);
  text('Message', 15, 60);
  text('Animation Speed (ms)', 15,120);
  text('Delay Between In/Out (ms)', 15,180);
  text('Auto Clear Message (ms, 0 to disable)', 15,240);
  text('Brightness ( ' + sliderBrightness.value() + ' )', 15,300);
  text('Received Value', 350,240);
  receivedMessage.html(receivedValue);
  if(sliderBrightness.value() != brightness && isConnected){
    brightness = sliderBrightness.value();
    sendData("*B" + brightness +"~");
  }
}
