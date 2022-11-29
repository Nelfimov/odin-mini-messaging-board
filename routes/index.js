import {Router} from 'express';
const router = Router();

export const messages = [
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

router.get('/', (req, res) => {
  res.render('pages/index', {title: 'Messaging board', messages});
});

export default router;
