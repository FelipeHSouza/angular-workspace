import { Component } from '@angular/core';
import { Release } from 'src/app/core/models/release.model';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material/tree';

const TREE_DATA: Release[] = [
  {
    description: '2020-04-17',
    releases: [
      { description: 'Add material angular' }
    ]
  },
  {
    description: '2020-04-16',
    releases: [
      { description: 'Add bootstrap' }
    ]
  }
];

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  private _transformer = (node: Release, level: number) => {
    return {
      expandable: !!node.releases && node.releases.length > 0,
      name: node.description,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.releases);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}
