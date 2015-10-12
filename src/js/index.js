'use strict';

let onDomReady = function onDomReady() {

  window.app = new App({
    gridSize : {
      w: 10,
      h: 10
    }
  });

  app.render(document.getElementsByClassName('wrapper')[0]);
  app.setup();
  app.run();
};

//on dom ready
if (document.readyState != 'loading'){
  onDomReady();
} else {
  document.addEventListener('DOMContentLoaded', onDomReady);
}
