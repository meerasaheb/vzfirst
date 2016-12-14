/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    view: 'homepage'
  },

  // 'get /subjects':{
  //   controller:'subject',
  //   action:'index'
  // },
  'get /subjects/new':{
    controller:'subject',
    action:'new'
  },
 'get /subjects':{
    controller:'subject',
    action:'show'
  },
 
  'post /subjects':{
    controller:'subject',
    action:'create'
  },

 'get /subjects/:id/edit':{
    controller:'subject',
    action:'edit'
  },
  'put /subjects/:id':{
    controller:'subject',
    action:'update'
  },
  'delete /subjects/:id':{
    controller:'subject',
    action:'destroy'
  },
   // GET /subjects/:id -> SubjectController.findOne                          
   // post /subjects        => SubjectController.create                                   
   // put /subjects/:id     => SubjectController.update                                
   // delete /subjects/:id  => SubjectController.destroy

   //  //Strands Tables,
   // get /strands/:id -> StrandController.findOne                                
   // post /strands -> StrandController.create                                    
   // put /strands/:id -> StrandController.update;                                 
   // delete /strands/:id -> StrandController.destroy 

    // GET   :    /:subjects              => find()
    // GET   :    /:subjects/read/:id     => findOne(id)
    // POST  :    /:subjects/create       => create()
    // POST  :    /:subjects/create/:id   => create(id)
    // PUT   :    /:subjects/update/:id   => update(id)
    // DELETE:    /:subjects/destroy/:id  => destroy(id)

  //   'get /strands':{
  //   controller:'strand',
  //   action:'index'
  // },
  'get /strands/new':{
    controller:'strand',
    action:'new'
},
 'get /strands':{
    controller:'strand',
    action:'show'
  },
 
  'post /strands':{
    controller:'strand',
    action:'create'
  },

 'get /strands/:id/edit':{
    controller:'strand',
    action:'edit'
  },
  'put /strands/:id':{
    controller:'strand',
    action:'update'
  },
  'delete /strands/:id':{
    controller:'strand',
    action:'destroy'
  },


  //   'get /subscopes':{
  //   controller:'subscope',
  //   action:'index'
  // },
'get /subscopes/new':{
    controller:'subscope',
    action:'new'
},
 'get /subscopes/:id':{
    controller:'subscope',
    action:'show'
  },
 
  'post /subscopes':{
    controller:'subscope',
    action:'create'
  },

 'get /subscopes/:id/edit':{
    controller:'subscope',
    action:'edit'
  },
  'put /subscopes/:id':{
    controller:'subscope',
    action:'update'
  },
  'delete /subscopes/:id':{
    controller:'subscope',
    action:'destroy'
  },

  // 'get/classes/:id' :'ClassController.findOne',
  // 'post/classes' : 'ClassController.create',
  // 'put/classes/:id' : 'ClassController.update',
  // 'delete/classes/:id': 'ClassController.destroy'

'get /classes/new':{
    controller:'class',
    action:'new'
},
 'get /classes/:id':{
    controller:'class',
    action:'show'
  },
 
  'post /classes':{
    controller:'class',
    action:'create'
  },

 'get /classes/:id/edit':{
    controller:'class',
    action:'edit'
  },
  'put /classes/:id':{
    controller:'class',
    action:'update'
  },
  'delete /classes/:id':{
    controller:'class',
    action:'destroy'
  },

  // 'get/elos/:id' :'EloController.findOne',
  // 'post/elos' : 'EloController.create',
  // 'put/elos/:id' : 'EloController.update',
  // 'delete/elos/:id': 'EloController.destroy'
  'get /elos/new':{
    controller:'elo',
    action:'new'
},
 'get /elos/:id':{
    controller:'elo',
    action:'show'
  },
 
  'post /elos':{
    controller:'elo',
    action:'create'
  },

 'get /elos/:id/edit':{
    controller:'elo',
    action:'edit'
  },
  'put /elos/:id':{
    controller:'elo',
    action:'update'
  },
  'delete /elos/:id':{
    controller:'elo',
    action:'destroy'
  },
  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
