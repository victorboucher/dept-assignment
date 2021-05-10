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
    title: 'A summer island in the Netherlands',
    category: '1'
  },
  {
    slug: 'kempen',
    client: 'Kempen',
    title: 'Not some average banking website',
    category: '1'
  },
  {
    slug: 'philips',
    client: 'Philips',
    title: 'Beatiful design meets innovative technology',
    category: '1'
  },
  {
    slug: 'gemeentemuseum',
    client: 'Gemeentemuseum',
    title: 'A 100 years of Mondriaan & De Stijl',
    category: '1'
  },
  {
    slug: 'be-lighting',
    client: 'Be Lighting',
    title: 'Delivering clarity on a global scale',
    category: '1'
  },
  {
    slug: 'tui',
    client: 'Tui',
    title: 'Swipe to find your next holiday destination',
    category: '2'
  },
  {
    slug: 'chocomel',
    client: 'Chocomel',
    title: 'A campaign for the limited edition letter packs',
    category: '2'
  },
  {
    slug: 'jbl',
    client: 'JBL',
    title: 'Live like a champion with Jerome Booteng',
    category: '2'
  },
  {
    slug: 'zalando',
    client: 'Zalando',
    title: 'Innovative SEO and content strategy for Zalando',
    category: '2'
  },
  {
    slug: 'koninklijke-bibliotheek',
    client: 'Koninklijke Bibliotheek',
    title: 'The search for the most influential book ever',
    category: '2'
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
