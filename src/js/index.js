'use strict';

let onDomReady = function onDomReady() {

  let renderEngine = new ThreeEngine({

      }),
      entityEngine = new SerpentityEngine({

      });

  window.app = new App({renderEngine, entityEngine});
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
