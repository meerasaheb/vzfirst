/**
 * Subscope.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	
 

    name : { type: 'string' },

    key_question : { type: 'string' },

    core_idea : { type: 'string' },
    

    strand:{
    	model:'strand'
    },

    class:{
    	collection:'class',
    	via:'subscope'
    },
    elo:{
    	collection:'elo',
    	via:'subscope'
    }

  }
};

