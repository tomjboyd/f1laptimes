export const getSortedLaptimes = (DRIVERS, LAPTIMES) => {
  const sortedLaptimes = DRIVERS.map((driver) => {
    const laptimes = LAPTIMES.find((laptime) => laptime.name === driver.name);

    if (laptimes) {
      return Object.assign(LAPTIMES.find((laptime) => laptime.name === driver.name), {
        color: driver.color,
      });
    }

    return false;
  }).filter((laptime) => laptime);

  return sortedLaptimes;
};

export const getData = (LAPTIMES, SORTED_LAPTIMES) => {
  const data = {
    labels: Array.from({
      length: Math.max(...LAPTIMES.map((laps, index) => laps.lapTimes.length)),
    }, (v, k) => k + 1),
    datasets: SORTED_LAPTIMES.map((driver, index) => {
      const { color } = driver;
      return {
        label: driver.name,
        fill: false,
        lineTension: 0.1,
        backgroundColor: color,
        borderColor: color,
        borderCapStyle: 'butt',
        borderDash: index % 2 ? [] : [10, 5],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: color,
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: color,
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: driver.lapTimes,
      };
    }),
  };

  return data;
};
