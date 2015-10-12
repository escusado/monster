'use strict';

class ThreejsEngine extends TinyDispatcher {
  constructor(conf){
    super();
    Object.assign(this, conf);

    this.time = 0;

    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 20000);
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer({antialias:true});
    this.element = this.renderer.domElement;
  };

  resize (newSize) {
    this.camera.aspect = newSize.w / newSize.h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(newSize.w, newSize.h);
  };

  animate () {
    this.dispatch('beforeUpdate');
    let now = new Date().getTime(),
        updateData = {
            now: now,
            dt: now - (this.time || now)
        };

    this.time = now;

    this.dispatch('update', {
      data: updateData
    });

    this.renderer.render( this.scene, this.camera );

    this.dispatch('afterUpdate');
    requestAnimationFrame(this.animate.bind(this));
  };

};
