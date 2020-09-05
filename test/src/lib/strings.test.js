import { expect } from 'chai';

import { pluralise } from '../../../src/lib/strings';

describe('Strings module', () => {

	describe('pluralise function', () => {

		context('model has regular plural noun', () => {

			it('returns singular noun with appended \'s\'', () => {

				expect(pluralise('production')).to.equal('productions');

			});

		});

		context('model has irregular plural noun', () => {

			it('returns specific plural noun', () => {

				expect(pluralise('person')).to.equal('people');

			});

		});

	});

});
