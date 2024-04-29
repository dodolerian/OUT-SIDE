import express from 'express';
import { testhandler } from './handler/testhandler.js';
import { registerhandler } from './handler/registerhandler.js';
import { posthandler } from './handler/posthandler.js';
import { loginhandler } from './handler/loginhandler.js';
const router =express.Router();

router.get('/Hello', testhandler);
router.post('/register', registerhandler);
router.post('/post', posthandler);
router.post('/login', loginhandler);

export default router;
