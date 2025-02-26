import { renderHook } from '@testing-library/react'

import { useResetPassword } from '../../../src/hooks/auth/use-reset-password.ts'

describe('useResetPassword', () => {
    test('should throw when not inside Provider', () => {
        expect(() => renderHook(() => useResetPassword())).toThrow(
            'No client has been specified using Provider.',
        )
    })
})
