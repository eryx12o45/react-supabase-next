import { createContext } from 'react'
import { SupabaseClient } from '@supabase/supabase-js'

export const Context = createContext<SupabaseClient | undefined>(undefined)
export const Provider = Context.Provider
Context.displayName = 'SupabaseContext'
