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
  directions: String,
  isPublic: String,
  ingredients: String,
  author: {type: Schema.Types.ObjectId, ref: 'Profile'},
  comments: [commentSchema],
  isPublic: String,
}, {
  timestamps: true
})

const Recipe = mongoose.model('Recipe', recipeSchema)

export {
  Recipe
}