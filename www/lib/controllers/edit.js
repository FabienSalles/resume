'use strict';

var mongoose = require('mongoose'),
    Profile = require('../models/profile');

var fs = require('fs');

exports.avatar = function (req, res, next) {
  
    // Recupere le repertoire temporaire de l'upload
    var tmp_path = req.files.file.path;
    var extension = req.files.file.extension;

    // Chemin vers le repertoire contenant les avatars
    // TODO mettre un ID de l'user dans le nom du fichier
    var target_path = './app/images/avatars/avatar' + '.' + extension;


    // Deplacement du fichier vers le bon repertoire
    fs.rename(tmp_path, target_path, function(err) {
        if (err) throw err;
        // On supprime le fichier temporaire
        fs.unlink(tmp_path, function() {
            if (err) throw err;
            // TODO Changer le path de l'avatar de l'user pour maj l'image affiché sur le CV
            res.send('File uploaded to: ' + target_path + ' - ' + req.files.size + ' bytes');
        });
    });

    // MAJ Le model
    Profile.model.find({}, function (err, profile) {
        console.log(profile);
        if (err) return next(new Error('Failed to load Profile'));

        if (profile) {
          res.send({ avatar: 'images/avatars/avatar' + '.' + extension });
        } else {
          res.send();
        }
    });
};