import {Page, TextView} from 'tabris'
export class About extends Page {
    constructor(properties) {
        super();
        this.set({title: 'About App', ...properties}).append(
           <TextView top>We created this app for Uzbekistan Bisness.</TextView>
        );
    }
};