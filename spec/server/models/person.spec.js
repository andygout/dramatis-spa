const expect = require('chai').expect;
const proxyquire = require('proxyquire');
const sinon = require('sinon');

const Role = require('../../../dist/models/role');

const dbQueryFixture = require('../../fixtures/db-query');

const sandbox = sinon.sandbox.create();

let stubs;
let instance;

const RoleStub = function () {

	return sinon.createStubInstance(Role);

};

beforeEach(() => {

	stubs = {
		dbQuery: sandbox.stub().resolves(dbQueryFixture),
		Base: {
			cypherQueriesShared: {
				getShowQueries: {
					person: sandbox.stub().returns('getShowQuery response')
				}
			},
			dbQuery: sandbox.stub().resolves(dbQueryFixture)
		},
		Role: RoleStub
	};

	instance = createInstance();

});

afterEach(() => {

	sandbox.restore();

});

const createSubject = (stubOverrides = {}) =>
	proxyquire('../../../dist/models/person', {
		'../database/db-query': stubOverrides.dbQuery || stubs.dbQuery,
		'./base': proxyquire('../../../dist/models/base', {
			'../database/cypher-queries/shared': stubs.Base.cypherQueriesShared,
			'../database/db-query': stubOverrides.Base && stubOverrides.Base.dbQuery || stubs.Base.dbQuery
		}),
		'./role': stubs.Role
	});

const createInstance = (stubOverrides = {}, props = { name: 'Ian McKellen' }) => {

	const subject = createSubject(stubOverrides);

	return new subject(props);

};

describe('Person model', () => {

	describe('constructor method', () => {

		describe('roles property', () => {

			it('will assign as empty array if not included in props', () => {

				expect(instance.roles).to.deep.eq([]);

			});

			it('will assign as array of roles if included in props, filtering out those with empty string names', () => {

				const props = { name: 'Ian McKellen', roles: [{ name: 'King Lear' }, { name: '' }] };
				instance = createInstance({}, props);
				expect(instance.roles.length).to.eq(1);
				expect(instance.roles[0].constructor.name).to.eq('Role');

			});

		});

	});

	describe('show method', () => {

		it('will get show data', done => {

			instance.show().then(result => {
				expect(stubs.Base.cypherQueriesShared.getShowQueries.person.calledOnce).to.be.true;
				expect(stubs.Base.cypherQueriesShared.getShowQueries.person.calledWithExactly()).to.be.true;
				expect(stubs.Base.dbQuery.calledOnce).to.be.true;
				expect(stubs.Base.dbQuery.calledWithExactly(
					{ query: 'getShowQuery response', params: instance }
				)).to.be.true;
				expect(result).to.deep.eq(dbQueryFixture);
				done();
			});

		});

	});

});
