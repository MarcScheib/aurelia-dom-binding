import {inject} from 'aurelia-framework';
import {Model} from './model';

export class Index {
  models = [];

  constructor() {
    for (let i = 0; i < 4; i++)
    {
      let model = new Model(i % 2 == 0 ? 'black' : 'white');
      this.models.push(model);
    }
  }

  showModel() {
    console.log(document.getElementById('list').children[0].au.model.viewModel.model.color);
  }
}
