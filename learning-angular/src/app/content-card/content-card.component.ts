import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {

  public content: ContentList;

  constructor(content: ContentList) { 
    this.content = new ContentList();
  }

  ngOnInit(): void {
    let content1: Content = {
      id: 0,
      author: "Philip",
      image: "google",
      type: "website",
      title: "myWebsite",
      body: "this is my website",
      tags: ["Dog", "Cat"]

    }

    this.content.addContent(content1);

  }



}
