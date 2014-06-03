'use strict';

var Profile = function() {
  var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

  /**
   * Profile Schema
   */
  var ProfileSchema = new Schema({
    firstName: String,
    lastName: String,
    phoneNumber: String,
    jobName: String,
    description: String,
    age: { type: Number, min: 18, max: 65 },
    email: { type: String, unique: true, required: true },
    skills : [{
      name: { type: String, unique: true, required: true },
      level: { type: Number, min: 0, max: 5 },
    }],
    experiences: [{
      name: String,
      description: String,
      startAt: Date,
      endAt: Date,
      // tags: [{
      //   name: String
      // }]
    }],
    degrees: [{
      name: String,
      description: String,
      startAt: Date,
      endAt: Date,
    }],
    pastimes: [{
      name: String
    }],
    languages: [{
      name: String,
      level: String
    }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });


  /**
   * Basic information of Profile
   */
  ProfileSchema
    .virtual('ProfileInfo')
    .get(function() {
      return {
        'firstName': this.firstName,
        'lastName': this.lastName,
        'phoneNumber': this.phoneNumber,
        'jobName' : this.jobName,
        'description' : this.description,
        'age' : this.age,
        'email' : this.email
      };
    })
  ;

  /**
   * Pre-save hook
   */
  ProfileSchema
    .pre('save', function(next) {
      if (!this.isNew) return next();

      this.updatedAt = Date.now;
      next();
    })
  ;

  var _model = mongoose.model('Profile', ProfileSchema);

  var _find = function _find(callback) {
    return _model.findOne({}, callback);
  };

  var _findAndUpdate = function _findAndUpdate(fields, callback){
    return _model.findOneAndUpdate({}, fields, callback);
  }

  return {
    schema        : ProfileSchema,
    model         : _model,
    find          : _find,
    findAndUpdate : _findAndUpdate
  };
}();

module.exports = Profile;
