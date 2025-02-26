import { renderHook } from '@testing-library/react'

import { useClient } from '../../src/hooks/use-client.ts'
import { Wrapper as wrapper } from '../utils.tsx'

describe('useClient', () => {
    test('should throw when not inside Provider', () => {
        expect(() => renderHook(() => useClient())).toThrow(
            'No client has been specified using Provider.',
        )
    })

    test('should return client', () => {
        const { result } = renderHook(() => useClient(), { wrapper })
        expect(Object.keys(result.current)).toEqual([
            'supabaseUrl',
            'supabaseKey',
            'realtimeUrl',
            'authUrl',
            'storageUrl',
            'functionsUrl',
            'storageKey',
            'headers',
            'auth',
            'fetch',
            'realtime',
            'rest',
        ])
    })
})
