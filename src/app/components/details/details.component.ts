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
  tableColumns: string[] = ['key', 'value'];
  tableStats: MatTableDataSource<ITableData> | undefined;
  constructor(private router: Router, private route: ActivatedRoute, private characterService: CharactersService) {
    this.activeCharacter = this.router.getCurrentNavigation()?.extras.state?.['activeCharacter'];
  }

  id: string | null = this.route.snapshot.paramMap.get('id');
  
  ngOnInit() {
    if (this.activeCharacter) {
      console.log(this.tableColumns);
      const tableData = Object.entries(this.activeCharacter).map(([key, value]) => {
        return { key: normalizeAndCapitalizeText(key), value};
      }).slice(1);
      this.tableStats = new MatTableDataSource<ITableData>(tableData);
      console.log(this.tableStats);
    } 
  }
}
