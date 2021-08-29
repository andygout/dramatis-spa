import { expect } from 'chai';

import { getRouteFromModel, getRouteFromPluralisedModel } from '../../../src/lib/get-route';

describe('Get Route module', () => {

	describe('getRouteFromModel function', () => {

		context('route can be acquired by converting model to plural form', () => {

			it('returns model with tailing \'s\' added', () => {

				expect(getRouteFromModel('production')).to.equal('productions');

			});

		});

		context('model requires mapping to acquire route', () => {

			it('returns route', () => {

				const models = [
					{ name: 'awardCeremony', route: 'awards/ceremonies' }
				];

				models.forEach(model => {

					expect(getRouteFromModel(model.name)).to.equal(model.route);

				});

			});

		});

	});

	describe('getRouteFromPluralisedModel function', () => {

		context('pluralised model is the same as route', () => {

			it('returns pluralised model', () => {

				expect(getRouteFromPluralisedModel('productions')).to.equal('productions');

			});

		});

		context('pluralised model requires mapping to acquire route', () => {

			it('returns route', () => {

				const models = [
					{ pluralisedName: 'awardCeremonies', route: 'awards/ceremonies' }
				];

				models.forEach(model => {

					expect(getRouteFromPluralisedModel(model.pluralisedName)).to.equal(model.route);

				});

			});

		});

	});

});
