export default class Role {

	constructor (props = {}) {

		Object.defineProperty(this, 'model', {
			get: function () { return 'role'; }
		});

		this.name = props.name;
		this.characterName = (props.characterName && props.characterName.length) ? props.characterName : null;

	};

};
