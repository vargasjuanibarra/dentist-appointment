import {Router} from 'express';
import { getUsers, loginUser, registerUser, seedUsers } from '../controller/user.controller';

const router = Router();

    router.get('/seed', seedUsers)

    router.get('/', getUsers)
  
    router.post("/login", loginUser)
    
    router.post('/register', registerUser)

  
    export default router;