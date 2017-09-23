const expect = require('chai').expect;
const proxyquire = require('proxyquire');
const sinon = require('sinon');

const Person = require('../../../dist/models/person');

const dbQueryFixture = require('../../fixtures/db-query');

const sandbox = sinon.sandbox.create();

let stubs;
let instance;

const RoleStub = function () {

	this.validate = sinon.stub();

};

const PersonStub = function () {

	this.roles = [new RoleStub];
	this.validate = sinon.stub();

};

const PlaytextStub = function () {

	this.validate = sinon.stub();

};

const TheatreStub = function () {

	this.validate = sinon.stub();

};

beforeEach(() => {

	stubs = {
		cypherQueriesProduction: {
			getShowQuery: sandbox.stub().returns('getShowQuery response')
		},
		cypherQueriesShared: {
			getListQuery: sandbox.stub().returns('getListQuery response')
		},
		dbQuery: sandbox.stub().resolves(dbQueryFixture),
		Person: PersonStub,
		Playtext: PlaytextStub,
		Theatre: TheatreStub
	};

	instance = createInstance();

});

afterEach(() => {

	sandbox.restore();

});

const createSubject = (stubOverrides = {}) =>
	proxyquire('../../../dist/models/production', {
		'../database/cypher-queries/production': stubs.cypherQueriesProduction,
		'../database/cypher-queries/shared': stubs.cypherQueriesShared,
		'../database/db-query': stubs.dbQuery,
		'./person': stubOverrides.Person || stubs.Person,
		'./playtext': stubs.Playtext,
		'./theatre': stubs.Theatre
	});

const createInstance = (stubOverrides = {}, props = { name: 'Hamlet', cast: [{ name: 'Patrick Stewart' }] }) => {

	const subject = createSubject(stubOverrides);

	return new subject(props);

};

describe('Production model', () => {

	describe('constructor method', () => {

		describe('cast property', () => {

			it('will assign as empty array if not included in props', () => {

				const props = { name: 'Hamlet' };
				instance = createInstance({}, props);
				expect(instance.cast).to.deep.eq([]);

			});

			it('will assign as array of cast if included in props, filtering out those with empty string names', () => {

				const PersonStubOverride = function () { return sinon.createStubInstance(Person); };
				const props = { name: 'Hamlet', cast: [{ name: 'Patrick Stewart' }, { name: '' }] };
				instance = createInstance({ Person: PersonStubOverride }, props);
				expect(instance.cast.length).to.eq(1);
				expect(instance.cast[0].constructor.name).to.eq('Person');

			});

		});

	});

	describe('show method', () => {

		it('will get show data', done => {

			instance.show().then(result => {
				expect(stubs.cypherQueriesProduction.getShowQuery.calledOnce).to.be.true;
				expect(stubs.cypherQueriesProduction.getShowQuery.calledWithExactly()).to.be.true;
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
				expect(stubs.cypherQueriesShared.getListQuery.calledWithExactly('production')).to.be.true;
				expect(stubs.dbQuery.calledOnce).to.be.true;
				expect(stubs.dbQuery.calledWithExactly({ query: 'getListQuery response' })).to.be.true;
				expect(result).to.deep.eq(dbQueryFixture);
				done();
			});

		});

	});

});
