import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {keySort, sortByWins} from '../utils.js'
import {each, map, groupBy} from 'lodash'

class Standings extends Component {
  static propTypes = {
    teams: PropTypes.array.isRequired,
    predictions: PropTypes.object.isRequired,
  }

  // Split teams into two conferences
  get conferences() {
    return keySort(groupBy(this.props.teams, 'conference'))
  }

  // Split teams into four divisions in each conference
  get divisions() {
    const divisions = {}

    each(this.conferences, (conf, key) => {
      divisions[key] = keySort(groupBy(conf, 'division'))
    })

    return divisions
  }

  get displayStandings() {
    const {predictions} = this.props.predictions

    return map(this.divisions, (divisions, conference) =>
      <ConferenceStandings key={`conference_${conference}`}
        {...{
          divisions, conference, predictions,
        }}
      />
    )
  }

  render() {
    return (
      <div className="Standings">
        {this.displayStandings}
      </div>
    );
  }
}

const TeamStandings = ({team, predictions}) => {
  return <h3>{team.fullName}</h3>
}

const DivisionStandings = ({teams, division, predictions}) => {
  const sortedTeams = sortByWins(teams, predictions)
  return <div>
    <h2>{division}</h2>
    {map(sortedTeams, team =>
      <TeamStandings key={`team_standings_${team.fullName}`}
        {...{
          team, predictions
        }}
      />
    )}
  </div>
}

const ConferenceStandings = ({divisions, conference, predictions}) => {
  console.log(conference, divisions);
  return <div>
    <h1 className={`conference ${conference}`}>{conference}</h1>
    {map(divisions, (teams, division) =>
      <DivisionStandings key={`division_${conference}_${division}`}
        {...{
          teams, division, predictions
        }}
      />
    )}
  </div>
}

export default Standings
