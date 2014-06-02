'use strict';

var mongoose = require('mongoose'),
    Profile = require('../models/profile');

/**
 * Create skill
 */
exports.create = function (req, res, next) {
  Profile.find(function (err, profile) {
    if (err) return next(new Error('Failed to load Profile'));

    if (profile) {
      var skill = profile.skills.create(req.body);
      profile.skills.push(skill);
      profile.save(function(err, profile){
        console.log(err, profile);
        if (err) return next(new Error('Failed to save Profile'));
      });

      res.send(skill);
    } else {
      res.send(404, 'PROFILE_NOT_FOUND');
    }
  });
};

// /**
//  *  Get profile of specified Profile
//  */
// exports.show = function (req, res, next) {

//   Profile.find(function (err, profile) {
//     console.log(profile);
//     if (err) return next(new Error('Failed to load Profile'));

//     if (profile) {
//       res.send({ profile: profile.get('ProfileInfo') });
//     } else {
//       res.send(404, 'PROFILE_NOT_FOUND');
//     }
//   });
// };

// *
//  *  Update profile of specified Profile

// exports.update = function (req, res, next) {

//   Profile.findAndUpdate(req.body, function (err, profile) {
//     console.log(profile);
//     if (err) return next(new Error('Failed to load Profile'));

//     if (profile) {
//       res.send({ profile: profile.get('ProfileInfo') });
//     } else {
//       res.send(404, 'PROFILE_NOT_FOUND');
//     }
//   });
// };
