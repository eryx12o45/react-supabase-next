import { renderHook } from '@testing-library/react'

import { useSelect } from '../../../src/hooks/data/use-select.ts'
import { initialState } from '../../../src/hooks/data/state.ts'
import { Wrapper as wrapper } from '../../utils.tsx'

describe('useSelect', () => {
    test('should throw when not inside Provider', () => {
        expect(() => renderHook(() => useSelect('todos'))).toThrow(
            'No client has been specified using Provider.',
        )
    })

    test('should have correct initial state', async () => {
        const { result } = renderHook(
            () => useSelect('todos', { pause: true }),
            { wrapper },
        )
        expect(result.current[0]).toEqual({ ...initialState, stale: false })
    })
})
