import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '@/app/services/local-storage.service';
import {
  USERNAME,
  INIT_FLAG,
  START_USING_DATE
} from '@/app/services/local-storage.namespace';
import { getTodayTime } from '@/utils/time';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.less']
})
export class SetupComponent implements OnInit {
  username: string;

  constructor(private store: LocalStorageService) {

   }

  ngOnInit() {
  }

  completeSetup(): void {
    this.store.set(INIT_FLAG, true);
    this.store.set(USERNAME, this.username);
    this.store.set(START_USING_DATE, getTodayTime());
  }

}
