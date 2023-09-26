import mongoose from 'mongoose'

const Schema = mongoose.Schema

const commentSchema = new Schema({
  author: {type: Schema.Types.ObjectId, ref: 'Profile'},
  body: String,
}, {
  timestamps: true,
})

const recipeSchema = new Schema({
  title: String,
  description: String,
  // content: String,
  directions: String,
  // cookTime: Number,
  // timeUnits: {type: String, enum:['mins', 'hrs', 'days']},
  // ingredients: [],
  author: {type: Schema.Types.ObjectId, ref: 'Profile'},
  comments: [commentSchema],
}, {
  timestamps: true
})

const Recipe = mongoose.model('Recipe', recipeSchema)

export {
  Recipe
}