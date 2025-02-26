import { renderHook } from '@testing-library/react'

import { useUpsert } from '../../../src/hooks/data/use-upsert.ts'
import { initialState } from '../../../src/hooks/data/state.ts'
import { Wrapper as wrapper } from '../../utils.tsx'

describe('useUpsert', () => {
    test('should throw when not inside Provider', () => {
        expect(() => renderHook(() => useUpsert('todos'))).toThrow(
            'No client has been specified using Provider.',
        )
    })

    test('should have correct initial state', async () => {
        const { result } = renderHook(() => useUpsert('todos'), { wrapper })
        expect(result.current[0]).toEqual(initialState)
    })
})
