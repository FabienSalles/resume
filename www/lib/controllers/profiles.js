'use strict';

var mongoose = require('mongoose'),
    Profile = require('../models/profile');

/**
 * Create profile
 */
exports.create = function (req, res, next) {
  var newProfile = new Profile.model(req.body);

  newProfile.save(function(err, profile) {
    if (err) {
      return res.json(400, err);
    }
    console.log(newProfile, res);
    return res.json(profile.get('ProfileInfo'));
  });
};

/**
 *  Get profile of specified Profile
 */
exports.show = function (req, res, next) {

  Profile.find(function (err, profile) {
    console.log(profile);
    if (err) return next(new Error('Failed to load Profile'));

    if (profile) {
      res.send(profile.get('ProfileInfo'));
    } else {
      res.send(404, 'PROFILE_NOT_FOUND');
    }
  });
};

/**
 *  Update profile of specified Profile
 */
exports.update = function (req, res, next) {

  Profile.findAndUpdate(req.body, function (err, profile) {
    console.log(profile);
    if (err) return next(new Error('Failed to load Profile'));

    if (profile) {
      res.send(profile.get('ProfileInfo'));
    } else {
      res.send(404, 'PROFILE_NOT_FOUND');
    }
  });
};
