const mongoose = require('mongoose');
const {Schema} = mongoose;

const scoreSchema = new Schema({
    userId : String,
    gameId : String,
    score : Number
});

scoreSchema.index({ userId : 1, gameId : 1} , {unique: true, dropDups: true});// for not duplicating same data

const Score = mongoose.model('Score', scoreSchema);

module.exports = Score;