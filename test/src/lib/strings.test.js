import { expect } from 'chai';

import { pluralise } from '../../../src/lib/strings';

describe('Strings module', () => {

	describe('Pluralise function', () => {

		context('Model has regular plural noun', () => {

			it('returns singular noun with appended \'s\'', () => {

				expect(pluralise('production')).to.eq('productions');

			});

		});

		context('Model has irregular plural noun', () => {

			it('returns specific plural noun', () => {

				expect(pluralise('person')).to.eq('people');

			});

		});

	});

});
