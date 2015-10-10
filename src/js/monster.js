'use strict';

class Monster{
  constructor(conf){
    Object.assign(this, conf);
  };

  setup(){
    this.createGrid();
  };

  createGrid(){
    
  };

  run(){
    console.log('>', this.size);
  };
};

window.app = new Monster({
  size:{
    w: 10,
    h: 10
  }
});

app.render(document.body)
app.setup();
app.run();
