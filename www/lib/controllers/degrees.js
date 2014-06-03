'use strict';

var mongoose = require('mongoose'),
    Profile = require('../models/profile');

/**
 * Create degrees
 */
exports.create = function (req, res, next) {
  Profile.find(function (err, profile) {
    if (err) return next(new Error('Failed to load Profile'));

    if (profile) {
      var degree = profile.degrees.create(req.body);
      profile.degrees.push(degree);
      profile.save(function(err, profile){
        console.log(err, profile);
        if (err) return next(new Error('Failed to save Profile'));
      })
      res.send(degree);
    } else {
      res.send(404, 'PROFILE_NOT_FOUND');
    }
  });
};

/**
 * delete degrees
 */
exports.delete = function (req, res, next) {
  Profile.find(function (err, profile) {
    if (err) {
      console.log(err);
      return next(new Error('Failed to load Profile'));
    }

    if (profile) {
      console.log(profile);

      var doc = profile.degrees.id(req.params.id).remove();
      console.log(doc);
      profile.save(function (err, profile) {
        if (err) {
          console.log(err);
          return next(new Error('Failed to load Profile'));
        } else {
          res.send(200,'');
        }
      });
    } else {
      res.send(404, 'PROFILE_NOT_FOUND');
    }
  });
};
