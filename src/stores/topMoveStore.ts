import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTopMoveStore = defineStore('top_movie', {
  state: () => {
    return {
      // for initially empty lists

      topMovieList: [
        {
          id: 1137572,
          title: 'The Stepmother 3',
          originalTitle: 'The Stepmother 3',
          language: 'en',
          releaseYear: 2023,
          releaseDate: '2023-06-08',
          genres: ['thriller', 'drama', 'tv-movie'],
          plot: 'Elizabeth Carter will again stop at nothing to find her perfect family.',
          runtime: 108,
          budget: null,
          revenue: null,
          homepage: 'https://tubitv.com/movies/100004841/the-stepmother-3',
          status: 'released',
          posterUrl:
            'https://cinemaguide.skillbox.cc/images/1137572/rswRDWb32cwDP7KIi4WQQ4uXwLJ.jpg',
          backdropUrl:
            'https://cinemaguide.skillbox.cc/images/1137572/6C5Gnu4qa4cSm0BOd4gvl7phBJl.jpg',
          trailerUrl: 'https://youtube.com/watch?v=YO5j2Meot9c',
          trailerYouTubeId: 'YO5j2Meot9c',
          tmdbRating: 10,
          searchL: 'the stepmother 3',
          keywords: [],
          countriesOfOrigin: [],
          languages: [],
          cast: [],
          director: null,
          production: null,
          awardsSummary: null,
        },
        {
          id: 1136726,
          title: "Mermaids' Lament",
          originalTitle: "Mermaids' Lament",
          language: 'en',
          releaseYear: 2023,
          releaseDate: '2023-06-25',
          genres: ['drama', 'fantasy'],
          plot: 'A woman drowning in trauma takes a therapist beyond her own depth into the darkness. Together, they navigate treacherous waters to find a way to break through the surface and into the light.',
          runtime: 90,
          budget: null,
          revenue: null,
          homepage: 'http://www.mermaidslament.com',
          status: 'released',
          posterUrl:
            'https://cinemaguide.skillbox.cc/images/1136726/inzHD0M1fYgQBAmVq2CFQDC5mHu.jpg',
          backdropUrl:
            'https://cinemaguide.skillbox.cc/images/1136726/11X6hbNZM7YTUgHNKpIEqSWa7Nb.jpg',
          trailerUrl: 'https://youtube.com/watch?v=jNpDbx8xbqI',
          trailerYouTubeId: 'jNpDbx8xbqI',
          tmdbRating: 10,
          searchL: "mermaids' lament",
          keywords: [],
          countriesOfOrigin: [],
          languages: [],
          cast: [],
          director: null,
          production: null,
          awardsSummary: null,
        },
        {
          id: 1217281,
          title: 'iHeartRadio Jingle Ball 2023',
          originalTitle: 'iHeartRadio Jingle Ball 2023',
          language: 'en',
          releaseYear: 2023,
          releaseDate: '2023-12-21',
          genres: ['music', 'tv-movie'],
          plot: "This year's iHeartRadio Jingle Ball Tour included performances from artists including Cher, Sabrina Carpenter, OneRepublic, Niall Horan, Doechii, Big Time Rush, Jelly Roll, AJR, Pentatonix, Melanie Martinez, Paul Russell and more.",
          runtime: 84,
          budget: null,
          revenue: null,
          homepage: 'https://www.iheart.com/jingle-ball/',
          status: 'released',
          posterUrl:
            'https://cinemaguide.skillbox.cc/images/1217281/5NnDOI9TYAMFqsqcMepzd8Zhlp8.jpg',
          backdropUrl:
            'https://cinemaguide.skillbox.cc/images/1217281/yywlpVvcjiPU7BHENjNvqy8J3RM.jpg',
          trailerUrl: 'https://youtube.com/watch?v=ogtbjDSWR-8',
          trailerYouTubeId: 'ogtbjDSWR-8',
          tmdbRating: 10,
          searchL: 'iheartradio jingle ball 2023',
          keywords: [],
          countriesOfOrigin: [],
          languages: [],
          cast: [],
          director: null,
          production: null,
          awardsSummary: null,
        },
        {
          id: 722103,
          title: 'Bheemasena Nalamaharaja',
          originalTitle: 'ಭೀಮಸೇನ ನಳಮಹಾರಾಜ',
          language: 'kn',
          releaseYear: 2020,
          releaseDate: '2020-10-29',
          genres: ['drama'],
          plot: 'A pinch of love, a dollop of happiness with a scoop of togetherness. Join this cook on a flavorsome journey of love, loss and friendship. When tragedy sizzles through his life, it is to see if he can save the dish and toss a sweet ending.',
          runtime: 140,
          budget: null,
          revenue: null,
          homepage: '',
          status: 'released',
          posterUrl:
            'https://cinemaguide.skillbox.cc/images/722103/AvNNe1kOdpYOSDuCdpmKIdUPSGU.jpg',
          backdropUrl:
            'https://cinemaguide.skillbox.cc/images/722103/6wqP26sQnIcynun10tQ7499m4kp.jpg',
          trailerUrl: 'https://youtube.com/watch?v=vsjYKF8pNNo',
          trailerYouTubeId: 'vsjYKF8pNNo',
          tmdbRating: 10,
          searchL: 'bheemasena nalamaharaja. ಭೀಮಸೇನ ನಳಮಹಾರಾಜ. ಭೀಮಸೇನ ನಳಮಹಾರಾಜ',
          keywords: [],
          countriesOfOrigin: [],
          languages: [],
          cast: [],
          director: null,
          production: null,
          awardsSummary: null,
        },
        {
          id: 1207898,
          title: 'The Jack in the Box Rises',
          originalTitle: 'The Jack in the Box Rises',
          language: 'en',
          releaseYear: 2024,
          releaseDate: '2024-01-18',
          genres: ['horror'],
          plot: "When a creepy Jack-in-the-Box is discovered and opened on the grounds of an exclusive girls' school, six brave students soon enter a fight to the finish against the unleashed demon.",
          runtime: 92,
          budget: null,
          revenue: null,
          homepage: '',
          status: 'released',
          posterUrl:
            'https://cinemaguide.skillbox.cc/images/1207898/uLEL4AxKOn6pZQAF3gWXbqSkhIo.jpg',
          backdropUrl:
            'https://cinemaguide.skillbox.cc/images/1207898/8VS20PnbTc6Aza1ZjCxit9os3KD.jpg',
          trailerUrl: 'https://youtube.com/watch?v=1osssQbmSNQ',
          trailerYouTubeId: '1osssQbmSNQ',
          tmdbRating: 10,
          searchL: 'the jack in the box rises',
          keywords: [],
          countriesOfOrigin: [],
          languages: [],
          cast: [],
          director: null,
          production: null,
          awardsSummary: null,
        },
        {
          id: 1058838,
          title: 'I Love Lizzy',
          originalTitle: 'I Love Lizzy',
          language: 'tl',
          releaseYear: 2023,
          releaseDate: '2023-01-18',
          genres: ['romance', 'drama'],
          plot: 'It follows the story of a seminarian who meets and falls in love with Lizzy.',
          runtime: 102,
          budget: null,
          revenue: null,
          homepage: '',
          status: 'released',
          posterUrl:
            'https://cinemaguide.skillbox.cc/images/1058838/3YC0cVq092rWZLp7DiWXo75GRCU.jpg',
          backdropUrl:
            'https://cinemaguide.skillbox.cc/images/1058838/pmqmy2lr9UNPTaYi8HGatt7SGTy.jpg',
          trailerUrl: 'https://youtube.com/watch?v=-PTVBaiPhlI',
          trailerYouTubeId: '-PTVBaiPhlI',
          tmdbRating: 10,
          searchL: 'i love lizzy',
          keywords: [],
          countriesOfOrigin: [],
          languages: [],
          cast: [],
          director: null,
          production: null,
          awardsSummary: null,
        },
        {
          id: 1163203,
          title: 'El sabor de la Navidad',
          originalTitle: 'El sabor de la Navidad',
          language: 'es',
          releaseYear: 2023,
          releaseDate: '2023-09-11',
          genres: ['comedy', 'drama', 'romance'],
          plot: 'Three parallel stories revolving around Mexico City’s Christmas celebrations intertwine in the film’s finale. In the first story, an estranged daughter seeks reconciliation with her family. In the second, two friends put their friendship to the test when they start working as competing Santa Clauses in Alameda Central Park. In the third, a lonely chef that cooks Christmas dinners for other families confronts her feelings for her kitchen assistant.',
          runtime: 100,
          budget: null,
          revenue: null,
          homepage: '',
          status: 'released',
          posterUrl:
            'https://cinemaguide.skillbox.cc/images/1163203/eO4nzd4p7lKxUFQtQF2qui8gGNf.jpg',
          backdropUrl:
            'https://cinemaguide.skillbox.cc/images/1163203/oc5NcW6rteRCLZnOkQ3O5cGbKmG.jpg',
          trailerUrl: 'https://youtube.com/watch?v=jhpsnmlNS9A',
          trailerYouTubeId: 'jhpsnmlNS9A',
          tmdbRating: 10,
          searchL: 'el sabor de la navidad',
          keywords: [],
          countriesOfOrigin: [],
          languages: [],
          cast: [],
          director: null,
          production: null,
          awardsSummary: null,
        },
        {
          id: 1192318,
          title: 'The Chosen: Season 4',
          originalTitle: 'The Chosen: Season 4',
          language: 'en',
          releaseYear: 2024,
          releaseDate: '2024-02-01',
          genres: ['drama'],
          plot: "Clashing kingdoms. Rival rulers. The enemies of Jesus close in while His followers struggle to keep up, leaving him to carry the burden alone. Threatened by the reality of Jesus' growing influence, religious leaders do the unthinkable—ally with their Roman oppressors. As the seeds of betrayal are planted and opposition to Jesus' message turns violent, he's left with no alternative but demand his followers rise up.",
          runtime: 425,
          budget: '45000000',
          revenue: '31951584',
          homepage: 'https://www.thechosenriseup.com',
          status: 'released',
          posterUrl:
            'https://cinemaguide.skillbox.cc/images/1192318/u1YIFvomWl84APZ7phwfvxPNaaa.jpg',
          backdropUrl:
            'https://cinemaguide.skillbox.cc/images/1192318/FIo5isgVs04xKhybjPOvFYxvRZ.jpg',
          trailerUrl: 'https://youtube.com/watch?v=wisX-CEjoxc',
          trailerYouTubeId: 'wisX-CEjoxc',
          tmdbRating: 10,
          searchL: 'the chosen: season 4. the chosen season 4',
          keywords: [],
          countriesOfOrigin: [],
          languages: [],
          cast: [],
          director: null,
          production: null,
          awardsSummary: null,
        },
        {
          id: 643571,
          title: 'Unbreakable',
          originalTitle: 'Unbreakable',
          language: 'tl',
          releaseYear: 2019,
          releaseDate: '2019-11-27',
          genres: ['romance', 'drama'],
          plot: 'Mariel and Deena were strangers until they became the best of friends because of the similarities in the pain that they had experienced. Their friendship is put to the test when one of them decides to get married.',
          runtime: 119,
          budget: null,
          revenue: '1124280',
          homepage: '',
          status: 'released',
          posterUrl:
            'https://cinemaguide.skillbox.cc/images/643571/r7YbAANWNOiXP4EVZR3MzW4PbTn.jpg',
          backdropUrl:
            'https://cinemaguide.skillbox.cc/images/643571/9GOyPUGrGJDMpwlRHkZTxUX2L6F.jpg',
          trailerUrl: 'https://youtube.com/watch?v=MGOJwJImMQY',
          trailerYouTubeId: 'MGOJwJImMQY',
          tmdbRating: 10,
          searchL: 'unbreakable',
          keywords: [],
          countriesOfOrigin: [],
          languages: [],
          cast: [],
          director: null,
          production: null,
          awardsSummary: null,
        },
        {
          id: 731809,
          title: 'Tasty Aunt',
          originalTitle: '맛있는 이모',
          language: 'ko',
          releaseYear: 2020,
          releaseDate: '2020-08-10',
          genres: ['drama', 'romance'],
          plot: "Ga-yeon comes to Min-jae's house where he lives alone, and decides to live there. Min-jae is curious about Ga-yeon who he haven't seen in a long time. One day, Geon-soo goes to Min-jae's house to pick up some stuff and meets Ga-yeon. Ga-yeon seduces him. Min-jae finds out about it when he phoned Geon-soo. Da-hae meets Min-jae to become sex partners and frequently contacts each other.  Min-jae gets angry at the sight of Geon-soo wearing only underwear at his house. Gayeon comes out to meet her friend Da-hae after a long time. Ga-yeon and Da-hae who were drinking, join after seeing Min-jae and Geon-soo. That night, Min-jae gets drunk and had sex with Ga-yeon and finds out that Da-hae is not in a relationship with Min-jae. The next day, Ga-yeon knows the relationship between Da-hae and Gun-soo, and she brings the four people together...",
          runtime: 71,
          budget: null,
          revenue: null,
          homepage: '',
          status: 'released',
          posterUrl:
            'https://cinemaguide.skillbox.cc/images/731809/aRErlPlxpsfeAcwHhW9SYG9bKYd.jpg',
          backdropUrl:
            'https://cinemaguide.skillbox.cc/images/731809/df6yhpSX2G9zFzQWfU1TXnHnxzC.jpg',
          trailerUrl: 'https://youtube.com/watch?v=GSvOriDK32U',
          trailerYouTubeId: 'GSvOriDK32U',
          tmdbRating: 10,
          searchL: 'tasty aunt. 맛있는 이모. 맛있는 이모',
          keywords: [],
          countriesOfOrigin: [],
          languages: [],
          cast: [],
          director: null,
          production: null,
          awardsSummary: null,
        },
      ] as Array<movie>,
      // for data that is not yet loaded
      // top_movie: null as movie | null,
    }
  },
  getters: {
    getTopMoveie(state) {
      return state.topMovieList
    },
  },
})

interface movie {
  id: number
  title: string
  originalTitle: string
  language: string
  releaseYear: number
  releaseDate: string
  genres: string[]
  plot: string
  runtime: number
  budget: string | null
  revenue: string | null
  homepage: string
  status: string
  posterUrl: string
  backdropUrl: string
  trailerUrl: string
  trailerYouTubeId: string
  tmdbRating: number
  searchL: string
  keywords: Array<string> | []
  countriesOfOrigin: Array<string> | []
  languages: Array<string> | []
  cast: Array<string> | []
  director: string | null
  production: string | null
  awardsSummary: string | null
}
