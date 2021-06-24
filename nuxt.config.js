import * as config from './config'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - ${config.APP_TITLE}` : `${config.APP_TITLE}`
    },
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/app.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/axios.js',
    '@/plugins/chain.js',
    '@/plugins/event-bus.client.js',
    '@/plugins/global-mixins.js',
    '@/plugins/mavon-editor.client.js',
    '@/plugins/scot-api.js',
    '@/plugins/sidechain.js',
    '@/plugins/vue-lazyload.js',
    '@/plugins/vue-notification.js',
    '@/plugins/vue-timeago.js',
    '@/plugins/vue-timers.client.js',
    '@/plugins/vuelidate.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/color-mode',
    '@nuxtjs/dotenv',
    '@nuxtjs/fontawesome'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@privyid/nuxt-csrf',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    'cookie-universal-nuxt'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: config.APP_DOMAIN
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      compact: true
    },

    transpile: [
      'vue-icon',
      'vue-pincode-input',
      'vue-notification',
      'sanitize-html',
      /vue-awesome/
    ]
  },

  colorMode: {
    preference: 'light'
  },

  modern: 'server',

  bootstrapVue: {
    icons: false,
    bootstrapCSS: false,
    bootstrapVueCSS: false,

    componentPlugins: [
      'AlertPlugin',
      'AvatarPlugin',
      'BadgePlugin',
      'ButtonGroupPlugin',
      'ButtonPlugin',
      'CardPlugin',
      'FormCheckboxPlugin',
      'FormFilePlugin',
      'FormGroupPlugin',
      'FormInputPlugin',
      'FormPlugin',
      'FormRadioPlugin',
      'FormSelectPlugin',
      'FormTagsPlugin',
      'FormTextareaPlugin',
      'ImagePlugin',
      'InputGroupPlugin',
      'LayoutPlugin',
      'MediaPlugin',
      'ModalPlugin',
      'NavbarPlugin',
      'PaginationPlugin',
      'PopoverPlugin',
      'ProgressPlugin',
      'SpinnerPlugin',
      'TablePlugin',
      'TooltipPlugin'
    ]
  },

  fontawesome: {
    component: 'fa',
    suffix: true,
    icons: {
      solid: ['faUsers', 'faLink', 'faMapMarkedAlt', 'faCheck', 'faArrowRight', 'faPlus', 'faHeart', 'faHeartBroken', 'faTimes', 'faUndo', 'faRedo', 'faPencilAlt', 'faCircleNotch', 'faSortAmountDown', 'faCommentAlt', 'faRetweet', 'faEllipsisH', 'faAngleDown', 'faAngleRight', 'faAngleLeft'],
      regular: ['faMoon', 'faSun', 'faTimesCircle', 'faComments', 'faCommentAlt'],
      brands: []
    }
  },

  publicRuntimeConfig: {
    ...config
  },

  privateRuntimeConfig: {
    HS_API_KEY: process.env.HS_API_KEY
  },

  serverMiddleware: {
    '/api/v1': '~/api'
  },

  render: {
    csp: {
      reportOnly: true,
      hashAlgorithm: 'sha256',
      policies: {
        'default-src': ["'self'", '* data:', 'img.3speakcontent.online', 'emb.d.tube', 'www.youtube.com', 'staticxx.facebook.com', 'player.vimeo.com', 'https://cdnjs.cloudflare.com'],
        'img-src': ['https:', '* data:'],
        'worker-src': ["'self'", 'blob:'],
        'style-src': ["'self'", "'unsafe-inline'", 'fonts.googleapis.com', 'https://cdnjs.cloudflare.com'],
        'script-src': [
          "'self'",
          "'unsafe-inline'",
          "'unsafe-eval'",
          'data:',
          'https:',
          'www.google-analytics.com',
          'connect.facebook.net',
          'https://cdnjs.cloudflare.com'
        ],
        'connect-src': [
          "'self'",
          'wss://ws.beechat.hive-engine.com',
          'https://beechat.hive-engine.com',
          'https://accounts.hive-engine.com',
          'https://history.steem-engine.net',
          'https://api.hive-engine.com',
          'https://api.steem-engine.net',
          'https://scot-api.hive-engine.com',
          'https://scot-api.steem-engine.net',
          'https://steemitimages.com',
          'https://images.hive.blog',
          'securepubads.g.doubleclick.net',
          'https://api.steemit.com',
          'https://api.hive.blog',
          'api.blocktrades.us',
          'https://hivesigner.com',
          'https://pagead2.googlesyndication.com',
          'http://adservice.google.com',
          'https://www.google-analytics.com',
          'https://api.openhive.network',
          'https://ha.herpc.dtools.dev',
          ...config.NODES
        ],
        'form-action': ["'self'"],
        'frame-ancestors': ["'none'"],
        'object-src': ["'none'"],
        'report-uri': [
          '/api/v1/csp-violation'
        ]
      }
    }
  },

  auth: {
    strategies: {
      cookie: {
        cookie: {
          name: null
        },
        token: {
          required: false,
          type: false
        },
        user: {
          property: false,
          autoFetch: false
        },
        endpoints: {
          login: { url: '/api/v1/login', method: 'post' },
          logout: { url: '/api/v1/logout', method: 'post' },
          user: { url: '/api/v1/me', method: 'post' },
          csrf: false
        }
      }
    },
    redirect: true,
    cookie: {
      prefix: 'auth.',
      options: {
        path: '/',
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production'
      }
    }
  },

  server: {
    host: '0.0.0.0'
  },

  router: {
    extendRoutes (routes, resolve) {
      routes = routes.filter(r => !['post', 'feed'].includes(r.name))
        .map((r) => {
          const route = r

          if (route.path === '/:user') {
            route.path = route.path.replace(':', '@:')
          } else if (route.name.startsWith('sort')) {
            route.path = route.path.replace(':sort', ':sort(hot|trending|promoted|payout|payout_comments|muted|created|curated)')
          }

          return route
        })

      routes.push({
        name: 'user-feed',
        path: '/@:user/feed',
        component: resolve(__dirname, 'pages/feed.vue'),
        chunkName: 'pages/_user/feed'
      })

      routes.push({
        name: 'user-post',
        path: '/@:user/:post',
        component: resolve(__dirname, 'pages/post.vue'),
        chunkName: 'pages/_user/_post'
      })

      routes.push({
        name: 'tag-user-post',
        path: '/:tag/@:user/:post',
        redirect: { name: 'user-post' }
      })

      return routes
    }
  }
}