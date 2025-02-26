import { renderHook } from '@testing-library/react'

import { useFilter } from '../../../src/hooks/data/use-filter.ts'

describe('useFilter,', () => {
    test('should return filter', () => {
        const { result } = renderHook(() =>
            useFilter((query) => query.limit(10)),
        )
        expect(typeof result.current).toBe('function')
    })
})
