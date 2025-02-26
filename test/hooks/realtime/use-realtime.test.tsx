import { renderHook } from '@testing-library/react'

import { useRealtime } from '../../../src/hooks/realtime/use-realtime.ts'
import { Wrapper as wrapper } from '../../utils.tsx'

describe('useRealtime', () => {
    test('should throw when not inside Provider', () => {
        expect(() => renderHook(() => useRealtime('todos'))).toThrow(
            'No client has been specified using Provider.',
        )
    })

    test('should throw when trying to listen all database changes', () => {
        expect(() => renderHook(() => useRealtime('*'), { wrapper })).toThrow(
            'Must specify table or row. Cannot listen for all database changes.',
        )
    })

    test('should throw when trying to listen all database changes via options', () => {
        expect(() =>
            renderHook(
                () =>
                    useRealtime('*', {
                        select: {
                            columns: 'id, username, completed',
                            filter: (query) => query.eq('completed', false),
                        },
                    }),
                { wrapper },
            ),
        ).toThrow(
            'Must specify table or row. Cannot listen for all database changes.',
        )
    })
})
