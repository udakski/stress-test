declare const google: any;


export class ChartService {

  otherData: any;
  constructor() {
    google.charts.load('current', {'packages': ['corechart', 'gantt']});
  }

  protected buildChart(data: any[], chartFunc: any, options: any): void {
    const func = (chartFunc, options) => {
      const datatable = google.visualization.arrayToDataTable(data);
      chartFunc().draw(datatable, options);
    };
    const callback = () => func(chartFunc, options);
    google.charts.setOnLoadCallback(callback);
  }

  toMilliseconds(minutes) {
    return minutes * 60 * 1000;
  }

  daysToMilliseconds(days) {
    return days * 24 * 60 * 60 * 1000;
  }


  protected buildChartFromTable(chartFunc: any, options: any): void {
      const func = (chartFunc, options) => {
        const datax = [
            ['Task ID', 'Task Name', 'Resource', 'Start', 'End', 'Duration', 'Percent Complete'],
          ['Research', 'Find sources',
            new Date(2015, 0, 1), new Date(2015, 0, 5), null,  100,  null],
          ['Write', 'Write paper',
            null, new Date(2015, 0, 9), this.daysToMilliseconds(3), 25, 'Research,Outline'],
          ['Cite', 'Create bibliography',
            null, new Date(2015, 0, 7), this.daysToMilliseconds(1), 20, 'Research'],
          ['Complete', 'Hand in paper',
            null, new Date(2015, 0, 10), this.daysToMilliseconds(1), 0, 'Cite,Write'],
          ['Outline', 'Outline paper',
            null, new Date(2015, 0, 6), this.daysToMilliseconds(1), 100, 'Research']
          ]
        ;
        const dataxxxtable = google.visualization.arrayToDataTable(datax, false);
        chartFunc().draw(dataxxxtable, options);
    };

    const callback = () => func(chartFunc, options);
    google.charts.setOnLoadCallback(callback);
  }

}
