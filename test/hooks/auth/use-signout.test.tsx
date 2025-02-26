import { renderHook } from '@testing-library/react'

import { useSignOut } from '../../../src/hooks/auth/use-signout.ts'

describe('useSignOut', () => {
    it('should throw when not inside Provider', () => {
        const { result } = renderHook(() => useSignOut())
        expect(() => result.current).toThrowErrorMatchingSnapshot()
    })
})
