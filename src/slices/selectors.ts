import { createSelector } from 'reselect'
import { RootState } from '../store/store'

export const citiesSelector = (state: RootState) =>
  state.worldWiseSlice.cities
export const countriesSelector = (state: RootState) =>
  state.worldWiseSlice.countries

// Мемоізований селектор
/*export const overallMovieValuesSelector = createSelector(
  [addedToWatchMoviesSelector],
  (movies) => {
    const totalCount = movies.length
    const totalValues = movies.reduce((acc, movie) => {
      return {
        totalOverallRating: acc.totalOverallRating + movie.imdbRating,
        totalPersonalRating: acc.totalPersonalRating + movie.personalRating,
        totalDuration: acc.totalDuration + movie.Runtime,
      }
    }, initialValues)

    return {
      averageOverallRating: +(
        totalValues.totalOverallRating / totalCount
      ).toFixed(1),
      totalDuration: totalValues.totalDuration,
      averagePersonalRating: +(
        totalValues.totalPersonalRating / totalCount
      ).toFixed(1),
    }
  },
)*/
