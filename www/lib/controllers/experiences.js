'use strict';

var mongoose = require('mongoose'),
    Profile = require('../models/profile');

/**
 * Create experiences
 */
exports.create = function (req, res, next) {
  Profile.find(function (err, profile) {
    if (err) return next(new Error('Failed to load Profile'));

    if (profile) {
      var experience = profile.experiences.create(req.body);
      profile.experiences.push(experience);
      profile.save(function(err, profile){
        console.log(err, profile);
        if (err) return next(new Error('Failed to save Profile'));
      })
      res.send(experience);
    } else {
      res.send(404, 'PROFILE_NOT_FOUND');
    }
  });
};

/**
 * delete experiences
 */
exports.delete = function (req, res, next) {
  Profile.find(function (err, profile) {
    if (err) {
      console.log(err);
      return next(new Error('Failed to load Profile'));
    }

    if (profile) {
      console.log(profile);

      var doc = profile.experiences.id(req.params.id).remove();
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
