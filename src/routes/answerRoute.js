const router = express.Router();
const answer = require('../controllers/answerscontroller');

//create answer
router.post("questions/:id/answers",answer.post_ans);