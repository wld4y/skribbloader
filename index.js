import * as Gluon from '@gluon-framework/gluon';

const Window = await Gluon.open('https://youtube.com', {
  onLoad: () => alert('Hello from Node onLoad!')
});