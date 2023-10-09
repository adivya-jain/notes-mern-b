const express = require("express");
var notesRouter = express.Router()
const mongoose = require("mongoose");
// const Note = require('../../db/models/note.model');
const noteModel = require("../../db/models/note.model");


//GET LIST OF ALL NOTE

notesRouter.get("/", async (request, response) => {
  try {
    const notes = await noteModel.find({});
    response.json({
      notes,
    });
  } catch (err) {
    console.error(err);
    response.status(500).json({ error: 'Internal Server Error' });
  }
});
//ADD NOTE 
notesRouter.post("/", (request, response) => {
  console.log(request.body)
  const newNote = new Note(request.body)
  newNote.save().then((savedNote) => {
    response.json({
      note:savedNote,
      success:true,
    })
  })

})

//GET A NOTE BY ID
notesRouter.get("/:id", (request, response) => {
  response.json({
    reply: "note by id sucess",
  })
})

// DELETE A NOTE BY ID
notesRouter.delete("/:id", (request, response) => {
  response.json({
    reply: "note deleted",
  })
})


module.exports =
{
  notesRouter
}