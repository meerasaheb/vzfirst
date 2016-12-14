/**
 * SubscopeController
 *
 * @description :: Server-side logic for managing subscopes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `SubscopeController.new()`
   */
  new: function (req, res) {
    return res.json({
      todo: 'new() is not implemented yet!'
    });
  },


  /**
   * `SubscopeController.show()`
   */
  show: function (req, res) {
    var id = req.param('id');
     Subscope.find().populate('class').populate('elo').exec(function(err, showSubScope) {
            if (err) { res.send(err, 500);
            }
            res.json({ showSubScope: showSubScope });
        });
  
  },


  /**
   * `SubscopeController.create()`
   */
  create: function (req, res) {
   var params = req.params.all()
    console.log(params)
    Subscope.create(params,function(err,createSubScope){
      if(err){
        // return 
        res.send(err,500)
      }
      var id = createSubScope.id
      console.log(createSubScope)
      console.log(id);
       Subscope.findOne(id).populate('class').populate('elo').exec(function(err,createSubScopeClassElo){
         if(err){
        // return 
        res.send(err,500)
      }
       
       console.log(createSubScopeClassElo)
      res.json({createSubScopeClassElo:createSubScopeClassElo});
      })
    })
  },


  /**
   * `SubscopeController.edit()`
   */
  edit: function (req, res) {
    return res.json({
      todo: 'edit() is not implemented yet!'
    });
  },


  /**
   * `SubscopeController.update()`
   */
  update: function (req, res) {
     var params = req.params.all();
     // console.log(params)
        var id = req.param('id');
        // console.log(id)
     Subscope.update(id, params, function(err, updateSubScope) {
            if (err) return res.send(err, 500);
            console.log(updateSubScope)
            res.json({ updateSubScope: updateSubScope });
        });
  },


  /**
   * `SubscopeController.destroy()`
   */
  destroy: function (req, res) {
    var id = req.param('id');
        console.log(id);
       Subscope.destroy(id, function(err, destroySubScope) {
            if (err) return res.send(err, 500);
            res.json({ destroySubScope: "delete" });
        });
  }
};

