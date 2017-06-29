import _ from 'lodash'

export function keySort (sortMe) {
  return _(sortMe).toPairs().sortBy(0).fromPairs().value()
}


export function sortByWins(teams, predictions) {
  // alphabetical
  let sortedTeams = _.sortBy(teams, 'fullName')

  // wins

  // other NFL tiebreakers


  return sortedTeams
}
