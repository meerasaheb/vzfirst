/**
 * ClassController
 *
 * @description :: Server-side logic for managing classes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `ClassController.new()`
   */
  new: function (req, res) {
    return res.json({
      todo: 'new() is not implemented yet!'
    });
  },


  /**
   * `ClassController.show()`
   */
  show: function (req, res) {
    var id = req.param('id');
     Class.findOne(id,function(err, showClass) {
            if (err) { res.send(err, 500);
            }
            res.json({ showClass: showClass });
        });
  },


  /**
   * `ClassController.create()`
   */
  create: function (req, res) {
    var params = req.params.all()
    console.log(params)
    Class.create(params,function(err,createClass){
      if(err){
        // return 
        res.send(err,500)
      }
      console.log(createClass)
      res.json({createClass:createClass});
    })
  },


  /**
   * `ClassController.edit()`
   */
  edit: function (req, res) {
    return res.json({
      todo: 'edit() is not implemented yet!'
    });
  },


  /**
   * `ClassController.update()`
   */
  update: function (req, res) {
    var params = req.params.all();
     // console.log(params)
        var id = req.param('id');
        // console.log(id)
     Class.update(id, params, function(err, updateClass) {
            if (err) return res.send(err, 500); 
            console.log(updateSubScope)
            res.json({ updateSubScope: updateClass });
        });
  },


  /**
   * `ClassController.destroy()`
   */
  destroy: function (req, res) {
     var id = req.param('id');
        console.log(id);
      Class.destroy(id, function(err, destroyClass) {
            if (err) return res.send(err, 500);
            res.json({ destroyClass: "delete" });
        })
  }
};

