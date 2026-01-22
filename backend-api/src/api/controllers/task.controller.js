import * as taskService from '../../services/task.service.js';

export const handleCreateTask = async (req, res) => {
    try {
        const result = await taskService.createNewTask(req.body);
        return res.status(201).json({
            success: true,
            data: result
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }
};