import React from 'react';
import RegistroVenta from "../views/ventas/Registro";
import ListaVentas from "../views/ventas/Lista";
import RegistroCompra from "../views/compras/Registro";
import ListaCompras from "../views/compras/Lista";
import RegistroProveedor from "../views/proveedores/Registro";
import ListaProveedores from "../views/proveedores/Lista";
import Kardex from "../views/productos/Kardex";
import ListaProductos from "../views/productos/Lista";
import RegistroServicio from "../views/servicios/Registro";
import ListaServicios from "../views/servicios/Lista";
import RegistroOferta from "../views/ofertas/Registro";
import ListaOfertas from "../views/ofertas/Lista";
import RegistroCategoria from "../views/categorias/Registro";
import RegistroMarca from "../views/marcas/Registro";
import RegistroEmpleado from "../views/empleados/Registro";
import ListaEmpleados from "../views/empleados/Lista";
import SaveIcon from '@material-ui/icons/Save';
import ListIcon from '@material-ui/icons/List';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import MarkunreadMailboxIcon from '@material-ui/icons/MarkunreadMailbox';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList';
import BrandingWatermarkIcon from '@material-ui/icons/BrandingWatermark';
import PeopleIcon from '@material-ui/icons/People';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';

//En base a este arreglo de objetos se generaran las rutas
const routes = [
    {
        path: "/ventas",
        name: "Ventas",
        icon: <ShoppingCartIcon/>,
        layout: "/admin",
        collapses: [
            {
                path: "/registro",
                name: "Registrar",
                icon: <SaveIcon/>,
                component: RegistroVenta
            },
            {
                path: "/lista",
                name: "Lista",
                icon: <ListIcon />,
                component: ListaVentas
            }
        ]
    },
    {
        path: "/compras",
        name: "Compras",
        icon: <ShoppingBasketIcon />,
        layout: "/admin",
        collapses: [
            {
                path: "/registro",
                name: "Registrar",
                icon: <SaveIcon/>,
                component: RegistroCompra
            },
            {
                path: "/lista",
                name: "Lista",
                icon: <ListIcon />,
                component: ListaCompras
            }
        ]
    },
    {
        path: "/proveedores",
        name: "Proveedores",
        icon: <ContactMailIcon />,
        layout: "/admin",
        collapses: [
            {
                path: "/registro",
                name: "Registrar",
                icon: <SaveIcon/>,
                component: RegistroProveedor
            },
            {
                path: "/lista",
                name: "Lista",
                icon: <ListIcon />,
                component: ListaProveedores
            }
        ]
    },
    {
        path: "/productos",
        name: "Productos",
        icon: <AllInboxIcon />,
        layout: "/admin",
        collapses: [
            {
                path: "/lista",
                name: "Lista",
                icon: <ListIcon />,
                component: ListaProductos
            },
            {
                path: "/kardex",
                name: "Kardex",
                icon: <ListIcon />,
                component: Kardex
            }
        ]
    },
    {
        path: "/servicios",
        name: "Servicios",
        icon: <MarkunreadMailboxIcon />,
        layout: "/admin",
        collapses: [
            {
                path: "/registro",
                name: "Registrar",
                icon: <SaveIcon/>,
                component: RegistroServicio
            },
            {
                path: "/lista",
                name: "Lista",
                icon: <ListIcon />,
                component: ListaServicios
            }
        ]
    },
    {
        path: "/ofertas",
        name: "Ofertas",
        icon: <LocalOfferIcon />,
        layout: "/admin",
        collapses: [
            {
                path: "/registro",
                name: "Registrar",
                icon: <SaveIcon/>,
                component: RegistroOferta
            },
            {
                path: "/lista",
                name: "Lista",
                icon: <ListIcon />,
                component: ListaOfertas
            }
        ]
    },
    {
        path: "/categorias",
        name: "Categorias",
        icon: <FeaturedPlayListIcon />,
        layout: "/admin",
        collapses: [
            {
                path: "/registro",
                name: "Registro y Lista",
                icon: <ListIcon />,
                component: RegistroCategoria
            }
        ]
    },
    {
        path: "/marcas",
        name: "Marcas",
        icon: <BrandingWatermarkIcon />,
        layout: "/admin",
        collapses: [
            {
                path: "/registro",
                name: "Registro y Lista",
                icon: <FolderOpenIcon />,
                component: RegistroMarca
            }
        ]
    },
    {
        path: "/empleados",
        name: "Empleados",
        icon: <PeopleIcon />,
        layout: "/admin",
        collapses: [
            {
                path: "/registro",
                name: "Registrar",
                icon: <SaveIcon/>,
                component: RegistroEmpleado
            },
            {
                path: "/lista",
                name: "Lista",
                icon: <ListIcon />,
                component: ListaEmpleados
            }
        ]
    }
];

export default routes;