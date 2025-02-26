# This library is an updated for of https://github.com/tmm/react-supabase. This was solely created for testing purposes and is not functional equivalent nor is it intended to be used in production. If you feel like contributing to make it production ready, feel free to do so.

## Introduction

`react-supabase-next` is a React Hooks library for [Supabase](https://supabase.io).


<br/>

## Installation

```
yarn add react-supabase-next @supabase/supabase-js
# or
npm install --save react-supabase-next @supabase/supabase-js
```

<br/>

## Quick Start

Create a Supabase client and pass it to the `Provider`:

```tsx
import { createClient } from '@supabase/supabase-js'
import { Provider } from 'react-supabase-next'

const client = createClient('https://xyzcompany.supabase.co', 'public-anon-key')

const App = () => (
  <Provider value={client}>
    <YourRoutes />
  </Provider>
)
```

Now every component inside and under the `Provider` can use the Supabase client and hooks:

```tsx
import { useRealtime } from 'react-supabase-next'

const Todos = () => {
  const [result, reexecute] = useRealtime('todos')

  const { data, fetching, error } = result

  if (fetching) return <p>Loading...</p>
  if (error) return <p>Oh no... {error.message}</p>

  return (
    <ul>
      {data.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  )
}
```

<br/>

## License

The MIT License.
