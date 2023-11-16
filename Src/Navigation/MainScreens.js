import Category from '../Modules/Category/Screens/Category';
import SubCategory from '../Modules/Category/Screens/SubCategory';
import {CATEGORY, SUBCATEGORY} from '../Modules/Category/Utils/Routes';
import * as Routes from '../Modules/Global/Utils/Routes';
import Products from '../Modules/Products/Screens/Products';
import {PRODUCTS} from '../Modules/Products/Utils/Routes';
import Profil from '../Modules/User/Screens/Profil';
import {PROFIL} from '../Modules/User/Utils/Routes';

/**
 * @param title required
 * @param component required
 * @param icon required
 * @param route required
 * @param children optional
 * @param slug required
 */

//Drawer Menu Sayfaları
Menus = [
    {
    title: CATEGORY,
    route: CATEGORY,
    icon: "home-outline",
    pack: "ionicons",
    component: Category,
  },
  {
    title: PROFIL,
    route: PROFIL,
    icon: "person-outline",
    pack: "ionicons",
    component: Profil,
  },
];

export const otherMenu = [
  {
    title: SUBCATEGORY,
    route: SUBCATEGORY,
    component: SubCategory,
  },
  {
    title: PRODUCTS,
    route: PRODUCTS,
    component: Products,
  },
];

export const loginMenu = [];

export let Menus;
export let activeMenu = Menus;
export function setActiveMenu(menu) {
  activeMenu = menu;
}
