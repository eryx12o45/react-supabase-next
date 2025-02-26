import { renderHook } from '@testing-library/react'

import { useAuthStateChange } from '../../../src/hooks/auth/use-auth-state-change.ts'

describe('useAuthStateChange', () => {
    it('should throw when not inside Provider', () => {
        const { result } = renderHook(() => useAuthStateChange(jest.fn()))
        expect(() => result.current).toThrowErrorMatchingSnapshot()
    })
})
