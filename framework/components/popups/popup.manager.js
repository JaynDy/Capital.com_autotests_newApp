import { CookiePopup } from "./cookie.popup";
import { CountriesDisclaimerPopup } from "./countriesDisclaimer.popup";
import { GeoPopup } from "./geo.popup";

export class PopupManager {
  constructor(page) {
    this.geo = new GeoPopup(page);
    this.cookie = new CookiePopup(page);
    this.countriesDisclaimer = new CountriesDisclaimerPopup(page);
  }

  async dismissAll() {
    await this.geo.closeIfVisible();
    await this.cookie.closeIfVisible();
    await this.countriesDisclaimer.closeIfVisible();
  }
}
