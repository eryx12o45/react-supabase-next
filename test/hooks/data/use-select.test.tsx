import { renderHook } from '@testing-library/react'

import { useSelect } from '../../../src/hooks/data/use-select.ts'
import { initialState } from '../../../src/hooks/data/state.ts'
import { Wrapper as wrapper } from '../../utils.tsx'

describe('useSelect', () => {
    it('should throw when not inside Provider', () => {
        const { result } = renderHook(() => useSelect('todos'))
        expect(() => result.current).toThrowErrorMatchingSnapshot()
    })

    it('should have correct initial state', async () => {
        const { result } = renderHook(
            () => useSelect('todos', { pause: true }),
            { wrapper },
        )
        expect(result.current[0]).toEqual({ ...initialState, stale: false })
    })
})
