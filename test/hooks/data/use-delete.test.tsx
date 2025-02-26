import { renderHook } from '@testing-library/react'

import { useDelete } from '../../../src/hooks/data/use-delete.ts'
import { initialState } from '../../../src/hooks/data/state.ts'
import { Wrapper as wrapper } from '../../utils.tsx'

describe('useDelete', () => {
    test('should throw when not inside Provider', () => {
        expect(() => renderHook(() => useDelete('todos'))).toThrow(
            'No client has been specified using Provider.',
        )
    })

    test('should have correct initial state', async () => {
        const { result } = renderHook(() => useDelete('todos'), { wrapper })
        expect(result.current[0]).toEqual(initialState)
    })
})
