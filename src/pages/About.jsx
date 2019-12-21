import {Page, TextView, Stack} from 'tabris';
export class AboutPage extends Page {
    constructor(properties) {
        super();
        this.set({title: 'About App', ...properties}).append(
            <Stack centerY>
                <TextView center font='50'>Created by Azizbek Masharibov & Victor Dementyev.</TextView>
                <TextView center font='50'>For business job and finance.</TextView>
            </Stack>
        );
    }
};