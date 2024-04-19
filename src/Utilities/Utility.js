const searchMovie = (searchMovieArr, term) => {
  if (term.length === 0 || term.length === null) {
    return searchMovieArr
  }
  return searchMovieArr.filter(filterMovie => filterMovie.movieName.toLowerCase().indexOf(term) > -1)
}

const filterHandler = (dataArr, filter) => {
  switch(filter) {
    case "legendaryMovies" :
      return dataArr.filter(movieObj => movieObj.like)
    case "mostViewsMovies" :
      return dataArr.filter(movieObj => movieObj.movieViews > 500)
    default:
      return dataArr
  }
}

export { searchMovie, filterHandler }