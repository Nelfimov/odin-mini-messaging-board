import {Router} from 'express';
import {messages} from './index.js';
const router = Router();

router.route('/new')
  .get((req, res, next) => {
    res.render('pages/form', {title: 'Create new message'});
  })
  .post((req, res, next) => {
    const {message, author} = req.body;
    messages.push({text: message, user: author, added: new Date()});
    res.redirect('/');
  })

export default router;
