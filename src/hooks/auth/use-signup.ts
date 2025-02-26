import {
    AuthError,
    Session,
    SignUpWithPasswordCredentials,
    User,
} from '@supabase/auth-js'
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

export function useSignUp(): UseSignUpResponse {
    const client = useClient()
    const [state, setState] = useState<UseSignUpState>(initialState)

    const execute = useCallback(
        async (credentials: SignUpWithPasswordCredentials) => {
            setState({ ...initialState, fetching: true })
            const { data, error } = await client.auth.signUp(credentials)
            const res = { data, error }
            setState({ ...res, fetching: false })
            return res
        },
        [client],
    )

    return [state, execute]
}
