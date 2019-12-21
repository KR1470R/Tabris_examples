"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tabris_1 = require("tabris");
const NewsPage_1 = require("./pages/NewsPage");
const MyDashboard_1 = require("./pages/MyDashboard");
const About_1 = require("./pages/About");
const random_1 = require("./random");
tabris_1.contentView.append(JSX.createElement(tabris_1.NavigationView, { stretch: true },
    JSX.createElement(tabris_1.Action, { onSelect: () => exit(), placement: 'overflow', title: 'Settings' }),
    JSX.createElement(tabris_1.Action, { onSelect: () => exit(), placement: 'overflow', title: 'Exit' }),
    JSX.createElement(tabris_1.Page, { title: 'Bisness' },
        JSX.createElement(tabris_1.Stack, { stretch: true },
            JSX.createElement(tabris_1.Button, { centerX: true, top: 100, onSelect: () => openDashboardPage(), padding: 25, font: "18px", width: 200 }, "Open My Dashboard"),
            JSX.createElement(tabris_1.Button, { centerX: true, onSelect: () => openNewsPage(), padding: 25, font: "18px", width: 200 }, "News"),
            JSX.createElement(tabris_1.Button, { centerX: true, onSelect: () => openRPLPage(), padding: 25, font: "18px", width: 200 }, "Random LP"),
            JSX.createElement(tabris_1.Button, { centerX: true, onSelect: () => openAbout(), padding: 25, font: "18px", width: 200 }, "About")))));
function openNewsPage() {
    $(tabris_1.NavigationView).only().append(JSX.createElement(NewsPage_1.NewsPage, null));
}
function openAbout() {
    $(tabris_1.NavigationView).only().append(JSX.createElement(About_1.About, null));
}
function openDashboardPage() {
    $(tabris_1.NavigationView).only().append(JSX.createElement(MyDashboard_1.MyDashboard, null));
}
function openRPLPage() {
    $(tabris_1.NavigationView).only().append(JSX.createElement(random_1.RandomPL, null));
}
function exit() {
    tabris_1.app.close();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQW9IO0FBQ3BILCtDQUEwQztBQUMxQyxxREFBZ0Q7QUFDaEQseUNBQW9DO0FBQ3BDLHFDQUFrQztBQUVsQyxvQkFBVyxDQUFDLE1BQU0sQ0FDaEIsa0JBQUMsdUJBQWMsSUFBQyxPQUFPO0lBQ3JCLGtCQUFDLGVBQU0sSUFBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsU0FBUyxFQUFDLFVBQVUsRUFBQyxLQUFLLEVBQUMsVUFBVSxHQUFFO0lBQ3ZFLGtCQUFDLGVBQU0sSUFBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsU0FBUyxFQUFDLFVBQVUsRUFBQyxLQUFLLEVBQUMsTUFBTSxHQUFFO0lBQ25FLGtCQUFDLGFBQUksSUFBQyxLQUFLLEVBQUMsU0FBUztRQUNuQixrQkFBQyxjQUFLLElBQUMsT0FBTztZQUNaLGtCQUFDLGVBQU0sSUFBQyxPQUFPLFFBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFFLEdBQUcsd0JBQTRCO1lBQzlILGtCQUFDLGVBQU0sSUFBQyxPQUFPLFFBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLFlBQVksRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxXQUFlO1lBQ25HLGtCQUFDLGVBQU0sSUFBQyxPQUFPLFFBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLFdBQVcsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUUsR0FBRyxnQkFBb0I7WUFDdEcsa0JBQUMsZUFBTSxJQUFDLE9BQU8sUUFBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsU0FBUyxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBRSxHQUFHLFlBQWdCLENBQzFGLENBQ0gsQ0FDUSxDQUNsQixDQUFBO0FBQ0QsU0FBUyxZQUFZO0lBQ3BCLENBQUMsQ0FBQyx1QkFBYyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUM5QixrQkFBQyxtQkFBUSxPQUFFLENBQ1gsQ0FBQztBQUNILENBQUM7QUFFRCxTQUFTLFNBQVM7SUFDaEIsQ0FBQyxDQUFDLHVCQUFjLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQy9CLGtCQUFDLGFBQUssT0FBRSxDQUNQLENBQUM7QUFDSixDQUFDO0FBRUQsU0FBUyxpQkFBaUI7SUFDeEIsQ0FBQyxDQUFDLHVCQUFjLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQzlCLGtCQUFDLHlCQUFXLE9BQUcsQ0FDZixDQUFDO0FBQ0gsQ0FBQztBQUVELFNBQVMsV0FBVztJQUNuQixDQUFDLENBQUMsdUJBQWMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FDN0Isa0JBQUMsaUJBQVEsT0FBRyxDQUNiLENBQUE7QUFDRixDQUFDO0FBRUQsU0FBUyxJQUFJO0lBQ1gsWUFBRyxDQUFDLEtBQUssRUFBRSxDQUFBO0FBQ2IsQ0FBQyJ9