import { NbMenuItem } from "@nebular/theme";

export const MENU_ITEMS: NbMenuItem[]=[
    {
        title: 'Personajes',
        icon: 'people-outline',
        link: '/character',
        home: true,
    },
    {
        title: 'Lugares',
        icon: 'image-outline',
        link: '/location'
    },
    {
        title: 'Episodios',
        icon: 'play-circle-outline',
        link: '/episode'
    }
]