import { renderHook } from '@testing-library/react'

import { useAuthStateChange } from '../../../src/hooks/auth/use-auth-state-change.ts'

describe('useAuthStateChange', () => {
    test('should throw when not inside Provider', () => {
        expect(() => renderHook(() => useAuthStateChange(jest.fn()))).toThrow(
            'No client has been specified using Provider.',
        )
    })
})
