'use strict';

let onDomReady = function onDomReady() {

  window.engine = new Engine({
    gridSize : {
      w: 10,
      h: 10
    }
  });

  engine.render(document.getElementsByClassName('wrapper')[0]);
  engine.setup();
  engine.run();
};

//on dom ready
if (document.readyState != 'loading'){
  onDomReady();
} else {
  document.addEventListener('DOMContentLoaded', onDomReady);
}
