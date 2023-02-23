import { Component } from '@angular/core';

@Component({
  selector: 'app-ujas',
  templateUrl: './ujas.component.html',
  styleUrls: ['./ujas.component.css']
})
export class UjasComponent {
  click(name: string, name2: string) {
    alert(name)
    confirm(name2)
  }
  getdata(name: any) {
    console.log(name)
  }
  show = true
  city = "jaypur"
  weight = 9

  array = [{ name: "ujas", salary: 10000, address: "amreli",saccount:["insta","yahoo","gmail"] }, { name: "gaurav", salary: 20000, address: "rajkot",saccount:["linkedin","yahoo","gmail"] }, { name: "ronak", salary: 9999, address: "amreli",saccount:["insta","facebook","sky"] }, { name: "abhay", salary: 20000, address: "lathi",saccount:["sbi","yahoo","gmail"] }, { name: "vk", salary: 40000, address: "babra" }]
}
