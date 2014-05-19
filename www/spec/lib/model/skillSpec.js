'use strict';

var config = require('../../../lib/config/config'),
    mongoose = require("mongoose"),
    Skill = require(config.root+'/lib/models/skill')
;

describe("Skill", function () {
  it("should fill some fields when recording", function () {
    var newSkill = new Skill.model();
    newSkill.save();
    var now = new Date();
    expect(newSkill.createdAt.toUTCString()).toEqual(now.toUTCString());
    expect(newSkill.updatedAt.toUTCString()).toEqual(now.toUTCString());
  });

  it("should return skill information", function () {
    var newSkill = Skill.model({
      name : "JAVA",
      level : 4.5,
    });

    var skillInfo = newSkill.get('SkillInfo');
    expect(skillInfo.name).toEqual("JAVA");
    expect(skillInfo.level).toEqual(4.5);
  });
});

mongoose.connection.close();
