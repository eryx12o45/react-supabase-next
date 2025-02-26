import { renderHook } from '@testing-library/react'

import { useSignOut } from '../../../src/hooks/auth/use-signout.ts'

describe('useSignOut', () => {
    test('should throw when not inside Provider', () => {
        expect(() => renderHook(() => useSignOut())).toThrow('No client has been specified using Provider.')
    })
})
