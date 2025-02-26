import { renderHook } from '@testing-library/react'

import { useRealtime } from '../../../src/hooks/realtime/use-realtime.ts'
import { Wrapper as wrapper } from '../../utils.tsx'

describe('useRealtime', () => {
    it('should throw when not inside Provider', () => {
        const { result } = renderHook(() => useRealtime('todos'))
        expect(() => result.current).toThrowErrorMatchingSnapshot()
    })

    it('should throw when trying to listen all database changes', () => {
        const { result } = renderHook(() => useRealtime('*'), { wrapper })
        expect(() => result.current).toThrowErrorMatchingSnapshot()
    })

    it('should throw when trying to listen all database changes via options', () => {
        const { result } = renderHook(
            () =>
                useRealtime('*', {
                    select: {
                        columns: 'id, username, completed',
                        filter: (query) => query.eq('completed', false),
                    },
                }),
            { wrapper },
        )
        expect(() => result.current).toThrowErrorMatchingSnapshot()
    })
})
