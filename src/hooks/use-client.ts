import { SupabaseClient } from '@supabase/supabase-js'
import { useContext } from 'react'

import { Context } from '../context.ts'

export function useClient(): SupabaseClient {
    const client = useContext(Context)
    if (client === undefined)
        throw new Error('No client has been specified using Provider.')
    return client
}
