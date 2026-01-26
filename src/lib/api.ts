import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

export const getProducts = async () => {
    const { data, error } = await supabase.from('products').select('*').order('name');
    if (error) return [];
    return data;
};

export const createProduct = async (product: any) => {
    // Versão ultra-compatível
    const { data, error } = await supabase
        .from('products')
        .insert([{
            name: String(product.name).toUpperCase(),
            price: Number(product.price),
            category: 'servico',
            duration_minutes: Number(product.duration_minutes) || 60
        }])
        .select();
    if (error) {
        console.error("Erro detalhado:", error);
        throw error;
    }
    return data;
};

export const getTransactions = async () => {
    const { data } = await supabase.from('transactions').select('*');
    return data || [];
};

export const createTransaction = async (t: any) => {
    return await supabase.from('transactions').insert([t]).select();
};