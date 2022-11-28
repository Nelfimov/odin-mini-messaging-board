import {Router} from 'express';
const router = Router();

router.route('/new')
  .get((req, res, next) => {
    res.render('pages/form');
  })
  .post((req, res, next) => {
    const body = req.body;
    res.render('pages/form', {prevBody: body});
  })

export default router;
