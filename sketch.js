let img; // Declare variable 'img'.

let acplocation = 470;
let qteklocationX = 726;
let qteklocationY = 12;

function setup() {
    createCanvas(1200, 800);
    background(256);
    acp = loadImage('assets/ACP.png'); // Load the image
    layout = loadImage('assets/layout.png'); // Load the image
    qtek = loadImage('assets/QTEK.gif');

    if (Controller && Controller.supported) {
        Controller.search();
      
        window.addEventListener('gc.button.press', function(event) {
          if (event.detail.value > 0.1) {
            console.log(event.detail);
            if (event.detail.name == 'FACE_2' || event.detail.name == 'MISCBUTTON_5') { 
              // A button or LT
              //ctrlR += 5;
            } else if (event.detail.name == 'FACE_1' || event.detail.name == 'MISCBUTTON_6') { 
              // B button or RT
              //ctrlR -= 5;
            } else if (event.detail.name.indexOf('DPAD_')>-1) { 
              // arrows
              dpad_dir = event.detail.name.replace('DPAD_', '')
              qteklocationX += (dpad_dir == 'RIGHT') ? 5 : 
                             (dpad_dir == 'LEFT') ? -5 : 0;
              qteklocationY += (dpad_dir == 'DOWN') ? 5 : 
                             (dpad_dir == 'UP') ? -5 : 0;
            } else if (event.detail.name.indexOf('MISCBUTTON_')>-1) { 
              // xbox
              dpad_dir = event.detail.name.replace('MISCBUTTON_', '')
              ctrlX += (dpad_dir == '2') ? 10 : 
                             (dpad_dir == '3') ? -10 : 0;
              ctrlY += (dpad_dir == '1') ? 10 : 
                             (dpad_dir == '4') ? -10 : 0;
            }
          }
        }, false);
      }    



}


function draw() {
    background(256);
    image(layout, 0, 6);

    image(qtek, qteklocationX, qteklocationY);
    // if (qteklocation < 726) {
    //     qteklocation += 5;
    // }

    image(acp, acplocation, 2, 254, 70);
    // if (acplocation < 470) {
    //     acplocation += 5;
    // }
   
    //image(layout, 0, 6);
    



}
