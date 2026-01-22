import * as taskRepository from '../repositories/task.repository.js';

export const fetchTasks = async () => {
    // Aquí podrías aplicar filtros o reglas de negocio
    return await taskRepository.getAllTasks();
};