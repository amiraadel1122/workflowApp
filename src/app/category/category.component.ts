import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  activityCards = [
    {
      title: 'Reports',
      icon: 'assignment',
      label:' Deliver new content to users.',
      url: '.'
    },
    {
      title: 'Forms',
      icon: 'list_alt',
      label: 'Review and edit content user already recieved.',
      url: '.'
    },
    {
      title: 'Workflows',
      icon: 'engineering',
      label: 'Customize services , data formats and tasks.',
      url: '/admin-panel/workflow'
    },
    {
      title: 'Databases',
      icon: 'storage',
      label: 'Manage device home screens and workspaces.',
      url: '.'
    },
    {
      title: 'Enterprise Applications',
      icon: 'account_balance',
      label: 'Manage users, users profiles and groups.',
      url: '.'
    },
    {
      title: 'Web Services',
      icon: 'domain',
      label: 'Manage accounts plan and content.',
      url: '.'
    },
    {
      title: 'Industerial IOT',
      icon: 'construction',
      label: 'Find online help , report a problem or request support.',
      url: '.'
    },
  ];

  constructor(private location: Location) { }
  //Go back to previuos page
  backClicked() {
    this.location.back();
  }
  ngOnInit(): void {
  }

}
