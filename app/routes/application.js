import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import { default as math, PI}  from 'math';
const { Route, inject } = Ember;

export default Route.extend(ApplicationRouteMixin, {
    session: inject.service(),

    actions: {
        logout() {
            this.get('session').invalidate();
        }
    },
    beforeModel() {
        this._super(...arguments);
        console.log(math, PI);
    },

    setupController(controller) {
      this._super(...arguments);
      const coords = Ember.getOwner(this).lookup('data:location');
      controller.set('coords', coords);
    }
});