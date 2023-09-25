import mongoose from 'mongoose'

const Schema = mongoose.Schema

const recipeSchema = new Schema({
  title: String,
  description: String,
  // content: String,
  directions: String,
  // cookTime: Number,
  // timeUnits: {type: String, enum:['mins', 'hrs', 'days']},
  // ingredients: [],
  author: {type: Schema.Types.ObjectId, ref: 'Profile'},
}, {
  timestamps: true
})

const Recipe = mongoose.model('Recipe', recipeSchema)

export {
  Recipe
}