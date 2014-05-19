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

  it("should return profile information", function () {
    var newProfile = Profile.model({
      firstName : "Bob",
      lastName : "Henry",
      phoneNumber : "0555555555",
      jobName : "developer",
      description : "I want a job",
      age : 23,
      email : "bob@henry.com"
    });

    var profileInfo = newProfile.get('ProfileInfo');
    expect(profileInfo.firstName).toEqual("Bob");
    expect(profileInfo.lastName).toEqual("Henry");
    expect(profileInfo.phoneNumber).toEqual("0555555555");
    expect(profileInfo.jobName).toEqual("developer");
    expect(profileInfo.description).toEqual("I want a job");
    expect(profileInfo.age).toEqual(23);
    expect(profileInfo.email).toEqual("bob@henry.com");
  });
});

mongoose.connection.close();
