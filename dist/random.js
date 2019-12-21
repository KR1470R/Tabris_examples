"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const tabris_1 = require("tabris");
class RandomPL extends tabris_1.Page {
    constructor(...props) {
        super();
        this.set({ title: "Programming Language Generator" }).append(JSX.createElement($, null,
            JSX.createElement(tabris_1.Button, { centerX: true, bottom: "50", onSelect: showAlert, padding: 16, background: [50, 200, 50] }, "Show me the dialog"),
            JSX.createElement(tabris_1.Button, { center: true, onSelect: showText, padding: 16, background: [250, 150, 150] }, "Show me a programming language"),
            JSX.createElement(tabris_1.TextView, { id: "gift", centerX: true, bottom: 'prev() 20', font: '25px' }),
            JSX.createElement(tabris_1.TextView, { id: "count", centerX: true, font: "20px", top: '10' }, "Showed languages: 0")));
    }
}
exports.RandomPL = RandomPL;
function fadeOut(widget) {
    return __awaiter(this, void 0, void 0, function* () {
        yield widget.animate({ opacity: 0 }, { duration: 1000, easing: 'ease-out' });
    });
}
function fadeIn(widget) {
    return __awaiter(this, void 0, void 0, function* () {
        yield widget.animate({ opacity: 1000 }, { duration: 0, easing: 'ease-in' });
    });
}
let count = 0;
let languages = ["Java", "JavaScript", "Swift", "ActionScript", "C", "C++", "Perl", "Scala",
    "Kotlin", "Python", "Ruby", "PHP", "TypeScript", "C#"];
function showText() {
    count++;
    $("#count").only().text = `Showed languages: ${count}`;
    fadeIn($("#gift").only());
    $("#gift").only().text = languages[Math.floor(Math.random() * languages.length)];
    fadeOut($("#gift").only());
}
function showAlert() {
    count++;
    $("#count").only().text = `Showed languages: ${count}`;
    tabris_1.AlertDialog.open(JSX.createElement(tabris_1.AlertDialog, null, languages[Math.floor(Math.random() * languages.length)]));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZG9tLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3JhbmRvbS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLG1DQUF3RTtBQUV4RSxNQUFhLFFBQVMsU0FBUSxhQUFJO0lBQ2hDLFlBQVksR0FBRyxLQUFLO1FBQ2xCLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFDLEtBQUssRUFBRSxnQ0FBZ0MsRUFBQyxDQUFDLENBQUMsTUFBTSxDQUN4RCxrQkFBQyxDQUFDO1lBQ0Ysa0JBQUMsZUFBTSxJQUFDLE9BQU8sUUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyx5QkFBNkI7WUFDcEgsa0JBQUMsZUFBTSxJQUFDLE1BQU0sUUFBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMscUNBQXlDO1lBQ3BILGtCQUFDLGlCQUFRLElBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxPQUFPLFFBQUMsTUFBTSxFQUFDLFdBQVcsRUFBQyxJQUFJLEVBQUMsTUFBTSxHQUFFO1lBQzlELGtCQUFDLGlCQUFRLElBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLFFBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxHQUFHLEVBQUMsSUFBSSwwQkFBK0IsQ0FDaEYsQ0FDSCxDQUFBO0lBQ0gsQ0FBQztDQUNGO0FBWkQsNEJBWUM7QUFFRCxTQUFlLE9BQU8sQ0FBQyxNQUFNOztRQUMzQixNQUFNLE1BQU0sQ0FBQyxPQUFPLENBQ2xCLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBQyxFQUNaLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFDLENBQ3JDLENBQUM7SUFDSixDQUFDO0NBQUE7QUFFRCxTQUFlLE1BQU0sQ0FBQyxNQUFNOztRQUMxQixNQUFNLE1BQU0sQ0FBQyxPQUFPLENBQ2xCLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBQyxFQUNmLEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFDLENBQ2pDLENBQUM7SUFDSixDQUFDO0NBQUE7QUFFRCxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7QUFFZCxJQUFJLFNBQVMsR0FBRyxDQUFDLE1BQU0sRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxPQUFPO0lBQzFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUE7QUFFdkUsU0FBUyxRQUFRO0lBQ2YsS0FBSyxFQUFFLENBQUM7SUFDUixDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxHQUFHLHFCQUFxQixLQUFLLEVBQUUsQ0FBQztJQUN2RCxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7SUFDMUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDL0UsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzdCLENBQUM7QUFFRCxTQUFTLFNBQVM7SUFDaEIsS0FBSyxFQUFFLENBQUM7SUFDUixDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxHQUFHLHFCQUFxQixLQUFLLEVBQUUsQ0FBQztJQUN2RCxvQkFBVyxDQUFDLElBQUksQ0FDZCxrQkFBQyxvQkFBVyxRQUNULFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FDMUMsQ0FDZixDQUFDO0FBQ0osQ0FBQyJ9