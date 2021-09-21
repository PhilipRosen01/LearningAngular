import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
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
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
      type: "website",
      title: "myWebsite",
      body: "this is my website",
      tags: ["Dog", "Cat"]

    }

    this.content.addContent(content1);

  }



}
