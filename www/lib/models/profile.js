'use strict';

var Profile = function() {
  var mongoose = require('mongoose'),
    uniqueValidator = require('mongoose-unique-validator'),
    Schema = mongoose.Schema;

  /**
   * Profile Schema
   */
  var ProfileSchema = new Schema({
    firstName: String,
    lastName: String,
    adress: String,
    phoneNumber: String,
    jobName: String,
    description: String,
    city: String,
    cp: String,
    facebook: { type: String, default: 'facebook.com/' },
    twitter: { type: String, default: 'twitter.com/' },
    google: { type: String, default: 'plus.google.com/' },
    avatar: { type: String, default: 'images/avatar.jpg' },
    age: { type: Number, min: 18, max: 65 },
    email: { type: String, unique: true, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
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
        'adress': this.adress,
        'phoneNumber': this.phoneNumber,
        'jobName' : this.jobName,
        'avatar': this.avatar,
        'city': this.city,
        'cp': this.cp,
        'description' : this.description,
        'age' : this.age,
        'email' : this.email,
        'facebook' : this.facebook,
        'twitter' : this.twitter,
        'google' : this.google
      };
    })
  ;


  /**
   * Validations
   */
  var validatePresenceOf = function(value) {
    return value && value.length;
  };


  /**
   * Plugins
   */
  ProfileSchema.plugin(uniqueValidator,  { message: 'Value is not unique.' });

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

  return {
    schema : ProfileSchema,
    model  : _model
  };
}();

module.exports = Profile;
