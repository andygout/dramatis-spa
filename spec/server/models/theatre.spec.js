const expect = require('chai').expect;
const proxyquire = require('proxyquire');
const sinon = require('sinon');

const dbQueryFixture = require('../../fixtures/db-query');

const sandbox = sinon.sandbox.create();

let stubs;
let instance;

beforeEach(() => {

	stubs = {
		dbQuery: sandbox.stub().resolves(dbQueryFixture),
		Base: {
			cypherQueriesShared: {
				getShowQueries: {
					theatre: sandbox.stub().returns('getShowQuery response')
				}
			},
			dbQuery: sandbox.stub().resolves(dbQueryFixture)
		}
	};

	instance = createInstance();

});

afterEach(() => {

	sandbox.restore();

});

const createSubject = (stubOverrides = {}) =>
	proxyquire('../../../dist/models/theatre', {
		'../database/db-query': stubOverrides.dbQuery || stubs.dbQuery,
		'./base': proxyquire('../../../dist/models/base', {
			'../database/cypher-queries/shared': stubs.Base.cypherQueriesShared,
			'../database/db-query': stubOverrides.Base && stubOverrides.Base.dbQuery || stubs.Base.dbQuery
		})
	});

const createInstance = (stubOverrides = {}) => {

	const subject = createSubject(stubOverrides);

	return new subject({ uuid: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', name: 'Almeida Theatre' });

};

describe('Theatre model', () => {

	describe('show method', () => {

		it('will get show data', done => {

			instance.show().then(result => {
				expect(stubs.Base.cypherQueriesShared.getShowQueries.theatre.calledOnce).to.be.true;
				expect(stubs.Base.cypherQueriesShared.getShowQueries.theatre.calledWithExactly()).to.be.true;
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
