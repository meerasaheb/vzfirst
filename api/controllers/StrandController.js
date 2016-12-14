/**
 * StrandController
 *
 * @description :: Server-side logic for managing strands
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {



        /**
         * `StrandController.index()`
         */
        // index: function (req, res) {
        //   return res.json({
        //     todo: 'index() is not implemented yet!'
        //   });
        // },


        /**
         * `StrandController.new()`
         */
        new: function(req, res) {
            return res.json({
                todo: 'new() is not implemented yet!'
            });
        },


        /**
         * `StrandController.show()`
         */
        show: function(req, res) {
            var id = req.param('id');
            Strand.find().populate('subscope').exec(function(err, strandshow) {
                if (err) {
                    res.send(err, 500);
                }
                res.json({ strandshow: strandshow });
            });

        },


        /**
         * `StrandController.create()`
         */
        create: function(req, res) {
            var params = req.params.all()
            console.log(params)
            Strand.create(params, function(err, create) {
                if (err) {
                    // return 
                    res.send(err, 500)
                }
                var id = create.id
                console.log(create);
                console.log(id)
                Strand.findOne(id).populate('subscope').exec(function(err, createStardSubScope) {
                    if (err) return res.send(err, 500)
                    console.log(createStardSubScope)
                    res.json({ create: createStardSubScope });
                })

            })
        },


        /**
         * `StrandController.edit()`
         */
        edit: function(req, res) {
            return res.json({
                todo: 'edit() is not implemented yet!'
            });
        },


        /**
         * `StrandController.update()`
         */
        update: function(req, res) {
            var params = req.params.all();
            console.log(params)
            var id = req.param('id');
            console.log(id)
            Strand.update(id, params, function(err, strandupdate) {
                if (err) return res.send(err, 500);
                res.json({ fieldupdate: strandupdate });
            });
        },


        /**
         * `StrandController.destroy()`
         */
        destroy: function(req, res) {
            var id = req.param('id');
            console.log(id);
            Strand.find(id, function(err, destroy) {
                    if (err) return res.send(err, 500);
                    Strand.destroy({ id: id }).exec(function(err, strandDelete) {
                            if (err) return res.send(err, 500);
                            Subscope.destroy({ strand: id }).exec(function(err, twoDelete) {
                                if (err) return res.send(err, 500);
                                res.json({ twoDelete: "delete" });
                            });
                        });
                    });
            }
        };
