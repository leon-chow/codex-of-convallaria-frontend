import { Component, Input } from '@angular/core';
import { ICharacter } from '../../models/character';
import { ActivatedRoute, Router } from '@angular/router';
import { CharactersService } from '../../services/characters/characters.service';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CdkTableDataSourceInput } from '@angular/cdk/table';
import { MatSortModule } from '@angular/material/sort';
import { normalizeAndCapitalizeText } from '../../utils/string';

interface ITableData {
  key: string,
  value: any,
}

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatSortModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
  providers: [CharactersService]
})

export class DetailsComponent {
  activeCharacter?: ICharacter;
  primaryKeysToRemove: string[] = ['name', 'pixelImageUrl', 'profileImageUrl', 'abilities', 'recommendations', 'baseStats'];
  secondaryTableKeys: string[] = ['abilities', 'recommendations', 'baseStats'];
  tableColumns: string[] = ['key', 'value'];
  primaryTableStats: MatTableDataSource<ITableData> | undefined;
  secondaryTableStats: MatTableDataSource<ITableData> | undefined;
  constructor(private router: Router, private route: ActivatedRoute, private characterService: CharactersService) {
    this.activeCharacter = this.router.getCurrentNavigation()?.extras.state?.['activeCharacter'];
  }

  id: string | null = this.route.snapshot.paramMap.get('id');

  // TODO: Refactor 
  normalizePrimaryTableData(): ITableData[] {
    const normalizedCharacter = this.activeCharacter;
    const tableData = Object.entries(normalizedCharacter!).map(([key, value]) => {
      return { key, value};
    }).filter(data => !this.primaryKeysToRemove.includes(data.key));
    tableData.forEach(entry => {
      entry.key = normalizeAndCapitalizeText(entry.key);
    });
    return tableData;
  }

  normalizeSecondaryTableData(): ITableData[] {
    const normalizedCharacter = this.activeCharacter;
    const tableData = Object.entries(normalizedCharacter!).map(([key, value]) => {
      return { key, value};
    }).filter(data => this.secondaryTableKeys.includes(data.key));
    tableData.forEach(entry => {
      entry.key = normalizeAndCapitalizeText(entry.key);
      console.log(entry.value);
    });
    // TODO: Move base stats first, then abilities and then recommendations
    return tableData
  }

  // TODO: Fill these out
  parseStats(): ITableData[] {
    return [];
  }

  parseRecommendations(): ITableData[] {
    return [];
  }

  parseAbilities(): ITableData[] {
    return [];
  }
  
  ngOnInit() {
    if (this.activeCharacter) {
      const normalizedFirstTableData = this.normalizePrimaryTableData();
      const normalizedSecondTableData = this.normalizeSecondaryTableData();
      this.primaryTableStats = new MatTableDataSource<ITableData>(normalizedFirstTableData);
      this.secondaryTableStats = new MatTableDataSource<ITableData>(normalizedSecondTableData);
    } 
  }
}
