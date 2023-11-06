import { Component } from '@angular/core';

const TEXT_DUMMY = 'Bo-Katan Kryze, on the other hand, experiences a very different journey. She begins the season without a purpose: she has lost her fleet, the Darksaber, and any people or place to rule – and, it seems, she has long since lost her faith in the value of the Creed. Once she departs her castle to rescue Grogu’s dad, she still talks to the foundling mostly about what she has lost, rather than what she still has to live (or fight) for. Even in the chamber with the Living Waters, she can barely hold back her derision when reading the ancient plaque. Then in s short span of time she sees the Mythosaur, loses her home to Imperial bombers, and is bestowed with her own redemption under the Armorer’s interpretation of the Creed. Suddenly everything has changed. Yet, like Din, Bo-Katan faces many questions about what she will choose for her path forward.Bo-Katan Kryze, on the other hand, experiences a very different journey. She begins the season without a purpose: she has lost her fleet, the Darksaber, and any people or place to rule – and, it seems, she has long since lost her faith in the value of the Creed. Once she departs her castle to rescue Grogu’s dad, she still talks to the foundling mostly about what she has lost, rather than what she still has to live (or fight) for. Even in the chamber with the Living Waters, she can barely hold back her derision when reading the ancient plaque. Then in s short span of time she sees the Mythosaur, loses her home to Imperial bombers, and is bestowed with her own redemption under the Armorer’s interpretation of the Creed. Suddenly everything has changed. Yet, like Din, Bo-Katan faces many questions about what she will choose for her path forward.';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /** Pass the whole search string */
  public rmTextShort: string = TEXT_DUMMY;
  /** provide search text */
  public searchText: string = 'experiences';
}
