import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement() {
    alert('SomeView was inserted, via append');
  }
});
