import { renderHook } from '@testing-library/react'

import { useInsert } from '../../../src/hooks/data/use-insert.ts'
import { initialState } from '../../../src/hooks/data/state.ts'
import { Wrapper as wrapper } from '../../utils.tsx'

describe('useInsert', () => {
    it('should throw when not inside Provider', () => {
        const { result } = renderHook(() => useInsert('todos'))
        expect(() => result.current).toThrowErrorMatchingSnapshot()
    })

    it('should have correct initial state', async () => {
        const { result } = renderHook(() => useInsert('todos'), { wrapper })
        expect(result.current[0]).toEqual(initialState)
    })
})
