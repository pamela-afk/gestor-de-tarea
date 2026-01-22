import * as taskRepository from '../repositories/task.repository.js';

export const createNewTask = async (taskInfo) => {
    // Regla de Negocio: El título es obligatorio
    if (!taskInfo.title || taskInfo.title.trim() === "") {
        throw new Error("El título de la tarea es obligatorio");
    }

    // Formatear datos antes de guardar
    const cleanTask = {
        title: taskInfo.title.trim(),
        description: taskInfo.description || "",
        status: 'pending',
        created_at: new Date()
    };

    return await taskRepository.saveTask(cleanTask);
};