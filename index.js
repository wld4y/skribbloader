import * as Gluon from '@gluon-framework/gluon';

const Window = await Gluon.open('https://gluonjs.org', {
  onLoad: () => alert('Hello from Node onLoad!')
});