import { renderHook } from '@testing-library/react-hooks'

import { useSignInWithPassword } from '../../../src/hooks/auth/use-signin.ts'

describe('useSignInWithPassword', () => {
    it('should throw when not inside Provider', () => {
        const { result } = renderHook(() => useSignInWithPassword())
        expect(() => result.current).toThrowErrorMatchingSnapshot()
    })
})
