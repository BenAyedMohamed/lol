import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridOptions, themeQuartz, RowClickedEvent, GridReadyEvent } from 'ag-grid-community';
import { HttpClient } from '@angular/common/http';
import { AllEnterpriseModule, LicenseManager, ModuleRegistry } from 'ag-grid-enterprise';
import { CommonModule } from '@angular/common';

ModuleRegistry.registerModules([AllEnterpriseModule]);
LicenseManager.setLicenseKey('<your license key>');

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AgGridAngular, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
  
  theme: any;
  isDarkMode = true;
  rowData: any[] = [];
  maxPickRate = 1;
  maxBanRate = 1;
  colDefs: ColDef[] = [];
  showModal = false;
  selectedChampion: any = null;
  
  isComparisonMode = false;
  selectedChampions: any[] = [];
  maxSelections = 3;
  
  // Best stats comparison
  showBestStatsComparison = false;
  bestStats: any = {
    winRate: 0,
    pickRate: 0,
    banRate: 0
  };
  
  defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    resizable: true,
    flex: 1,
    minWidth: 80,
    cellStyle: { padding: '0', 'text-align': 'center' },
  };
  
gridOptions: GridOptions = {
  animateRows: true,
  rowHeight: this.getResponsiveRowHeight(), // Dynamic height
  headerHeight: this.getResponsiveHeaderHeight(), // Dynamic height
  domLayout: 'normal',
  suppressHorizontalScroll: false, // Enable horizontal scroll
  onRowClicked: (event: RowClickedEvent) => this.onRowClicked(event),
  onGridReady: (params: GridReadyEvent) => this.onGridReady(params),
  rowClassRules: {
    'selected-row': (params) => {
      return this.selectedChampions.some(champ => champ.id === params.data.id);
    }
  }
};

// Add these helper methods
getResponsiveRowHeight(): number {
  if (window.innerWidth <= 480) return 70;
  if (window.innerWidth <= 768) return 60;
  return 30; // Desktop default
}

getResponsiveHeaderHeight(): number {
  if (window.innerWidth <= 480) return 80;
  if (window.innerWidth <= 768) return 70;
  return 50; // Desktop default
}
  
  constructor(private http: HttpClient) {
    this.updateTheme();
    this.loadData();
  }
  
  ngAfterViewInit() {
    this.autoSizeColumns();
  }
  
  onGridReady(params: GridReadyEvent) {
    setTimeout(() => {
      this.autoSizeColumns();
    }, 100);
  }
  
  autoSizeColumns() {
    if (this.agGrid && this.agGrid.api) {
      this.agGrid.api.sizeColumnsToFit();
    }
  }
  
  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.updateTheme();
  }
  
  updateTheme() {
    if (this.isDarkMode) {
      this.theme = themeQuartz.withParams({
        backgroundColor: 'rgba(35, 50, 67, 0.3)',
        foregroundColor: '#ffffff',
        headerTextColor: '#ffffff',
        headerBackgroundColor: 'rgba(16, 78, 139, 0.8)',
        oddRowBackgroundColor: 'rgba(26, 37, 53, 0.4)',
        borderColor: 'rgba(26, 37, 53, 0.3)',
        rowHoverColor: 'rgba(42, 63, 84, 0.6)',
      });
    } else {
      this.theme = themeQuartz.withParams({
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        foregroundColor: '#212121',
        headerTextColor: '#ffffff',
        headerBackgroundColor: 'rgba(16, 78, 139, 0.9)',
        oddRowBackgroundColor: 'rgba(240, 240, 240, 0.6)',
        borderColor: 'rgba(200, 200, 200, 0.5)',
        rowHoverColor: 'rgba(200, 200, 200, 0.4)',
      });
    }
  }
  
  toggleComparisonMode() {
    this.isComparisonMode = !this.isComparisonMode;
    if (!this.isComparisonMode) {
      this.selectedChampions = [];
      if (this.agGrid && this.agGrid.api) {
        this.agGrid.api.redrawRows();
      }
    }
  }
  
  toggleBestStatsComparison() {
    this.showBestStatsComparison = !this.showBestStatsComparison;
  }
  
  calculateBestStats() {
    if (this.rowData.length === 0) return;
    
    this.bestStats = {
      winRate: Math.max(...this.rowData.map(c => c.winRate)),
      pickRate: Math.max(...this.rowData.map(c => c.pickRate)),
      banRate: Math.min(...this.rowData.map(c => c.banRate))
    };
  }
  
  getStatPercentage(championValue: number, bestValue: number): number {
    return bestValue > 0 ? (championValue / bestValue) * 100 : 0;
  }
  
  onRowClicked(event: RowClickedEvent) {
    if (this.isComparisonMode) {
      const champion = event.data;
      const index = this.selectedChampions.findIndex(c => c.id === champion.id);
      
      if (index > -1) {
        this.selectedChampions.splice(index, 1);
      } else if (this.selectedChampions.length < this.maxSelections) {
        this.selectedChampions.push(champion);
      }
      
      if (this.agGrid && this.agGrid.api) {
        this.agGrid.api.redrawRows();
      }
      
      if (this.selectedChampions.length >= 2) {
        this.showModal = true;
      }
    } else {
      this.selectedChampion = event.data;
      this.showModal = true;
      this.showBestStatsComparison = false;
    }
  }
  
  deleteChampion(champion: any) {
    if (confirm(`Êtes-vous sûr de vouloir supprimer ${champion.name}?`)) {
      this.http.delete(`api/champions/${champion.id}`).subscribe({
        next: () => {
          this.closeModal();
          this.loadData();
        },
        error: (err) => console.error('Erreur lors de la suppression:', err)
      });
    }
  }
  
  removeChampion(champion: any) {
    const index = this.selectedChampions.findIndex(c => c.id === champion.id);
    if (index > -1) {
      this.selectedChampions.splice(index, 1);
      if (this.agGrid && this.agGrid.api) {
        this.agGrid.api.redrawRows();
      }
      
      if (this.selectedChampions.length < 2) {
        this.showModal = false;
      }
    }
  }
  
  closeModal() {
    this.showModal = false;
    this.showBestStatsComparison = false;
    if (!this.isComparisonMode) {
      this.selectedChampion = null;
    }
  }
  
  clearComparison() {
    this.selectedChampions = [];
    this.showModal = false;
    if (this.agGrid && this.agGrid.api) {
      this.agGrid.api.redrawRows();
    }
  }
  
  getMaxValue(stat: string): number {
    if (this.selectedChampions.length === 0) return 100;
    return Math.max(...this.selectedChampions.map(c => Number(c[stat])));
  }
  
  getBarWidth(value: number, stat: string): number {
    const max = this.getMaxValue(stat);
    return (value / max) * 100;
  }
  
  loadData() {
    this.http.get<any[]>('api/champions').subscribe({
      next: (data) => {
        this.rowData = data.map(c => ({
          ...c,
          winRate: Number(c.winRate)
        }));
        
        this.maxPickRate = Math.max(...this.rowData.map(c => c.pickRate));
        this.maxBanRate = Math.max(...this.rowData.map(c => c.banRate));
        
        // Calculate best stats
        this.calculateBestStats();
        
        this.colDefs = [
  { 
    field: 'id', 
    headerName: 'ID', 
    maxWidth: 90,
    cellStyle: () => {
      const width = window.innerWidth;
      if (width <= 600) return { 'font-size': '18px' } as any; // phone
      if (width <= 1024) return { 'font-size': '16px' } as any; // tablet
      return {} as any; // desktop
    }
  },
  { 
    field: 'name', 
    headerName: 'Champion', 
    minWidth: 100,
    cellStyle: () => {
      const width = window.innerWidth;
      if (width <= 600) return { 'font-size': '180px' } as any;
      if (width <= 1024) return { 'font-size': '16px' } as any;
      return {} as any;
    }
  },
  { 
    field: 'title', 
    headerName: 'Title', 
    minWidth: 120,
    cellStyle: () => {
      const width = window.innerWidth;
      if (width <= 600) return { 'font-size': '18px' } as any;
      if (width <= 1024) return { 'font-size': '16px' } as any;
      return {} as any;
    }
  },
  {
    field: 'tags',
    headerName: 'Role(s)',
    minWidth: 100,
    cellRenderer: (params: any) =>
      params.value.map((tag: string) => `<span class="tag-chip">${tag}</span>`).join(' '),
    cellStyle: () => {
      const width = window.innerWidth;
      if (width <= 600) return { 'font-size': '18px' } as any;
      if (width <= 1024) return { 'font-size': '16px' } as any;
      return {} as any;
    }
  },
  {
    field: 'winRate',
    headerName: 'Win Rate',
    minWidth: 90,
    cellRenderer: (params: any) => {
      const bgColor = params.value >= 50 ? '#4caf50' : '#f44336';
      const width = window.innerWidth;
      const fontSize = width <= 600 ? '18px' : width <= 1024 ? '16px' : '14px';
      return `<span class="win-rate-box" style="
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 12px;
        padding: 6px 16px;
        width: 70px;
        height: 22px;
        box-sizing: border-box;
        background-color: ${bgColor};
        font-size: ${fontSize};
      ">${params.value}%</span>`;
    },
    cellStyle: () => {
      const width = window.innerWidth;
      if (width <= 600) return { 'font-size': '18px' } as any;
      if (width <= 1024) return { 'font-size': '16px' } as any;
      return {} as any;
    }
  },
  {
    field: 'pickRate',
    headerName: 'Pick Rate',
    minWidth: 90,
    cellStyle: () => {
      const width = window.innerWidth;
      if (width <= 600) return { 'font-size': '18px' } as any;
      if (width <= 1024) return { 'font-size': '16px' } as any;
      return {} as any;
    }
  },
  {
    field: 'banRate',
    headerName: 'Ban Rate',
    minWidth: 90,
    cellStyle: () => {
      const width = window.innerWidth;
      if (width <= 600)
        return { color: '#d32f2f', 'font-weight': 'bold', 'text-align': 'center', 'font-size': '18px' } as any;
      if (width <= 1024)
        return { color: '#d32f2f', 'font-weight': 'bold', 'text-align': 'center', 'font-size': '16px' } as any;
      return { color: '#d32f2f', 'font-weight': 'bold', 'text-align': 'center' } as any;
    }
  }
];


      },
      error: (err) => console.error('Erreur chargement des données:', err),
    });
  }
}