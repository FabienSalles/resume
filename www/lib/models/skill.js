'use strict';

var Skill = function() {
  var mongoose = require('mongoose'),
    uniqueValidator = require('mongoose-unique-validator'),
    Schema = mongoose.Schema;

  /**
   * Profile Schema
   */
  var SkillSchema = new Schema({
    name: String,
    level: { type: Number, min: 0, max: 5 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  });


  /**
   * Basic information of Skill
   */
  SkillSchema
    .virtual('SkillInfo')
    .get(function() {
      return {
        'name': this.name,
        'level': this.level,
      };
    })
  ;

  /**
   * Pre-save hook
   */
  SkillSchema
    .pre('save', function(next) {
      if (!this.isNew) return next();

      this.updatedAt = Date.now;
      next();
    })
  ;

  var _model = mongoose.model('Skill', SkillSchema);

  return {
    schema : SkillSchema,
    model  : _model
  }
}();

module.exports = Skill;
