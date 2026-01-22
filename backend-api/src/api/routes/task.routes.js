import { Router } from 'express';
import { handleCreateTask } from '../controllers/task.controller.js';

const router = Router();

/**
 * @openapi
 * /api/tasks:
 * post:
 * summary: Crea una nueva tarea
 * tags: [Tasks]
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * type: object
 * properties:
 * title:
 * type: string
 * description:
 * type: string
 * responses:
 * 201:
 * description: Tarea creada con éxito
 * 400:
 * description: Error en la validación
 */
router.post('/', handleCreateTask);

export default router;