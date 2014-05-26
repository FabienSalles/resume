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
    phoneNumber: String,
    jobName: String,
    description: String,
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
        'phoneNumber': this.phoneNumber,
        'jobName' : this.jobName,
        'description' : this.description,
        'age' : this.age,
        'email' : this.email
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
