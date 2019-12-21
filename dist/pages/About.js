"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tabris_1 = require("tabris");
class AboutPage extends tabris_1.Page {
    constructor(properties) {
        super();
        this.set(Object.assign({ title: 'About App' }, properties)).append(JSX.createElement(tabris_1.Stack, { centerY: true },
            JSX.createElement(tabris_1.TextView, { center: true, font: '50' }, "Created by Azizbek Masharibov & Victor Dementyev."),
            JSX.createElement(tabris_1.TextView, { center: true, font: '50' }, "For business job and finance.")));
    }
}
exports.AboutPage = AboutPage;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWJvdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcGFnZXMvQWJvdXQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQTZDO0FBQzdDLE1BQWEsU0FBVSxTQUFRLGFBQUk7SUFDL0IsWUFBWSxVQUFVO1FBQ2xCLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLEdBQUcsaUJBQUUsS0FBSyxFQUFFLFdBQVcsSUFBSyxVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQ2hELGtCQUFDLGNBQUssSUFBQyxPQUFPO1lBQ1Ysa0JBQUMsaUJBQVEsSUFBQyxNQUFNLFFBQUMsSUFBSSxFQUFDLElBQUksd0RBQTZEO1lBQ3ZGLGtCQUFDLGlCQUFRLElBQUMsTUFBTSxRQUFDLElBQUksRUFBQyxJQUFJLG9DQUF5QyxDQUMvRCxDQUNYLENBQUM7SUFDTixDQUFDO0NBQ0o7QUFWRCw4QkFVQztBQUFBLENBQUMifQ==