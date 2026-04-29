# Nova MVP Starter

Starter project per **Nova Private Beta v0.1**: stanze live su qualunque tema, chat realtime, upload media e recap AI.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Supabase Auth, Postgres, Realtime, Storage
- OpenAI API per recap

## 1. Installazione

```bash
npm install
cp .env.example .env.local
npm run dev
```

Apri:

```txt
http://localhost:3000
```

## 2. Configura Supabase

Crea un progetto Supabase e copia in `.env.local`:

```txt
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
OPENAI_API_KEY=
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Poi apri Supabase SQL Editor e lancia:

```txt
supabase/schema.sql
```

## 3. Storage

Crea un bucket Supabase Storage:

```txt
room-media
```

Per la beta puoi renderlo pubblico. In produzione conviene usare signed URLs e regole più restrittive.

## 4. Auth

In Supabase Auth:

- abilita Email Auth
- configura Site URL:

```txt
http://localhost:3000
```

Quando deployi, aggiungi anche il dominio pubblico.

## 5. Realtime

In Supabase, abilita Realtime sulla tabella:

```txt
messages
```

## 6. Deploy

Consigliato: Vercel.

1. carica il progetto su GitHub
2. importalo su Vercel
3. aggiungi le environment variables
4. deploy

Netlify può funzionare, ma per Next.js + API routes + App Router Vercel è il percorso più lineare.

## Funzioni incluse

- Landing
- Magic link login
- Dashboard stanze
- Creazione stanza
- Pagina stanza `/r/[slug]`
- Chat realtime via Supabase
- API messages
- API recap
- Pagina recap `/recap/[slug]`
- Schema SQL Supabase

## Da completare nel prossimo sprint

- UI upload media nella pagina stanza/creazione stanza
- Conteggio partecipanti live
- Moderazione base
- Share buttons
- Analytics beta
- Error states più robusti
- Branding definitivo

## Nota importante

Il recap funziona anche senza `OPENAI_API_KEY`, ma usa un fallback statico. Per recap reali devi impostare `OPENAI_API_KEY`.
