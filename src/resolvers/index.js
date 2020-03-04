import _ from 'lodash'

import getMovie from './getMovie.resolver'
import getUpcomingMovies from './getUpcomingMovies.resolver'

export default _.merge(getMovie, getUpcomingMovies)
