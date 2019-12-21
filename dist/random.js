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
        this.set(Object.assign({ title: "Programming Language Generator" }, props)).append(JSX.createElement($, null,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZG9tLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3JhbmRvbS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLG1DQUF3RTtBQUV4RSxNQUFhLFFBQVMsU0FBUSxhQUFJO0lBQ2hDLFlBQVksR0FBRyxLQUFLO1FBQ2xCLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLEdBQUcsaUJBQUUsS0FBSyxFQUFFLGdDQUFnQyxJQUFLLEtBQUssRUFBRSxDQUFDLE1BQU0sQ0FDbEUsa0JBQUMsQ0FBQztZQUNGLGtCQUFDLGVBQU0sSUFBQyxPQUFPLFFBQUMsTUFBTSxFQUFDLElBQUksRUFBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMseUJBQTZCO1lBQ3BILGtCQUFDLGVBQU0sSUFBQyxNQUFNLFFBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLHFDQUF5QztZQUNwSCxrQkFBQyxpQkFBUSxJQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsT0FBTyxRQUFDLE1BQU0sRUFBQyxXQUFXLEVBQUMsSUFBSSxFQUFDLE1BQU0sR0FBRTtZQUM5RCxrQkFBQyxpQkFBUSxJQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxRQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsR0FBRyxFQUFDLElBQUksMEJBQStCLENBQ2hGLENBQ0gsQ0FBQTtJQUNILENBQUM7Q0FDRjtBQVpELDRCQVlDO0FBRUQsU0FBZSxPQUFPLENBQUMsTUFBTTs7UUFDM0IsTUFBTSxNQUFNLENBQUMsT0FBTyxDQUNsQixFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUMsRUFDWixFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBQyxDQUNyQyxDQUFDO0lBQ0osQ0FBQztDQUFBO0FBRUQsU0FBZSxNQUFNLENBQUMsTUFBTTs7UUFDMUIsTUFBTSxNQUFNLENBQUMsT0FBTyxDQUNsQixFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUMsRUFDZixFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBQyxDQUNqQyxDQUFDO0lBQ0osQ0FBQztDQUFBO0FBRUQsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBRWQsSUFBSSxTQUFTLEdBQUcsQ0FBQyxNQUFNLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsT0FBTztJQUMxRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFBO0FBRXZFLFNBQVMsUUFBUTtJQUNmLEtBQUssRUFBRSxDQUFDO0lBQ1IsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksR0FBRyxxQkFBcUIsS0FBSyxFQUFFLENBQUM7SUFDdkQsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzFCLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQy9FLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM3QixDQUFDO0FBRUQsU0FBUyxTQUFTO0lBQ2hCLEtBQUssRUFBRSxDQUFDO0lBQ1IsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksR0FBRyxxQkFBcUIsS0FBSyxFQUFFLENBQUM7SUFDdkQsb0JBQVcsQ0FBQyxJQUFJLENBQ2Qsa0JBQUMsb0JBQVcsUUFDVCxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQzFDLENBQ2YsQ0FBQztBQUNKLENBQUMifQ==