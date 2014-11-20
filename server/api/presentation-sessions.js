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
          summary: 'This is the best presentation session that could ever be. We hope you enjoy it!',
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
        summary: 'This is the best presentation session that could ever be. We hope you enjoy it!',
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
