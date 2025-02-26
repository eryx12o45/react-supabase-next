import { useEffect } from 'react'
import { RealtimeMessage } from '@supabase/realtime-js'
import { useClient } from '../use-client.js'

export type UseSubscriptionConfig = {
    event?: string
    table?: string
}

export function useSubscription(
    callback: (payload: RealtimeMessage) => void,
    config: UseSubscriptionConfig = { event: '*', table: '*' },
) {
    const client = useClient()

    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {
        const subscription = client
            .channel(config.table ?? '*')
            .on("system", config.event ?? '*', callback)
            .subscribe()
        return () => {
            subscription.unsubscribe()
        }
    }, [])
    /* eslint-enable react-hooks/exhaustive-deps */
}
