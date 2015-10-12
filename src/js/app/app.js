'use strict';

class App {
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
    this.renderEngine.setup();
    this.entityEngine.setup();
    this.resize();
  };

  _bindEvents () {
    window.addEventListener('resize', this.resize.bind(this));
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
