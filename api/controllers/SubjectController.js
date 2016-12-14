/**
 * SubjectController
 *
 * @description :: Server-side logic for managing subjects
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `SubjectController.index()`
   */
  // index: function (req, res) {
  //   return res.json({
  //     todo: 'index() is not implemented yet!'
  //   });
  // },


  /**
   * `SubjectController.new()`
   */
  new: function (req, res) {
    return res.json({
      todo: 'new() is not implemented yet!'
    });
  },


  /**
   * `SubjectController.create()`
   */
  create: function (req, res) {
    var params = req.params.all()
     // console.log(params)
    Subject.create(params,function(err,createSubject){
      if(err) return res.send(err,500)
        var id = createSubject.id;
        console.log(createSubject)
                console.log(id)
           Subject.findOne(id).populate('strand').exec(function(err,createStrand){
             if(err) return res.send(err,500)
            console.log(createStrand)
            res.json(createStrand);
        });
 
    });
  },


  /**
   * `SubjectController.show()`
   */
  show: function (req, res) {
     var id = req.param('id');
     Subject.find().populate('strand').exec(function(err, fieldshow) {
            if (err) { res.send(err, 500);
            }
            res.json({ show: fieldshow });
        });
  },


  /**
   * `SubjectController.edit()`
   */
  edit: function (req, res) {
    return res.json({
      todo: 'edit() is not implemented yet!'
    });
  },


  /**
   * `SubjectController.update()`
   */
  update: function (req, res) {
     var params = req.params.all();
     // console.log(params)
        var id = req.param('id');
        // console.log(id)
     Subject.update(id, params, function(err, fieldupdate) {
            if (err) return res.send(err, 500);
            console.log(fieldupdate)
            res.json({ fieldupdate: fieldupdate });
        });
  },


  /**
   * `SubjectController.destroy()`
   */
  destroy: function (req, res) {
     var id = req.param('id');
        console.log(id);
        Subject.find(id, function(err,destroy) {
            if (err) return res.send(err, 500);
            Subject.destroy({ id: id }).exec(function(err, subjectDelete) {
                    if (err) return res.send(err, 500);
                    Strand.destroy({ subjectId: id }).exec(function(err, strandDelete) {
                        if (err) return res.send(err, 500);
                        res.json({ subjectDelete: "delete" });
                    });
                });
            });
      }
};

