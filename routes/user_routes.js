const { Router } = require('express');
const { userGet, userPost, userPatch, userPut, userDelete } = require('../controller/userController');

const router = Router();

router.get('/', userGet);

router.post('/', userPost);

router.patch('/', userPatch);

router.put('/:id', userPut);

router.delete('/', userDelete);


module.exports = router;