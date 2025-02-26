import { useCallback } from 'react'

import { Filter } from '../../types.ts'

export function useFilter(filter: Filter<any, any, any, any, any>) {
    return useCallback(filter, [filter])
}
