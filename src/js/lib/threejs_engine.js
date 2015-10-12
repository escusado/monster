'use strict';

class ThreejsEngine extends Widget {
  constructor(conf){
    Object.assign(this, conf);

    this.time = 0;

    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer({antialias:true});
    this.element = this.renderer.domElement;
  };

  setup(){
    console.log('> ThreeSetup');
  };

  resize (newSize) {
    this.renderer.setSize(newSize.w, newSize.h);
  };

  update(){
    console.log('> ThreeUpdate');
  };

  animate () {
    let now = new Date().getTime(),
        updateData = {
            now: now,
            dt: now - (this.time || now)
        };

    this.time = now;

    this.dispatch('update', {
      data: updateData
    });

    requestAnimationFrame(this.animate.bind(this));
  };

};
