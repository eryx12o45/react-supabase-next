import { renderHook } from '@testing-library/react'

import { useInsert } from '../../../src/hooks/data/use-insert.ts'
import { initialState } from '../../../src/hooks/data/state.ts'
import { Wrapper as wrapper } from '../../utils.tsx'

describe('useInsert', () => {
    test('should throw when not inside Provider', () => {
        expect(() => renderHook(() => useInsert('todos'))).toThrow(
            'No client has been specified using Provider.',
        )
    })

    test('should have correct initial state', async () => {
        const { result } = renderHook(() => useInsert('todos'), { wrapper })
        expect(result.current[0]).toEqual(initialState)
    })
})
