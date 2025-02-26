import { renderHook } from '@testing-library/react'

import { useResetPassword } from '../../../src/hooks/auth/use-reset-password.ts'

describe('useResetPassword', () => {
    it('should throw when not inside Provider', () => {
        const { result } = renderHook(() => useResetPassword())
        expect(() => result.current).toThrowErrorMatchingSnapshot()
    })
})
