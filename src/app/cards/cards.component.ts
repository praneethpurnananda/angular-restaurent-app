import { Component, OnInit , Inject } from '@angular/core';
import {MatDialog, MatDialogRef ,MAT_DIALOG_DATA} from '@angular/material/dialog';



@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  hotelData = [
    {name: 'Jaya residenci' , description: 'Short single line desc. abt menu' , imageUrl: 'https://i.ndtvimg.com/i/2015-10/indian-accent_625x350_61444892358.jpg'},
    {name: 'Jaya residenci' , description: 'Short single line desc. abt menu' , imageUrl: 'https://i.ndtvimg.com/i/2015-10/peshawri_625x350_51444892422.jpg'},
    {name: 'Jaya residenci' , description: 'Short single line desc. abt menu' , imageUrl: 'https://i.ndtvimg.com/i/2015-10/villa-maya_625x350_41444892469.jpg'},
    {name: 'Jaya residenci' , description: 'Short single line desc. abt menu' , imageUrl: 'https://i.ndtvimg.com/i/2015-10/bukhara_625x350_41444984742.jpg'},
    {name: 'Jaya residenci' , description: 'Short single line desc. abt menu' , imageUrl: 'https://i.ndtvimg.com/i/2015-10/agashiye_625x350_41444892540.jpg'},
    {name: 'Jaya residenci' , description: 'Short single line desc. abt menu' , imageUrl: 'https://i.ndtvimg.com/i/2015-10/gulati_625x350_71444892938.jpg'},
    {name: 'Jaya residenci' , description: 'Short single line desc. abt menu' , imageUrl: 'https://i.ndtvimg.com/i/2015-10/pinch-of-spice_625x350_71444892968.jpg'},
    {name: 'Jaya residenci' , description: 'Short single line desc. abt menu' , imageUrl: 'https://i.ndtvimg.com/i/2015-10/tuscany-garden_625x350_51444893034.jpg'}
  ];
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }


  openDialog(){
    const dialogRef = this.dialog.open(CardData, {
      width: '500px',
      data:{ name: 'demo' , desc: 'demo'},
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
}
}


@Component({
  selector: 'card-data',
  templateUrl: 'card-data.html',
})
export class CardData {
  constructor(
    public dialogRef: MatDialogRef<CardData>,
    @Inject(MAT_DIALOG_DATA) public data) {
      console.log(data);
    }
    onNoClick(): void {
    this.dialogRef.close();
  }
}
