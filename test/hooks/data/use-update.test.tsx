import { renderHook } from '@testing-library/react'

import { useUpdate } from '../../../src/hooks/data/use-update.ts'
import { initialState } from '../../../src/hooks/data/state.ts'
import { Wrapper as wrapper } from '../../utils.tsx'

describe('useUpdate', () => {
    it('should throw when not inside Provider', () => {
        const { result } = renderHook(() => useUpdate('todos'))
        expect(() => result.current).toThrowErrorMatchingSnapshot()
    })

    it('should throw when filter not provided to execute', async () => {
        const { result } = renderHook(() => useUpdate('todos'), { wrapper })
        await expect(
            result.current[1]({ status: 'complete' }),
        ).rejects.toThrowErrorMatchingSnapshot()
    })

    it('should have correct initial state', async () => {
        const { result } = renderHook(() => useUpdate('todos'), { wrapper })
        expect(result.current[0]).toEqual(initialState)
    })
})
