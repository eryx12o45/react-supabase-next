import { AuthError } from '@supabase/auth-js'
import { useCallback, useState } from 'react'

import { useClient } from '../use-client.ts'

export type UseResetPasswordState = {
    error?: AuthError | null
    fetching: boolean
}

export type UseResetPasswordResponse = [
    UseResetPasswordState,
    (
        email: string,
        options?: UseResetPasswordOptions,
    ) => Promise<Pick<UseResetPasswordState, 'error'>>,
]

export type UseResetPasswordOptions = {
    redirectTo?: string
}

export type UseResetPasswordConfig = {
    options?: UseResetPasswordOptions
}

const initialState = {
    error: undefined,
    fetching: false,
}

export function useResetPassword(
    config: UseResetPasswordConfig = {},
): UseResetPasswordResponse {
    const client = useClient()
    const [state, setState] = useState<UseResetPasswordState>(initialState)

    const execute = useCallback(
        async (email: string, options?: UseResetPasswordOptions) => {
            setState({ ...initialState, fetching: true })
            const { error } = await client.auth.resetPasswordForEmail(
                email,
                options ?? config.options,
            )
            const res = { error }
            setState({ ...res, fetching: false })
            return res
        },
        [client, config],
    )

    return [state, execute]
}
