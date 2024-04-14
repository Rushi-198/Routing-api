import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GetService } from './get.service';
import { Iposts } from './model/posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {

  title = 'practice1';

  @ViewChild("user") id !: ElementRef<HTMLInputElement>

  constructor(private get: GetService) { }

  arr !: Array<Iposts>  // field madhe only type asto

  singleobj !: Iposts

  ngOnInit(): void {
    this.get.getallposts()
      .subscribe(res => {
        //     console.log(res)
        this.arr = res;
      })
  }


  //   this.get.getsinglepost(15)
  //     .subscribe(res => {
  //       console.log(res)
  //     })

  // }

  // getobj(id: string) {                        //for direct call for dynamic
  //   console.log(id)
  //   this.get.getsinglepost(+id)
  //     .subscribe(res => {
  //       console.log(res)
  //       this.singleobj = res
  //     })
  // }



  // singleobj !: Iposts


  // getobj() {                        //for view child for dynamic
  //   console.log(this.id.nativeElement.value)
  //   this.get.getsinglepost(+this.id.nativeElement.value)
  //     .subscribe(res => {
  //       console.log(res)
  //       this.singleobj = res
  //     })
  // }


}




