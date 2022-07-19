import { Component, OnInit } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import { Router } from '@angular/router';

interface FoodNode {
  name: string,
  path:string,
  text:string,
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'dashboard',
    path:'dashboard',
    text:'Dashboard'
  },
  {
    name: 'opd',
    children: [{name: 'opd',path:'patientregistration',text:'Patient-Rregistration'}, 
    {name: 'Banana',path:'',text:'Banana'}],
    path:'',
    text:'OPD'
  },
  {
    name: 'ipd',
    children: [
      {
        name: 'ipd',
        /*children: [{name: 'ipd',path:'patientregistration',text:'Patient-Rregistration'}, 
        {name: 'ipd',path:'',text:'Brussels sprouts'}],*/
        path:'patientregistration',
        text:'Patient-Rregistration'
      },
    ],
    path:'',
    text:'IPD'
  },
  {
    name: 'appointment',
    path:'',
    children: [{name: 'appointment',path:'book',text:'Book Appointment'}, 
        {name: 'appointment',path:'cancle',text:'Cancle Appointment'},
        {name: 'appointment',path:'search',text:'Search Appointment'}],
    text:'Appointment'
  },
  {
    name: 'user',
    path:'',
    text:'User'
  },
  {
    name: 'report',
    path:'',
    text:'Report'
  },
  {
    name: 'setting',
    path:'',
    text:'Setting'
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
  path:string;
  text:string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {

  ngOnInit(): void {
  }

  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
      path:node.path,
      text:node.text
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(private readonly router: Router) {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  navigate(node:ExampleFlatNode){
      this.router.navigate([`hspt/${node.name}`,{outlets:{'workspace':[node.path]}}]);  
  }

}
