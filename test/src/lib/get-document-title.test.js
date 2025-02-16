import { expect } from 'chai';

import getDocumentTitle from '../../../src/lib/get-document-title.js';

describe('Get Document Title module', () => {

	context('pageTitle value is not provided', () => {

		it('returns the website name only', () => {

			expect(getDocumentTitle()).to.equal('Dramatis');

		});

	});

	context('pageTitle value is provided', () => {

		it('returns the page name and website name separated by a pipe', () => {

			expect(getDocumentTitle('Foobar')).to.equal('Foobar | Dramatis');

		});

	});

});
