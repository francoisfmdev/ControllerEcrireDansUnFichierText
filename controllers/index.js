const index = (req, res, next) => {
    res.render('index', 
    { title: 'Express',
    visitors:255,
    content:'Le site qui t\'apprends à coder',
    linkText:"Nous contacter", 
    linkHref: '/contact/'}
    );
  }

  module.exports = index;