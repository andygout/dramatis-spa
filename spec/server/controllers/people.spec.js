const expect = require('chai').expect;
const httpMocks = require('node-mocks-http');
const proxyquire = require('proxyquire');
const sinon = require('sinon');

const Person = require('../../../dist/models/person');

const getResponseFixture = require('../../fixtures/get-response-instance');
const getResponseListFixture = require('../../fixtures/get-response-instances-list');

const err = new Error('errorText');

const sandbox = sinon.sandbox.create();

let stubs;
let req;
let res;
let next;
let method;
let methodStub;

beforeEach(() => {

	stubs = {
		renderJson: sandbox.stub()
	};

});

afterEach(() => {

	sandbox.restore();

});

const createSubject = stubOverrides =>
	proxyquire('../../../dist/controllers/people', {
		'./lib/render-json': stubs.renderJson,
		'../models/person': stubOverrides.PersonModel
	});

const createInstance = (method, methodStub) => {

	req = httpMocks.createRequest();
	res = httpMocks.createResponse();

	next = sinon.stub();

	const PersonModel = (method !== 'list') ?
		function () { this[method] = methodStub; } :
		sinon.stub(Person, 'list').callsFake(() => { return methodStub });

	const subject = createSubject({ PersonModel });

	const controllerFunction = `${method}Route`;

	return subject[controllerFunction](req, res, next);

};

describe('People controller', () => {

	describe('show method', () => {

		beforeEach(() => {

			method = 'show';

		});

		context('resolves with data', () => {

			it('will call renderJson module', done => {

				const responseFixture = getResponseFixture('person');
				methodStub = sinon.stub().resolves(responseFixture);
				createInstance(method, methodStub).then(() => {
					expect(stubs.renderJson.calledOnce).to.be.true;
					expect(stubs.renderJson.calledWithExactly(req, res, responseFixture.person)).to.be.true;
					expect(next.notCalled).to.be.true;
					done();
				});

			});

		});

		context('resolves with error', () => {

			it('will call next() with error', done => {

				methodStub = sinon.stub().rejects(err);
				createInstance(method, methodStub).then(() => {
					expect(next.calledOnce).to.be.true;
					expect(next.calledWithExactly(err)).to.be.true;
					done();
				});

			});

		});

	});

	describe('list method', () => {

		beforeEach(() => {

			method = 'list';

		});

		afterEach(() => {

			Person.list.restore();

		});

		context('resolves with data', () => {

			it('will call renderJson module', done => {

				const responseListFixture = getResponseListFixture('people');
				methodStub = Promise.resolve(responseListFixture);
				createInstance(method, methodStub).then(() => {
					expect(stubs.renderJson.calledOnce).to.be.true;
					expect(stubs.renderJson.calledWithExactly(req, res, responseListFixture.people)).to.be.true;
					expect(next.notCalled).to.be.true;
					done();
				});

			});

		});

		context('resolves with error', () => {

			it('will call next() with error', done => {

				methodStub = Promise.reject(err);
				createInstance(method, methodStub).then(() => {
					expect(next.calledOnce).to.be.true;
					expect(next.calledWithExactly(err)).to.be.true;
					done();
				});

			});

		});

	});

});
