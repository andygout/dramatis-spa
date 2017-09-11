const expect = require('chai').expect;

beforeEach(() => {

	instance = createInstance();

});

const createInstance = (props = { name: 'Hamlet, Prince of Denmark' }) => {

	const subject = require('../../../dist/models/role');

	return new subject(props);

};

describe('Role model', () => {

	describe('constructor method', () => {

		describe('characterName property', () => {

			it('will assign as null if not included in props', () => {

				expect(instance.characterName).to.eq(null);

			});

			it('will assign as null if included in props but value is empty string', () => {

				instance = createInstance({ name: 'Hamlet, Prince of Denmark', characterName: '' });
				expect(instance.characterName).to.eq(null);

			});

			it('will assign value if included in props and value is string with length', () => {

				instance = createInstance({ name: 'Hamlet, Prince of Denmark', characterName: 'Hamlet' });
				expect(instance.characterName).to.eq('Hamlet');

			});

		});

	});

});
