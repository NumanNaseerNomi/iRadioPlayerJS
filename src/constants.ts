/**
 * @public
 */
export const ApiUrl = 'http://all.api.radio-browser.info/json/servers';

/**
 * @public
 */
export const ServersList = 
[
  {
      "ip": "2a0a:4cc0:0:db9:282b:91ff:fed0:ddea",
      "name": "at1.api.radio-browser.info"
  },
  {
      "ip": "2a03:4000:37:42:c4fe:4cff:fea7:8941",
      "name": "de1.api.radio-browser.info"
  },
  {
      "ip": "2001:19f0:5001:32a4:5400:2ff:fe37:75c2",
      "name": "nl1.api.radio-browser.info"
  },
  {
      "ip": "89.58.16.19",
      "name": "v22022045963187310.megasrv.de"
  },
  {
      "ip": "91.132.145.114",
      "name": "de1.api.radio-browser.info"
  },
  {
      "ip": "95.179.139.106",
      "name": "nl1.api.radio-browser.info"
  }
];

/**
 * @public
 */
export const StationSearchOrder = {
  name: 'name',
  url: 'url',
  homepage: 'homepage',
  favicon: 'favicon',
  tags: 'tags',
  country: 'country',
  state: 'state',
  language: 'language',
  votes: 'votes',
  codec: 'codec',
  bitrate: 'bitrate',
  lastCheckOK: 'lastCheckOK',
  lastCheckTime: 'lastCheckTime',
  clickTimeStamp: 'clickTimeStamp',
  clickCount: 'clickCount',
  clickTrend: 'clickTrend',
  random: 'random'
} as const

/**
 * @public
 */
export const StationSearchType = {
  byUuid: 'byUuid',
  byName: 'byName',
  byNameExact: 'byNameExact',
  byCodec: 'byCodec',
  byCodexExact: 'byCodecExact',
  byCountry: 'byCountry',
  byCountryExact: 'byCountryExact',
  byCountryCodeExact: 'byCountryCodeExact',
  byState: 'byState',
  byStateExact: 'byStateExact',
  byLanguage: 'byLanguage',
  byLanguageExact: 'byLanguageExact',
  byTag: 'byTag',
  byTagExact: 'byTagExact'
} as const

/**
 * @public
 */
export type StationResponse = {
  changeuuid: string
  stationuuid: string
  name: string
  url: string
  url_resolved: string
  homepage: string
  favicon: string
  tags: string
  country: string
  countrycode: string
  state: string
  language: string
  votes: number
  lastchangetime: string
  codec: string
  bitrate: number
  hls: number
  lastcheckok: number
  lastchecktime: string
  lastlocalchecktime: string
  lastcheckoktime: string
  clicktimestamp: string
  clickcount: number
  clicktrend: number
  geo_lat?: number | null
  geo_long?: number | null
}

/**
 * @public
 */
export type Station = {
  changeId: string
  id: string
  name: string
  url: string
  urlResolved: string
  homepage: string
  favicon: string
  tags: string[]
  country: string
  countryCode: string
  state: string
  language: string[]
  votes: number
  lastChangeTime: Date
  codec: string
  bitrate: number
  hls: boolean
  lastCheckOk: boolean
  lastCheckTime: Date
  lastCheckOkTime: Date
  lastLocalCheckTime: Date
  clickTimestamp: Date
  clickCount: number
  clickTrend: number
  geoLat?: number | null
  geoLong?: number | null
}

/**
 * @public
 */
export type StationQuery = {
  offset?: number
  limit?: number
  reverse?: boolean
  order?: keyof typeof StationSearchOrder
  hideBroken?: boolean
  removeDuplicates?: boolean
}

/**
 * @public
 */
export type AdvancedStationQuery = {
  name?: string
  nameExact?: boolean
  country?: string
  countryExact?: boolean
  countryCode?: string
  state?: string
  stateExact?: boolean
  language?: string
  languageExact?: boolean
  tag?: string
  tagExact?: boolean
  tagList?: string[]
  codec?: string
  bitrateMin?: string
  bitrateMax?: string
  hasGeoInfo?: boolean
} & StationQuery

/**
 * @public
 */
export type Query = {
  order?: 'name' | 'stationcount'
  reverse?: boolean
  hideBroken?: boolean
} & Record<string, any>

// valid for country codes also
/**
 * @public
 */
export type CountryResult = {
  name: string
  stationcount: number
}

/**
 * @public
 */
export type TagResult = CountryResult
/**
 * @public
 */
export type CountryStateResult = CountryResult & {
  country: string
}
