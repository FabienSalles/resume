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

/**
 * delete skill
 */
exports.delete = function (req, res, next) {
  Profile.find(function (err, profile) {
    if (err) {
      console.log(err);
      return next(new Error('Failed to load Profile'));
    }

    if (profile) {
      console.log(profile);

      var doc = profile.skills.id(req.params.id).remove();
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

/**
 * update skills
 */
exports.update = function (req, res, next) {
  console.log(req.params.id, req.body);
  Profile.find(function (err, profile) {
    if (err) {
      console.log(err);
      return next(new Error('Failed to load Profile'));
    }

    if (profile) {
      console.log(profile);
      Profile.model.update({_id: profile._id, "skills._id": req.params.id }, {$set:req.body},function(err, profile) {
        if (err) {
          console.log(err);
          return next(new Error('Failed to update skills'));
        } else {
          res.send(200,profile.get('ProfileInfo'));
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
