const router = express.Router();
const answer = require('../controllers/answerscontroller');

//create answer
router.post("questions/:id/answers",answer.post_ans);

//view answers
router.get("questions/:id/answers", answer.get_ans);