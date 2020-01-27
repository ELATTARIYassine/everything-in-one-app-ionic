import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {

  public keyword:string;
  public currentPage:number=1;
  public size:number=10;
  public dataImages=[];
  public totalPages: number;
  constructor(private _http:HttpClient) { }

  ngOnInit() {
  }

    onLoadImages() {
    this.dataImages=[];
    this.currentPage=1;
    this.totalPages=0;
    this.doSearch();
    }

  loadData(evt) {
    if (this.currentPage<this.totalPages)
    {
      console.log(this.currentPage+"/"+this.totalPages);
      ++this.currentPage;
      this.doSearch();
      evt.target.complete();
    }
    if(this.currentPage>=this.totalPages)
      evt.target.disabled = true;
  }

  doSearch() {
    this._http.get("https://pixabay.com/api/?key=13893086-dbdf48f440e06d84755961ba6&q="+this.keyword+"&per_page="+this.size+"&page="+this.currentPage)
        .subscribe(data=>{
          data['hits'].forEach(image=>{
            this.dataImages.push(image);
          });
          this.totalPages = data['totalHits']/this.size;
          console.log(data);
        },err=>{
          console.log(err);
        });
  }
}
