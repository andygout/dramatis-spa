import express from 'express';
import methodOverride from 'method-override';

import * as controllers from '../controllers';

const apiRouter = express.Router();

apiRouter.use(methodOverride((req, res) => {

	if (req.body && typeof req.body === 'object' && '_method' in req.body) {

		const method = req.body._method;

		delete req.body._method;

		return method;

	}

}));

apiRouter.get('/characters/:uuid', controllers.characters.showRoute);
apiRouter.get('/characters', controllers.characters.listRoute);

apiRouter.get('/people/:uuid', controllers.people.showRoute);
apiRouter.get('/people', controllers.people.listRoute);

apiRouter.get('/playtexts/:uuid', controllers.playtexts.showRoute);
apiRouter.get('/playtexts', controllers.playtexts.listRoute);

apiRouter.get('/productions/:uuid', controllers.productions.showRoute);
apiRouter.get('/productions', controllers.productions.listRoute);

apiRouter.get('/theatres/:uuid', controllers.theatres.showRoute);
apiRouter.get('/theatres', controllers.theatres.listRoute);

export default apiRouter;
