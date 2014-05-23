'use strict';

var mongoose = require('mongoose'),
    Profile = mongoose.model('Profile');

/**
 * Create profile
 */
exports.create = function (req, res, next) {
  var newProfile = new Profile(req.body);

  newProfile.save(function(err) {
    if (err) {
      // Manually provide our own message for 'unique' validation errors, can't do it from schema
      if(err.errors.email.type === 'Value is not unique.') {
        err.errors.email.type = 'The specified email address is already in use.';
      }
      return res.json(400, err);
    }

    return res.json(req.Profile.ProfileInfo);
  });
};

/**
 *  Get profile of specified Profile
 */
exports.show = function (req, res, next) {
  var ProfileId = req.params.id;

  Profile.findById(ProfileId, function (err, Profile) {
    if (err) return next(new Error('Failed to load Profile'));

    if (Profile) {
      res.send({ profile: Profile.ProfileInfo });
    } else {
      res.send(404, 'PROFILE_NOT_FOUND');
    }
  });
};

/**
 *  Update profile of specified Profile
 */
exports.update = function (req, res, next) {
  var ProfileId = req.params.id;

  Profile.findByIdAndUpdate(ProfileId, req.body, function (err, Profile) {
    if (err) return next(new Error('Failed to load Profile'));

    if (Profile) {
      res.send({ profile: Profile.ProfileInfo });
    } else {
      res.send(404, 'PROFILE_NOT_FOUND');
    }
  });
};

/**
 * Get current Profile
 */
exports.me = function(req, res) {
  res.json(req.Profile || null);
};
