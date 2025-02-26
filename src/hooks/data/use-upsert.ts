import { useCallback, useEffect, useRef, useState } from 'react'

import { Count, Filter, PostgrestError, Returning } from '../../types.ts'
import { useClient } from '../use-client.js'
import { initialState } from './state.js'

export type UseUpsertState<Data = any> = {
    count?: number | null
    data?: Data | Data[] | null
    error?: PostgrestError | null
    fetching: boolean
}

export type UseUpsertResponse<Data = any> = [
    UseUpsertState<Data>,
    (
        values: Partial<Data> | Partial<Data>[],
        options?: UseUpsertOptions,
        filter?: Filter<any, any, any, any, any>,
    ) => Promise<Pick<UseUpsertState<Data>, 'count' | 'data' | 'error'>>,
]

export type UseUpsertOptions = {
    count?: Count
    onConflict?: string
    returning?: Returning
} | undefined

export type UseUpsertConfig = {
    filter?: Filter<any, any, any, any, any>
    options?: UseUpsertOptions
}

export function useUpsert<Data = any>(
    table: string,
    config: UseUpsertConfig = { options: {} },
): UseUpsertResponse<Data> {
    const client = useClient()
    const isMounted = useRef(false)
    const [state, setState] = useState<UseUpsertState>(initialState)

    /* eslint-disable react-hooks/exhaustive-deps */
    const execute = useCallback(
        async (
            values: Partial<Data> | Partial<Data>[],
            options?: UseUpsertOptions,
            filter?: Filter<any, any, any, any, any>,
        ) => {
            const refine = filter ?? config.filter
            setState({ ...initialState, fetching: true })
            const source = client
                .from(table)
                .upsert(values, options ?? config.options)

            const { count, data, error } = await (refine
                ? refine(source)
                : source)

            const res = { count, data, error }
            if (isMounted.current) setState({ ...res, fetching: false })
            return res
        },
        [client],
    )
    /* eslint-enable react-hooks/exhaustive-deps */

    useEffect(() => {
        isMounted.current = true
        return () => {
            isMounted.current = false
        }
    }, [])

    return [state, execute]
}
