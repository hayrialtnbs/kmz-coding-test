import Category from "../Modules/Category/Screens/Category";
import SubCategory from "../Modules/Category/Screens/SubCategory";
import { CATEGORY, SUBCATEGORY } from "../Modules/Category/Utils/Routes";
import * as Routes from "../Modules/Global/Utils/Routes";
import Products from "../Modules/Products/Screens/Products";
import { PRODUCTS } from "../Modules/Products/Utils/Routes";
import Profil from "../Modules/User/Screens/Profil";
import { PROFIL } from "../Modules/User/Utils/Routes";


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
  // {
  //   title: "Hesaplar",
  //   icon: "wallet-outline",
  //   pack: "meterial",
  //   route: Routes.MENU,
  //   children: [
  //     {
  //       title: KASALAR,
  //       route: KASALAR,
  //       icon: "safe-square-outline",
  //       pack: "material",
  //       component: Kasalar,
  //     },
  //     {
  //       title: BANKAHESAPLARI,
  //       route: BANKAHESAPLARI,
  //       icon: "bank-outline",
  //       pack: "material",
  //       component: BankaHesaplari,
  //     },
  //     {
  //       title: POSHESAPLAR,
  //       route: POSHESAPLAR,
  //       icon: "credit-card-scan-outline",
  //       pack: "material",
  //       component: PosHesaplari,
  //     },
  //     {
  //       title: KREDILER,
  //       route: KREDILER,
  //       icon: "cash-100",
  //       pack: "material",
  //       component: Krediler,
  //     },
  //     {
  //       title: KREDIKARTLARI,
  //       route: KREDIKARTLARI,
  //       icon: "credit-card-multiple-outline",
  //       pack: "material",
  //       component: KrediKartlari,
  //     },
  //   ],
  // },
  // {
  //   title: CARIHESAPLAR,
  //   route: CARIHESAPLAR,
  //   icon: "account-cash-outline",
  //   pack: "material",
  //   component: CariHesaplar,
  // },
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
Menus.forEach((item) => {
  if (item.children) {
    item.children.unshift({
      title: Routes.GERIDON,
      goBack: "true",
      icon: "arrow-left-bold-circle-outline",
      pack: "ion",
    });
  }
});
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
