'use strict';

var Skill = function() {
  var mongoose = require('mongoose'),
    uniqueValidator = require('mongoose-unique-validator'),
    Schema = mongoose.Schema
    // DomainSkill = require('./domainSkill')
  ;

  /**
   * Profile Schema
   */
  var SkillSchema = new Schema({
    name: String,
    level: { type: Number, min: 0, max: 5 },
    // domain: { type: Schema.Types.ObjectId, ref: 'DomainSkill' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  });

  /**
   * Basic information of Skill
   */
  SkillSchema
    .virtual('SkillInfo').get(function() {
      console.log(this);
      return {
        'name': this.name,
        'level': this.level,
        // 'domain' : this.domain,
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

  var _findByIdAndPopulate = function _findByIdAndPopulate(id, callback){
    return _model.findById(id)
      // .populate('domain')
      .exec(callback)
    ;
  };

  return {
    schema          : SkillSchema,
    model           : _model,
    findByIdAndPopulate : _findByIdAndPopulate
  };
}();

module.exports = Skill;
