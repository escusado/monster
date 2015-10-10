class ThreeEngine(){
  constructor(conf){
    Object.assign(this, conf);
  };

  setup(){
    console.log('> ThreeSetup');
  };

  update(){
    console.log('> ThreeUpdate');
  }
};
