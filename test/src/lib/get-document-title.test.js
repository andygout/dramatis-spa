import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import getDocumentTitle from '../../../src/lib/get-document-title.js';

const context = describe;

describe('Get Document Title module', () => {
	context('pageTitle value is not provided', () => {
		it('returns the website name only', () => {
			assert.equal(getDocumentTitle(), 'Dramatis');
		});
	});

	context('pageTitle value is provided', () => {
		it('returns the page name and website name separated by a pipe', () => {
			assert.equal(getDocumentTitle('Foobar'), 'Foobar | Dramatis');
		});
	});
});
