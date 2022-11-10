import express from 'express';
const students = express.Router();

import { getStudents } from '../controllers/students.controller'

students.get('/', getStudents)

export default students