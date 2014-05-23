'use strict';

var DomainSkill = function() {
  var mongoose = require('mongoose'),
    uniqueValidator = require('mongoose-unique-validator'),
    Schema = mongoose.Schema
  ;
  /**
   * Profile Schema
   */
  var DomainSkillSchema = new Schema({
    name: String,
    skills : [{ type: Schema.Types.ObjectId, ref: 'Skill' }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  });


  /**
   * Basic information of DomainSkill
   */
  DomainSkillSchema
    .virtual('DomainSkillInfo')
    .get(function() {
      return {
        'name': this.name,
        'skills': this.skills,
      };
    })
  ;

  /**
   * Pre-save hook
   */
  DomainSkillSchema
    .pre('save', function(next) {
      if (!this.isNew) return next();

      this.updatedAt = Date.now;
      next();
    })
  ;

  var _model = mongoose.model('DomainSkill', DomainSkillSchema);

  return {
    schema : DomainSkillSchema,
    model  : _model
  }
}();

module.exports = DomainSkill;
