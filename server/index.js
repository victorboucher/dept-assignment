require('dotenv').config()

const 
  express = require('express'),
  app = express(),
  cors = require('cors')

app
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(cors())

const work = [
  {
    slug: 'bol',
    client: 'Bol.com',
    title: 'A summer island in the Netherlands'
  },
  {
    slug: 'kempen',
    client: 'Kempen',
    title: 'Not some average banking website'
  },
  {
    slug: 'philips',
    client: 'Philips',
    title: 'Beatiful design meets innovative technology'
  },
  {
    slug: 'gemeentemuseum',
    client: 'Gemeentemuseum',
    title: 'A 100 years of Mondriaan & De Stijl'
  },
  {
    slug: 'be-lighting',
    client: 'Be Lighting',
    title: 'Delivering clarity on a global scale'
  },
  {
    slug: 'tui',
    client: 'Tui',
    title: 'Swipe to find your next holiday destination'
  },
  {
    slug: 'chocomel',
    client: 'Chocomel',
    title: 'A campaign for the limited edition letter packs'
  },
  {
    slug: 'jbl',
    client: 'JBL',
    title: 'Live like a champion with Jerome Booteng'
  },
  {
    slug: 'zalando',
    client: 'Zalando',
    title: 'Innovative SEO and content strategy for Zalando'
  },
  {
    slug: 'koninklijke-bibliotheek',
    client: 'Koninklijke Bibliotheek',
    title: 'The search for the most influential book ever'
  },
]

app.get('/work', (req, res) => {
  res.json(work)
})

app.get('/work/:id', (req, res) => {
  const data = work.filter(work => work.slug === req.params.id)
  res.json(...data)
})

app.listen(process.env.PORT || 3001, () => console.log(`Server has started.`))
