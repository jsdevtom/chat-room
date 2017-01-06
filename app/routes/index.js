const router = require('express').Router()

router.get(['/', '/login'], (req, res, next) => {
  res.render('login', {
    cssPath: 'loginStyles',
    title: 'Login'
  })
})

router.get('/rooms', (req, res, next) => {
  res.render('rooms', {
    cssPath: 'roomsStyles',
    title: 'Rooms'
  })
})

router.get('/chatroom', (req, res, next) => {
  res.render('chatroom', {
    cssPath: 'chatroomStyles',
    title: 'Chatroom'
  })
})

router.get('*', (req, res, next) => {
  res.render('404', {
    cssPath: '404',
    title: 'Error 404'
  })
})

module.exports = router
