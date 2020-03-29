import { Component } from "@angular/core";
import { CalendarComponentOptions } from "ion2-calendar";
import { Plugins } from "@capacitor/core";
import { element } from "protractor";
const { LocalNotifications } = Plugins;

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  _color: string = "primary";
  date: string[] = [];
  valueDate;
  options: CalendarComponentOptions = {
    from: new Date(2019, 0, 1),
    pickMode: "multi",
    color: "primary",
    showToggleButtons: true
  };
  modifiedArr: any [];
  pendingNotifs: any;
  minutes = Array.from({ length: 59 }, (_, i) => i + 1 );
  repeticion: number;
  alarmas = 0;

  constructor() {}

  onChange($event) {
    this.date = [];
    this.date = $event;
    // this.valueDate = parseInt($event);
    // console.log(this.valueDate + 3600 * 1000 * 3);
    // this.createNotification(element));
    // console.log(this.date);
  }

  cambioMinutos() {
    console.log("Se repetira en un rango de " + this.repeticion + " minutos");
  }

  modificarHoras() {
    console.log("Aumentando horas");
    this.modifiedArr = [];
    this.modifiedArr = this.date.map(name => name + 3600 * 1000 * 8);
    this.createNotification();
    // var i = 1;
  }

  _changeColors(color: string) {
    this.options = {
      ...this.options,
      color
    };
  }

  createNotification() {
    // this.date.forEach( (item, i, self) => self[i] = item +  3600 * 1000 * 8 );
    this.pendingNotifs && Plugins.LocalNotifications.cancel(this.pendingNotifs);
    this.modifiedArr.forEach(async (element, index) => {
      console.log(element, index);
      await LocalNotifications.schedule({
        notifications: [
          {
            id: index,
            title: "Cadena de Frío",
            body: "Este es un recuerdo de revisión #",
            schedule: { at: new Date(element), every: 'minute', count: this.repeticion },
            sound: null,
            smallIcon: "res://ic_stat_icon_sample",
            attachments: [
              { id: 'face', url: 'res://public/assets/smallIcon.png' }
            ],
          }
        ]
      });
    });
    this.getPending();
  }

  async getPending() {
    this.pendingNotifs = [];
    this.pendingNotifs = await Plugins.LocalNotifications.getPending();
    this.alarmas = this.pendingNotifs.notifications.length;
    console.log('PENDING', this.alarmas);
  }
}
