import { renderHook } from '@testing-library/react'

import { useSubscription } from '../../../src/hooks/realtime/use-subscription.ts'

describe('useSubscription', () => {
    it('should throw when not inside Provider', () => {
        const { result } = renderHook(() => useSubscription(jest.fn()))
        expect(() => result.current).toThrowErrorMatchingSnapshot()
    })
})
