const express = require("express");
const router = express.Router();
    const items = require("../controllers/items.controller.js");
    // Create a new Item
    router.post("/", items.create);
  
    // Retrieve all items
    router.get("/", items.findAll);
  
    // Retrieve all published items
    router.get("/published", items.findAllPublished);
  
    // Retrieve a single Item with id
    router.get("/:id", items.findOne);
  
    // Update a Item with id
    router.put("/:id", items.update);
  
    // Delete a Item with id
    router.delete("/:id", items.delete);
  
    // Delete all items
    router.delete("/", items.deleteAll);
  
    // app.use('/api/items', router);
    module.exports = router;



// module.exports = app => {
//     const items = require("../controllers/items.controller.js");
  
//     var router = require("express").Router();
  
//     // Create a new Item
//     router.post("/test", items.create);
  
//     // Retrieve all items
//     router.get("/", items.findAll);
  
//     // Retrieve all published items
//     router.get("/published", items.findAllPublished);
  
//     // Retrieve a single Item with id
//     router.get("/:id", items.findOne);
  
//     // Update a Item with id
//     router.put("/:id", items.update);
  
//     // Delete a Item with id
//     router.delete("/:id", items.delete);
  
//     // Delete all items
//     router.delete("/", items.deleteAll);
  
//     // app.use('/api/items', router);
//   };