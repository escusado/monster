'use strict';

class Engine {
  constructor (conf) {
    Object.assign(this, conf);

    this.renderEngine = new ThreejsEngine({

    });

    this.entityEngine = new SerpentityEngine({

    });
  };

  render (domNode) {
    domNode.appendChild(this.renderEngine.element);
  };

  setup(){
    this._bindEvents();
    this.entityEngine.setup();
    this.resize();
  };

  _bindEvents () {
    window.addEventListener('resize', this.resize.bind(this));
    this.renderEngine.on('update', this._update.bind(this));
  };

  _update () {

  };

  resize () {
    let newSize = {
      w: window.innerWidth,
      h: window.innerHeight
    };

    this.renderEngine.resize(newSize);
    this.entityEngine.resize(newSize);
  };

  createGrid(){

  };

  run(){
    console.log('>', this.size);
  };
};
