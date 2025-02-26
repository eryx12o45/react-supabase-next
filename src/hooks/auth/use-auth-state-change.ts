import { AuthChangeEvent, Session } from '@supabase/auth-js'
import { useEffect } from 'react'

import { useClient } from '../use-client.ts'

export function useAuthStateChange(
    callback: (event: AuthChangeEvent, session: Session | null) => void,
) {
    const client = useClient()

    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {
        const {
            data: { subscription },
        } = client.auth.onAuthStateChange(callback)
        return () => {
            subscription?.unsubscribe()
        }
    }, [])
    /* eslint-enable react-hooks/exhaustive-deps */
}
