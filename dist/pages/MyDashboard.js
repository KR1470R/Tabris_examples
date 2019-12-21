"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tabris_1 = require("tabris");
class MyDashboard extends tabris_1.Page {
    constructor(...props) {
        super();
        this.set(Object.assign({ title: "Dashboard" }, props)).append(JSX.createElement($, null,
            JSX.createElement(tabris_1.TextView, { center: true, font: "24px", color: [125, 125, 125] }, "No Dashboards yet"),
            JSX.createElement(tabris_1.ImageView, { right: "16", bottom: "16", height: "56", width: "56", elevation: "6", cornerRadius: '28px', highlightOnTouch: "true", background: "red", image: { src: "./assets/plus.png", width: 24, height: 24 } })));
    }
}
exports.MyDashboard = MyDashboard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXlEYXNoYm9hcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcGFnZXMvTXlEYXNoYm9hcmQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQW1EO0FBRW5ELE1BQWEsV0FBWSxTQUFRLGFBQUk7SUFDakMsWUFBWSxHQUFHLEtBQUs7UUFDaEIsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsR0FBRyxpQkFBRSxLQUFLLEVBQUUsV0FBVyxJQUFLLEtBQUssRUFBRSxDQUFDLE1BQU0sQ0FDM0Msa0JBQUMsQ0FBQztZQUNFLGtCQUFDLGlCQUFRLElBQUMsTUFBTSxRQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsd0JBQThCO1lBQ2pGLGtCQUFDLGtCQUFTLElBQUMsS0FBSyxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsS0FBSyxFQUFDLElBQUksRUFBQyxTQUFTLEVBQUMsR0FBRyxFQUNyRSxZQUFZLEVBQUMsTUFBTSxFQUFDLGdCQUFnQixFQUFDLE1BQU0sRUFBQyxVQUFVLEVBQUMsS0FBSyxFQUM1RCxLQUFLLEVBQUUsRUFBQyxHQUFHLEVBQUUsbUJBQW1CLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFDLEdBQUksQ0FDN0QsQ0FDUCxDQUFBO0lBQ0wsQ0FBQztDQUNKO0FBWkQsa0NBWUMifQ==