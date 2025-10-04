import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-progress-renderer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="progress-cell">
      <div class="progress" [style.width.%]="width" [style.backgroundColor]="color"></div>
      <div class="progress-label">{{ value }}{{ type==='win' ? '%' : '' }}</div>
    </div>
  `,
  styles: [`
    .progress-cell {
      position: relative;
      height: 24px;
      width: 100%;
      background-color: #f5f5f5;
      border-radius: 4px;
      overflow: hidden;
    }
    .progress {
      height: 100%;
      border-radius: 4px 0 0 4px;
      box-shadow: inset 0 0 2px rgba(0,0,0,0.2);
      transition: width 0.5s ease;
    }
    .progress-label {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      line-height: 24px;
      font-size: 12px;
      font-weight: 600;
      color: #222;
    }
  `]
})
export class ProgressRendererComponent implements ICellRendererAngularComp {
  value!: number;
  type!: 'win' | 'pick' | 'ban';
  maxValue: number = 100;

  agInit(params: any): void {
    this.value = Number(params.value);
    this.type = params.type;
    this.maxValue = params.maxValue || 100;
  }

  refresh(params: any): boolean {
    this.value = Number(params.value);
    return true;
  }

  get width() { return (this.value / this.maxValue) * 100; }

  get color() {
    if (this.type === 'win') return this.value >= 50 ? '#4caf50' : '#f44336';
    if (this.type === 'pick') return '#0288d1';
    if (this.type === 'ban') return '#d32f2f';
    return '#0288d1';
  }
}
