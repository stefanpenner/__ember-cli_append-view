import Ember from 'ember';
import SomeView from './some';

export default Ember.View.extend({
  didInsertElement() {
    SomeView.create({
      container: this.container
    }).append();
  }
})
