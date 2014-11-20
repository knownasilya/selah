'use strict';

var express = require('express');
var router = express.Router();

router.route('/')
  .get(function (req, res) {
    res.json({
      presentationSessions: [
        {
          id: 1,
          name: 'Test Session',
          created: new Date(),
          started: new Date(),
          active: true,
          admins: [1],
          viewers: [],
          presentables: [1]
        }      
      ],

      presentables: [
        {
          id: 1,
          title: 'Hello'
        }
      ]
    });
  });

router.route('/:id')
  .get(function (req, res) {
    var id = req.param('id');

    res.json({
      presentationSession: {
        id: id,
        name: 'Test Session',
        created: new Date(),
        started: new Date(),
        active: true,
        admins: [1],
        viewers: [],
        presentables: [1]
      },

      presentables: [
        {
          id: 1,
          title: 'Hello'
        }
      ]
    });
  });

module.exports = router;
