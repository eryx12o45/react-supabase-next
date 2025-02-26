import { renderHook } from '@testing-library/react'

import { useClient } from '../../src/hooks/use-client.ts'
import { Wrapper as wrapper } from '../utils.tsx'

describe('useClient', () => {
    it('should throw when not inside Provider', () => {
        const { result } = renderHook(() => useClient())
        expect(() => result.current).toThrowErrorMatchingSnapshot()
    })

    it('should return client', () => {
        const { result } = renderHook(() => useClient(), { wrapper })
        expect(Object.keys(result.current)).toEqual([
            'supabaseUrl',
            'supabaseKey',
            'restUrl',
            'realtimeUrl',
            'authUrl',
            'storageUrl',
            'schema',
            'auth',
            'realtime',
        ])
    })
})
