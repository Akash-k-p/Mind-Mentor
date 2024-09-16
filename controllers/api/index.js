const router = require('express').Router();
const signupRoutes = require('./signup_routes');
const diaryRoutes = require('./diary_routes');
const loginRoutes = require('./login_routes');
const createEntryRoutes = require('./create_entry_routes');
const deleteDiary = require('./deleteDiary');
const entries=require('./entries')

router.use('/signup', signupRoutes);
router.use('/diary', diaryRoutes);
router.use('/login', loginRoutes);
router.use('/create', createEntryRoutes);


//--------------------------

router.use('/entries',entries);
// router.use('/delete',deleteDiary);


module.exports = router;
