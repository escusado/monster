'use strict';

class SerpentityEngine {
  constructor(conf){
    Object.assign(this, conf);
  };

  setup(){
    console.log('> SerpSetup');
  };

  resize(){

  };

  update(){
    console.log('> SerpUpdate');
  }
};
