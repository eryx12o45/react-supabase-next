import { renderHook } from '@testing-library/react'

import { useUpdate } from '../../../src/hooks/data/use-update.ts'

describe('useUpdate', () => {
    test('should throw when not inside Provider', () => {
        expect(() => renderHook(() => useUpdate('todos'))).toThrow(
            'No client has been specified using Provider.',
        )
    })
})
