'use strict';

var config = require('../../../lib/config/config'),
    mongoose = require("mongoose"),
    Profile = require(config.root+'/lib/models/profile')
;

mongoose.connect(config.mongo.uri);

describe("Profile", function () {
  it("should fill some fields when recording", function () {
    var newProfile = new Profile.model();
    newProfile.save();
    var now = new Date();
    expect(newProfile.createdAt.toUTCString()).toEqual(now.toUTCString());
    expect(newProfile.updatedAt.toUTCString()).toEqual(now.toUTCString());
  });
});

mongoose.connection.close();
