"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tabris_1 = require("tabris");
const items = createItems();
tabris_1.contentView.append(JSX.createElement(tabris_1.CollectionView, { stretch: true, itemCount: items.length, cellType: index => items[index].type, cellHeight: (_index, type) => type === 'section' ? 48 : 24, createCell: type => type === 'section' ? new tabris_1.ImageView() : new tabris_1.TextView(), updateCell: updateCell }));
/**
 * @param {ImageView|TextView} cell
 * @param {number} index
 */
function updateCell(cell, index) {
    if (cell instanceof tabris_1.ImageView) {
        cell.image = items[index].image;
    }
    else {
        cell.text = items[index].text;
    }
}
function createItems() {
    const result = [];
    for (const section of ['settings-black-24dp@3x.png', 'share-black-24dp@3x.png', 'search-black-24dp@3x.png']) {
        result.push({ type: 'section', image: `resources/${section}` });
        for (let i = 1; i <= 25; i++) {
            result.push({ type: 'item', text: `Item ${i}` });
        }
    }
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29sbGVjdGVkVmlld3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcGFnZXMvQ29sbGVjdGVkVmlld3MuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQXdFO0FBRXhFLE1BQU0sS0FBSyxHQUFHLFdBQVcsRUFBRSxDQUFDO0FBRTVCLG9CQUFXLENBQUMsTUFBTSxDQUNoQixrQkFBQyx1QkFBYyxJQUFDLE9BQU8sUUFDbkIsU0FBUyxFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQ3ZCLFFBQVEsRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQ3BDLFVBQVUsRUFBRSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUMxRCxVQUFVLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLGtCQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxpQkFBUSxFQUFFLEVBQ3pFLFVBQVUsRUFBRSxVQUFVLEdBQUcsQ0FDOUIsQ0FBQztBQUVGOzs7R0FHRztBQUNILFNBQVMsVUFBVSxDQUFDLElBQUksRUFBRSxLQUFLO0lBQzdCLElBQUksSUFBSSxZQUFZLGtCQUFTLEVBQUU7UUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDO0tBQ2pDO1NBQU07UUFDTCxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUM7S0FDL0I7QUFDSCxDQUFDO0FBRUQsU0FBUyxXQUFXO0lBQ2xCLE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNsQixLQUFLLE1BQU0sT0FBTyxJQUFJLENBQUMsNEJBQTRCLEVBQUUseUJBQXlCLEVBQUUsMEJBQTBCLENBQUMsRUFBRTtRQUMzRyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsYUFBYSxPQUFPLEVBQUUsRUFBQyxDQUFDLENBQUM7UUFDOUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUM7U0FDaEQ7S0FDRjtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMifQ==