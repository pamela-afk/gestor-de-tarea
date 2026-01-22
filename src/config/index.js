/**
 * @openapi
 * /api/tasks:
 * get:
 * summary: Retorna la lista de tareas
 * responses:
 * 200:
 * description: OK
 */
router.get('/', getTasksHandler);