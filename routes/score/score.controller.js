const express = require('express');
const { scoreDTOValidator, addScoreDTO, updateScoreDTO, deleteScoreDTO } = require('../../validators/score.validator');
const { getScores , addScore, updateScore, deleteScore} = require('./score.service');
const router = express.Router();

//GET
router.get('/:gameId', async (req, res, next) => {
  const {gameId} = req.params;
  const score = await getScores(gameId)
  res.json({
    data : score
  })
});

//POST
router.post('/',scoreDTOValidator(addScoreDTO),async (req, res, next) => {
  const {gameId,userId,score} = req.body;
  try{
    const savedScore = await addScore({gameId,userId,score})
  res.json({
    data : savedScore
  })
  }catch(err){
    next(err)
  }
})

//PUT
router.put('/:gameId', scoreDTOValidator(updateScoreDTO),async (req, res, next) => {
  const {gameId} = req.params;
  const {userId,score} = req.body;
  try{
    const updatedScore = await updateScore({gameId,userId,score})
    if(updatedScore === null){
      return res.status(404).json({
        error : 'User not found'
      })
    }
  res.json({
    data : updatedScore
  })
  }catch(err){
    next(err);
  }
});

//DELETE
router.delete('/:gameId',scoreDTOValidator(deleteScoreDTO),async (req, res, next) => {
  const {gameId} = req.params;
  const {userId} = req.body;
  try{
  const deletedScore = await deleteScore({gameId,userId})
  if(deletedScore === null){
    return res.status(404).json({
      error : 'User not found'
    })
  }
  res.json({
    data : deletedScore
  })
  }catch(err){
    next(err);
  }
});

module.exports = router;
