// one route to get all diary entries GET /api/diary
//one route to get a single entry GET /api/diary/:id
// one route to submit a single entry POST /api/diary
//test
const router = require('express').Router();
const { Diary, Mood, User } = require('../../models');

const withAuth = require('../../utils/auth');

// GET all Diary
// localhost:3001/api/diary
router.get('/', async (req, res) => {
  try {
    const diaryData = await Diary.findAll({
      include: [{ model: Mood }, { model: User }],
    });
    res.status(200).json(diaryData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// localhost:3001/api/diary
router.post('/', withAuth, async (req, res) => {
    const diaryData = await Diary.create(req.body);
  
    return res.json(diaryData);
  });

  
  // GET a single Diary
  // localhost:3001/api/diary/view
  router.get('/view', withAuth,  async (req, res) => {//view is arbitrary could be anything
    try {
    const diaryData = await Diary.findByPk(req.session.user_id, {
      include: [{ model: Mood }, { model: User }],
    });

    if (!diaryData) {
      res.status(404).json({ message: 'diary not found' });
      return;
    }
    
    res.status(200).json(diaryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;