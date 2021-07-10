// Upload files in static/ So any file static/file.pdf -> /file.pdf is accessible at root

export default {
  name: 'Aman Kumar Keshu',
  domain: 'template.amankumarkeshu.com', // add without https:// , used in meta tags and share urls
  image: '/images/bigheadkarngyan.png',
  email: 'amankumarkeshu92@gmail.com',
  googleAnalyticsV4: {
    enabled: false,
    id: ''
  },
  plausibleAnalytics: {
    enabled: true,
    domain: 'template.amankumarkeshu.com',
    trackLocalhost: false,
    // leave it empty if plausible is not self hosted
    apiHost: 'https://plausible.io' // default: https://plausible.io
  },
  // enable if you want comments and likes on posts
  // see how it looks on karngyan.com
  firebase: {
    enabled: false
  },
  social: {
    github: 'amankumarkeshu',
    linkedin: 'aman-kumar-keshu-46475a151',
    facebook: 'amankumar.keshu',
    twitter: 'amankumarkeshu3',
    instagram: 'amankumarkeshu',
    codestats: 'amankumarkeshu' // https://codestats.net make a profile if you dont already have one.
  },
  buyMeACoffee: {
    enabled: true,
    url: 'https://www.buymeacoffee.com/amankumarkeshu'
  },
  projects: {
    enabled: true,
  },
  blog: {
    enabled: true,
  },
  resume: {
    enabled: true,
    pdfUrl: '/Aman_Kumar BITMESRA.pdf' // add files in static folder
  },
  uses: {
    enabled: true,
    meta: [
      {title: 'OS', value: 'macOS Catalina'},
      {title: 'Memory', value: '8 GB 2667 MHz DDR4'},
      {title: 'Keyboard', value: 'Redgear Gaming semi mechanical'},
      {title: 'Mouse', value: 'Logitech Silent Pebble'},
      {title: 'Laptop • Processor • Graphics', value: 'MacBook Pro (16-inch, 2019) • 2.6 GHz 6-Core Intel Core i7 • AMD Radeon Pro 5300M 4 GB + Intel UHD Graphics 630 1536 MB'}
    ]
  },
  workedAt: {
    // add logos in static and at max add 3/4
    enabled: true,
    meta: [
      { name: 'CommerceIQ', src: '/images/commerceiq.png', url: 'https://commerceiq.ai' },
      { name: 'Coding Blocks', src: '/images/codingblocks.png', url: 'https://codingblocks.com' },
      { name: 'CrioDo', src: '/images/crio.png', url: 'https://crio.do' },
    ]
  },
  loadingIndicator: {
    name: 'pulse'
    // https://tobiasahlin.com/spinkit/
    // circle
    // cube-grid
    // fading-circle
    // folding-cube
    // chasing-dots
    // nuxt
    // pulse
    // rectangle-bounce
    // rotating-plane
    // three-bounce
    // wandering-cubes
  },
  strings: {
    en_US: {
      download: 'download',
      nav: {
        home: 'home',
        blog: 'blog',
        projects: 'projects',
        uses: 'uses',
        resume: 'résumé',
        buyMeACoffee: 'buy me a beer',
        signIn: 'sign in',
        signOut: 'sign out'
      },
      hero: {
        iBlogTech: 'i blog tech',
        haveALook: 'have a look',
        friendlyNeighborhood: 'your friendly neighborhood',
        description: 'i am a software engineer and a part time freelancer.',
        words: ['developer', 'engineer', 'programmer', 'Cricketer', 'Horse Rider'],
      },
      githubCalendar: {
        header: 'contributions',
        subtext: 'github calendar heatmap'
      },
      blog: {
        header: 'blog',
        subtext: 'i try to write once in a while. let me know your thoughts in comments or amankumarkeshu92@gmail.com'
      },
      recentBlog: {
        header: 'recent blogs',
        subtext: 'it takes a lot of time to write man'
      },
      uses: {
        header: 'uses',
        subtext: 'a quick summary of what I use on a daily basis to code and some codestats.net flex'
      },
      projects: {
        header: 'projects',
        subtext: 'this page lists some of my personal and work projects. every project has some story, click on the title to read'
      }
    }
  }
}
