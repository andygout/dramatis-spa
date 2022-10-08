import { expect } from 'chai';

import { getIn } from '../../../src/lib/object-interactions';

describe('Object Interactions module', () => {

	describe('getIn function', () => {

		it('returns the value at the specified path of the input object', () => {

			const object = [
				{
					foo: [
						{
							bar: 'qux'
						},
						{
							baz: 'quux'
						}
					]
				},
				{
					foo: [
						{
							bar: 'corge'
						},
						{
							baz: 'grault'
						}
					]
				}
			];

			const result = getIn(object, ['0', 'foo', '0', 'bar']);

			expect(result).to.equal('qux');

		});

	});

});
