import { renderHook } from '@testing-library/react'

import { useSignUp } from '../../../src/hooks/auth/use-signup.ts'

describe('useSignUp', () => {
    test('should throw when not inside Provider', () => {
        expect(() => renderHook(() => useSignUp())).toThrow(
            'No client has been specified using Provider.',
        )
    })
})
