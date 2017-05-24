var billboard = require("billboard-top-100").getChart;
var async = require("async");
var read = require('read-file');
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var crawler = require("youtube-crawler");

var Music = require('../models/music.js')();

module.exports = function(app){
  var controller = {};
  //var Music = app.models.music;

  controller.insert = function(req, res){
    Music.create({name: 'test'}, function(error, music){
      if(error){
        res.status(500).send(error);
        console.log(error);
      } else {
        res.status(200).json(music);
      }
    });
  };

  controller.listMusic = function(req, res){
    Music.find({}, function(error, songs){
      if(error) res.status(500).json(error);
      else res.status(200).json(songs);
    });
  };

  controller.populate = function(req, res){
    // var songs = [{title: "Sweet Child' O Mine"}, {title: "Smells Like Teen Spirit"}];
    // async.each(songs, function(song, i){
    //   crawler(song.title, function(results){
    //     // songs[i].video = results[0];
    //     console.log(results);
    //   });
    // });

    billboard('greatest-hot-100-singles', function(songs, err){
      async.each(songs, function(song) {
        if (err) console.log(err);
        Music.create(song, function(error){
          if(error) console.log(error);
        });
      });
    });
  };

  return controller;
}
