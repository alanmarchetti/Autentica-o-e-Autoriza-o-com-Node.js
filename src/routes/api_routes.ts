import { Router } from 'express';
import { Auth } from '../middlewares/Auth';
import * as AuthController from '../controllers/auth.controller';
import * as EmailController from '../controllers/email.controller';
const router = Router();

router.post('/register', AuthController.register );
router.post('/login', AuthController.login );
router.get('/list',  Auth.private, AuthController.list );
router.post('/contact', EmailController.contact);

export default router;
