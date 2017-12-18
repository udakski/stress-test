export class PieChartConfig {
  title: string;
  pieHole: number;
  is3D: boolean;

  constructor(title: string, pieHole: number) {
    this.title = title;
    this.pieHole = pieHole;
    this.is3D = true;
  }
}
