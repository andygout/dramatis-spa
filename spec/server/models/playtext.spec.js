const expect = require('chai').expect;
const proxyquire = require('proxyquire');
const sinon = require('sinon');

const Character = require('../../../dist/models/character');

const dbQueryFixture = require('../../fixtures/db-query');

const sandbox = sinon.sandbox.create();

let stubs;
let instance;

const CharacterStub = function () {

	this.validate = sinon.stub();

};

beforeEach(() => {

	stubs = {
		cypherQueriesPlaytext: {
			getShowQuery: sandbox.stub().returns('getShowQuery response')
		},
		cypherQueriesShared: {
			getListQuery: sandbox.stub().returns('getListQuery response')
		},
		dbQuery: sandbox.stub().resolves(dbQueryFixture),
		Character: CharacterStub
	};

	instance = createInstance();

});

afterEach(() => {

	sandbox.restore();

});

const createSubject = (stubOverrides = {}) =>
	proxyquire('../../../dist/models/playtext', {
		'../database/cypher-queries/playtext': stubs.cypherQueriesPlaytext,
		'../database/cypher-queries/shared': stubs.cypherQueriesShared,
		'../database/db-query': stubOverrides.dbQuery || stubs.dbQuery,
		'./character': stubOverrides.Character || stubs.Character
	});

const createInstance = (stubOverrides = {}, props = { name: 'Hamlet', characters: [{ name: 'Hamlet' }] }) => {

	const subject = createSubject(stubOverrides);

	return new subject(props);

};

describe('Playtext model', () => {

	describe('constructor method', () => {

		describe('characters property', () => {

			it('will assign as empty array if not included in props', () => {

				const props = { name: 'Hamlet' };
				instance = createInstance({}, props);
				expect(instance.characters).to.deep.eq([]);

			});

			it('will assign as array of characters if included in props, filtering out those with empty string names', () => {

				const CharacterStubOverride = function () { return sinon.createStubInstance(Character); };
				const props = { name: 'Hamlet', characters: [{ name: 'Hamlet' }, { name: '' }] };
				instance = createInstance({ Character: CharacterStubOverride }, props);
				expect(instance.characters.length).to.eq(1);
				expect(instance.characters[0].constructor.name).to.eq('Character');

			});

		});

	});

	describe('show method', () => {

		it('will get show data', done => {

			instance.show().then(result => {
				expect(stubs.cypherQueriesPlaytext.getShowQuery.calledOnce).to.be.true;
				expect(stubs.cypherQueriesPlaytext.getShowQuery.calledWithExactly()).to.be.true;
				expect(stubs.dbQuery.calledOnce).to.be.true;
				expect(stubs.dbQuery.calledWithExactly(
					{ query: 'getShowQuery response', params: instance }
				)).to.be.true;
				expect(result).to.deep.eq(dbQueryFixture);
				done();
			});

		});

	});

	describe('list method', () => {

		it('will get list data', done => {

			const subject = createSubject();
			subject.list().then(result => {
				expect(stubs.cypherQueriesShared.getListQuery.calledOnce).to.be.true;
				expect(stubs.cypherQueriesShared.getListQuery.calledWithExactly('playtext')).to.be.true;
				expect(stubs.dbQuery.calledOnce).to.be.true;
				expect(stubs.dbQuery.calledWithExactly({ query: 'getListQuery response' })).to.be.true;
				expect(result).to.deep.eq(dbQueryFixture);
				done();
			});

		});

	});

});
