'use strict';

class App{
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
