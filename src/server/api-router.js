import { Router } from 'express';

import {
	instances as instancesController,
	lists as listsController,
	search as searchController
} from './controllers/index.js';

const router = new Router();

router.get('/awards', (request, response, next) => listsController(request, response, next));

router.get('/awards/:uuid', (request, response, next) => instancesController(request, response, next));

router.get('/award-ceremonies', (request, response, next) => listsController(request, response, next));

router.get('/award-ceremonies/:uuid', (request, response, next) => instancesController(request, response, next));

router.get('/characters', (request, response, next) => listsController(request, response, next));

router.get('/characters/:uuid', (request, response, next) => instancesController(request, response, next));

router.get('/companies', (request, response, next) => listsController(request, response, next));

router.get('/companies/:uuid', (request, response, next) => instancesController(request, response, next));

router.get('/festivals', (request, response, next) => listsController(request, response, next));

router.get('/festivals/:uuid', (request, response, next) => instancesController(request, response, next));

router.get('/festival-serieses', (request, response, next) => listsController(request, response, next));

router.get('/festival-serieses/:uuid', (request, response, next) => instancesController(request, response, next));

router.get('/materials', (request, response, next) => listsController(request, response, next));

router.get('/materials/:uuid', (request, response, next) => instancesController(request, response, next));

router.get('/people', (request, response, next) => listsController(request, response, next));

router.get('/people/:uuid', (request, response, next) => instancesController(request, response, next));

router.get('/productions', (request, response, next) => listsController(request, response, next));

router.get('/productions/:uuid', (request, response, next) => instancesController(request, response, next));

router.get('/seasons', (request, response, next) => listsController(request, response, next));

router.get('/seasons/:uuid', (request, response, next) => instancesController(request, response, next));

router.get('/search', (request, response, next) => searchController(request, response, next));

router.get('/venues', (request, response, next) => listsController(request, response, next));

router.get('/venues/:uuid', (request, response, next) => instancesController(request, response, next));

export default router;
