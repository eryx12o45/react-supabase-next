import { PostgrestFilterBuilder } from '@supabase/postgrest-js'
import { GenericSchema } from '@supabase/supabase-js/dist/module/lib/types.js'

export type Count = 'exact' | 'planned' | 'estimated'

export type Filter<
    Schema extends GenericSchema,
    Row extends Record<any, any>,
    Result,
    RelationName,
    Relationships,
> = (
    query: PostgrestFilterBuilder<
        Schema,
        Row,
        Result,
        RelationName,
        Relationships
    >,
) => PostgrestFilterBuilder<Schema, Row, Result, RelationName, Relationships>

export type PostgrestError = {
    message: string
    details: string
    hint: string
    code: string
}

export type Returning = 'minimal' | 'representation'
