import axios from 'axios';

import Constants from '../constants';

const fetchHours = (params) => {
  return dispatch => {
    return axios.get(`/api/v1/records/hours`, {params: params});
  }
}

export function getHoursByDate(gameId, startDate, endDate) {
  const params = {
    game_id: gameId,
    start_date: startDate,
    end_date: endDate
  };

  return fetchHours(params);
}