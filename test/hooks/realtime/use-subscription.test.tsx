import { renderHook } from '@testing-library/react'

import { useSubscription } from '../../../src/hooks/realtime/use-subscription.ts'

describe('useSubscription', () => {
    test('should throw when not inside Provider', () => {
        expect(() => renderHook(() => useSubscription(jest.fn()))).toThrow(
            'No client has been specified using Provider.',
        )
    })
})
