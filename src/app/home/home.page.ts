import { Component } from '@angular/core';
import { Database, object, ref, set } from '@angular/fire/database';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  estadoD1: boolean=false;
  estadoD2: boolean=false;
  estadoBP: boolean=false;
  estadoBC: boolean=false;
  estadoS: boolean=false;
  estadoC: boolean=false;
  valoresDb: any;

  constructor(private database: Database) {}

  ngOnInit() {
    const route = ref(this.database, '/Casita');
    object(route).subscribe(attributes => {
      this.valoresDb = attributes.snapshot.val();
      console.log(this.valoresDb);
      this.estadoD1 = this.valoresDb.Dormitorio1;
      this.estadoD2 = this.valoresDb.Dormitorio2;
      this.estadoBP = this.valoresDb.BanioPadres;
      this.estadoBC = this.valoresDb.BanioComun;
      this.estadoS = this.valoresDb.Sala;
      this.estadoC = this.valoresDb.Cocina;
    });
  }

  toggleVentana(nombreVentana: string) {
    switch (nombreVentana) {
      case 'D1':
        this.estadoD1 = !this.estadoD1;
        set(ref(this.database, '/Casita/Dormitorio1'), this.estadoD1);
        break;
      case 'D2':
        this.estadoD2 = !this.estadoD2;
        set(ref(this.database, '/Casita/Dormitorio2'), this.estadoD2);
        break;
      case 'BP':
        this.estadoBP = !this.estadoBP;
        set(ref(this.database, '/Casita/BanioPadres'), this.estadoBP);
        break;
      case 'BC':
        this.estadoBC = !this.estadoBC;
        set(ref(this.database, '/Casita/BanioComun'), this.estadoBC);
        break;
      case 'S':
        this.estadoS = !this.estadoS;
        set(ref(this.database, '/Casita/Sala'), this.estadoS);
        break;
      case 'C':
        this.estadoC = !this.estadoC;
        set(ref(this.database, '/Casita/Cocina'), this.estadoC);
        break;
    }
  }
}
