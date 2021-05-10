require('dotenv').config()

const 
  express = require('express'),
  app = express(),
  cors = require('cors')

app
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(cors())
  .use(express.static('public'))

const work = [
  {
    slug: 'bol',
    client: 'Bol.com',
    title: 'A summer island in the Netherlands',
    category: 'commerce'
  },
  {
    slug: 'kempen',
    client: 'Kempen',
    title: 'Not some average banking website',
    category: 'finance'
  },
  {
    slug: 'philips',
    client: 'Philips',
    title: 'Beatiful design meets innovative technology',
    category: 'technology'
  },
  {
    slug: 'gemeentemuseum',
    client: 'Gemeentemuseum',
    title: 'A 100 years of Mondriaan & De Stijl',
    category: 'culture'
  },
  {
    slug: 'be-lighting',
    client: 'Be Lighting',
    title: 'Delivering clarity on a global scale',
    category: 'technology'
  },
  {
    slug: 'tui',
    client: 'TUI',
    title: 'Swipe to find your next holiday destination',
    category: 'commerce'
  },
  {
    slug: 'chocomel',
    client: 'Chocomel',
    title: 'A campaign for the limited edition letter packs',
    category: 'commerce'
  },
  {
    slug: 'jbl',
    client: 'JBL',
    title: 'Live like a champion with Jerome Booteng',
    category: 'technology'
  },
  {
    slug: 'zalando',
    client: 'Zalando',
    title: 'Innovative SEO and content strategy for Zalando',
    category: 'commerce'
  },
  {
    slug: 'koninklijke-bibliotheek',
    client: 'Koninklijke Bibliotheek',
    title: 'The search for the most influential book ever',
    category: 'culture'
  },
]

const clients = [
  'nivea', 
  'mona', 
  'transavia', 
  'zalando', 
  'tomtom', 
  'unilever', 
  'adidas', 
  'pathe', 
  'abn', 
  'triumph', 
  'microsoft', 
  'oxxio', 
  'nn', 
  'ziggo', 
  'walibi', 
  'klm'
]

app.get('/work', (req, res) => {
  res.json(work)
})

app.get('/clients', (req, res) => {
  res.json(clients)
})

app.get('/work/:id', (req, res) => {
  const data = work.filter(work => work.slug === req.params.id)
  res.json(...data)
})

app.listen(process.env.PORT || 3001, () => console.log(`Server has started.`))
