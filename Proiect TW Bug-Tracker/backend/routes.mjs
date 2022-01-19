import express, { request, response } from 'express';
import {User,Bug} from './repository.mjs';
import {
	getRecords, postRecord, deleteRecords,
	getRecord, headRecord, putRecord, patchRecord, deleteRecord, postRecordLogin
} from './service.mjs';

const router = express.Router();




router.route('/users')
	.get(async (request, response) => getRecords(User, request, response))
	.post(async (request, response) => postRecord(User, request, response))
	.delete(async (request, response) => deleteRecords(User, request, response));
router.route('/users/:id')
	.get(async (request, response) => getRecord(User, request, response))
	.head(async (request, response) => headRecord(User, request, response))
	.put(async (request, response) => putRecord(User, request, response))
	.patch(async (request, response) => patchRecord(User, request, response))
	.delete(async (request, response) => deleteRecord(User, request, response));

router.route('/bugs')
	.get(async (request, response) => getRecords(Bug, request, response))
	.post(async (request, response) => postRecord(Bug, request, response))
	.delete(async (request, response) => deleteRecords(Bug, request, response));

router.route('/bugs/:id')
	.get(async (request, response) => getRecord(Bug, request, response))
	.head(async (request, response) => headRecord(Bug, request, response))
	.put(async (request, response) => putRecord(Bug, request, response))
	.patch(async (request, response) => patchRecord(Bug, request, response))
	.delete(async (request, response) => deleteRecord(Bug, request, response));
router.route('/users/login')
	.post(async (request,response) => postRecordLogin(User, request, response))


export default router;