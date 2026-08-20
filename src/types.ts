export type TopMovieList = {
  id: number
  title: string
  originalTitle: string
  language: string
  releaseYear: number
  releaseDate: string
  genres: string[]
  plot: string
  runtime: number
  budget: null | number
  revenue: null | number
  homepage: string
  status: string
  posterUrl: string
  backdropUrl: string
  trailerUrl: string
  trailerYouTubeId: string
  tmdbRating: number
  searchL: string
  keywords: string[]
  countriesOfOrigin: string[]
  languages: string[]
  cast: string[]
  director: null | number
  production: null
  awardsSummary: null
}
export interface FormField {
  id: number
  inputId: string
  fildPaceholder: string
  svgCode: string
  class: string
  inputType: string
}
export type FormsType = FormField[]
