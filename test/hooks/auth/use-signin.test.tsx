import { renderHook } from '@testing-library/react'

import { useSignInWithPassword } from '../../../src/hooks/auth/use-signin.ts'

describe('useSignInWithPassword', () => {
    test('should throw when not inside Provider', () => {
        expect(() => renderHook(() => useSignInWithPassword())).toThrow(
            'No client has been specified using Provider.',
        )
    })
})
