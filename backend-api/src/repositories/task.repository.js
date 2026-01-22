import { supabase } from '../../config/index.js';

// Función para obtener todas las tareas
export const getAllTasks = async () => {
    const { data, error } = await supabase
        .from('tasks') // Nombre de tu tabla en Supabase
        .select('*');

    if (error) throw new Error(error.message);
    return data;
};

// Función para crear una tarea
export const createTask = async (task) => {
    const { data, error } = await supabase
        .from('tasks')
        .insert([task])
        .select();

    if (error) throw new Error(error.message);
    return data[0];
};