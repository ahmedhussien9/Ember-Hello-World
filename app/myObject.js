/**
 * Example of Ember Object
 */

import Ember from 'ember';

export default function () {
  const Light = Ember.Object.extend({
    init() {
      alert('The isOn property is defaulted to' + this.get('isOn'));
    },
    isOn: false,
  });

  /**
   * adding new property to existing Object
   */

  Light.reopen({
    color: 'yellow',
  });

  /**
   * Another approach for adding property or static methods
   */

  Light.reopenClass({
    wattage: 80,
  });

  /**
   * Taking a new instance from the Light Object
   */

  const blub = Light.create();
  console.log(blub.get('color'));
  console.log(Light.wattage);
}

/**
 * This is a module that we can now import to any file in our Ember application.
 */
