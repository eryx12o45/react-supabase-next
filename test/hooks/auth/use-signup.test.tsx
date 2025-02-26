import { renderHook } from '@testing-library/react'

import { useSignUp } from '../../../src/hooks/auth/use-signup.ts'

describe('useSignUp', () => {
    it('should throw when not inside Provider', () => {
        const { result } = renderHook(() => useSignUp())
        expect(() => result.current).toThrowErrorMatchingSnapshot()
    })
})
