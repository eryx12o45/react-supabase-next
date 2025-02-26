import { useCallback } from 'react'

import { Filter } from '../../types.js'

export function useFilter(filter: Filter<any, any, any, any, any>, deps: any[] = []) {
    /* eslint-disable react-hooks/exhaustive-deps */
    /* eslint-enable react-hooks/exhaustive-deps */
    return useCallback(filter, deps)
}
