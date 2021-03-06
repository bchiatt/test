'use strict';

var Joi  = require('joi'),
  User = require('../../../models/user');

module.exports = {
  description: 'Login a User',
  tags:['users'],
  validate: {
    payload: {
      username: Joi.string().required(),
      password: Joi.string().required()
    }
  },
  auth: false,
  handler: function(request, reply){
    User.login(request.payload, function(user){
      if(!user){return reply().code(401);}

      request.auth.session.set(user);
      reply(user);
    });
  }
};
