import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  // undefined 
  id: string;
  author: string | undefined;
  title: string | undefined;
  category: string | undefined;
  date: string | undefined;


  // undefined added
  dataSource: MatTableDataSource<any>;
  posts: IPost[] = [];

  // later added actions
  columns: string[] = ['id', 'author', 'title', 'category', 'date', 'actions'];


  // manipulating the dom
  // proper importing fixes the issue ... "MatSort" 
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  // paginator, might need to be undefined
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private postsService: PostsService) {
  }

  ngOnInit(): void {

    // TODO: This data should be coming from an API using ANgular Services
    // static data, later not used since data to be fetched using API 

    // commenting since the data coming from and API
    // this.posts = [];

    this.postsService.getPosts().then(response => {
      this.posts = response.data;

      // binding the data to have it printed in the view
      this.dataSource = new MatTableDataSource(this.posts);

      //  binding the sort in html
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  //  in Angular 8 "$" is mandatory, bbut not in Angular 10 or more I guess, in thte HTML file
  applyFilter(event) {
    const filterValue = (event.target as HTMLInputElement).value;

    //  trimming the value getting input and comparing to LowerCase/UpperCase
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
