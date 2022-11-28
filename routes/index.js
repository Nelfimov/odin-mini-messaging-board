import {Router} from 'express';
const router = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

router.get('/', (req, res, next) => {
  res.render('pages/index', {messages});
});

export default router;
