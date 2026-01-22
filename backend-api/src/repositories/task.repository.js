import { supabase } from '../config/index.js';

export const saveTask = async (taskData) => {
    const { data, error } = await supabase
        .from('tasks')
        .insert([taskData])
        .select();

    if (error) throw new Error(`Error en DB: ${error.message}`);
    return data[0];
};