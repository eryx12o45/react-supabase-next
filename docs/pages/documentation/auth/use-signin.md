# useSignIn

Log in existing user, or login via a third-party provider.

```tsx highlight=4
import { useSignInWithPassword } from 'react-supabase'

function Page() {
  const [{ error, fetching, session, user }, signIn] = useSignInWithPassword()

  async function onClickSignIn() {
    const { error, session, user } = await useSignInWithPassword({
      email: 'user@example.com',
      password: 'foobarbaz',
    })
  }

  if (error) return <div>Error signing in</div>
  if (fetching) return <div>Signing in</div>
  if (user) return <div>Logged in</div>

  return ...
}
```
