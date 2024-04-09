import express from 'express'
const router = express.Router()
import {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo
} from '../controllers/todoController.js'


// Create
router.post('/', createTodo)

// Read
router.get('/', getTodos)

// Update
router.put('/:id', updateTodo)

// Delete
router.delete('/:id', deleteTodo)

export default router