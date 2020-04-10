export class MenuModel {

    title: string;
    icon: string;
    url?: string;
    submenu?: SubMenu[];

}

interface SubMenu {
    title: string;
    icon: string;
    url: string;
}
