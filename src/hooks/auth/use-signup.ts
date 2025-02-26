import { Session, User, SignUpWithPasswordCredentials } from '@supabase/auth-js'
import { AuthError } from '@supabase/auth-js'
import { useCallback, useState } from 'react'

import { useClient } from '../use-client.js'
import { initialState } from './state.js'

export type UseSignUpState = {
    error?: AuthError | null
    fetching: boolean
    session?: Session | null
    user?: User | null
}

export type UseSignUpResponse = [
    UseSignUpState,
    (
        credentials: SignUpWithPasswordCredentials,
        options?: UseSignUpOptions,
    ) => Promise<Pick<UseSignUpState, 'error' | 'session' | 'user'>>,
]

export type UseSignUpOptions = {
    redirectTo?: string
}

export type UseSignUpConfig = {
    options?: UseSignUpOptions
}

export function useSignUp(config: UseSignUpConfig = {}): UseSignUpResponse {
    const client = useClient()
    const [state, setState] = useState<UseSignUpState>(initialState)

    const execute = useCallback(
        async (credentials: SignUpWithPasswordCredentials) => {
            setState({ ...initialState, fetching: true })
            const { data, error } = await client.auth.signUp(
                credentials
            )
            const res = { data, error }
            setState({ ...res, fetching: false })
            return res
        },
        [client, config],
    )

    return [state, execute]
}
