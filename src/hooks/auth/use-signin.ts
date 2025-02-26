import { Provider, Session, User, AuthError, SignInWithPasswordCredentials } from '@supabase/auth-js'
import { useCallback, useState } from 'react'

import { useClient } from '../use-client.js'
import { initialState } from './state.js'

export type UseSignInState = {
    error?: AuthError | null
    fetching: boolean
    session?: Session | null
    user?: User | null
}

export type UseSignInResponse = [
    UseSignInState,
    (
        credentials: SignInWithPasswordCredentials,
        options?: UseSignInOptions,
    ) => Promise<Pick<UseSignInState, 'error' | 'session' | 'user'>>,
]

export type UseSignInOptions = {
    redirectTo?: string
    scopes?: string
}

export type UseSignInConfig = {
    provider?: Provider
    options?: UseSignInOptions
}

export function useSignInWithPassword(config: UseSignInConfig = {}): UseSignInResponse {
    const client = useClient()
    const [state, setState] = useState<UseSignInState>(initialState)

    const execute = useCallback(
        async (credentials: SignInWithPasswordCredentials) => {
            setState({ ...initialState, fetching: true })
            const { data, error } = await client.auth.signInWithPassword(
                {
                    ...credentials
                }
            )
            const res = { data, error }
            setState({ ...res, fetching: false })
            return res
        },
        [client, config],
    )

    return [state, execute]
}
