import React from 'react';
import { Route, RouteProps } from 'react-router-dom';

// components
import PrivateRoute from './PrivateRoute';
import Root from './Root';

// lazy load all the views

// auth
const Login = React.lazy(() => import('../pages/auth/Login'));
const Logout = React.lazy(() => import('../pages/auth/Logout'));
const Confirm = React.lazy(() => import('../pages/auth/Confirm'));
const ForgetPassword = React.lazy(() => import('../pages/auth/ForgetPassword'));
const Register = React.lazy(() => import('../pages/auth/Register'));
const LockScreen = React.lazy(() => import('../pages/auth/LockScreen'));

// landing

// dashboard
const EcommerceDashboard = React.lazy(() => import('../pages/dashboard/Ecommerce/'));

// apps
const Projects = React.lazy(() => import('../pages/apps/Projects/'));
const ProjectDetail = React.lazy(() => import('../pages/apps/Projects/Detail/'));

// - file
const FileManager = React.lazy(() => import('../pages/apps/FileManager'));

// extra pages
const Error404 = React.lazy(() => import('../pages/error/Error404'));
const Error500 = React.lazy(() => import('../pages/error/Error500'));
// -other
const Starter = React.lazy(() => import('../pages/other/Starter'));
const Profile = React.lazy(() => import('../pages/other/Profile'));
const Activity = React.lazy(() => import('../pages/other/Activity'));
const Invoice = React.lazy(() => import('../pages/other/Invoice'));
const Maintenance = React.lazy(() => import('../pages/other/Maintenance'));

// uikit
const UIElements = React.lazy(() => import('../pages/uikit'));

// widgets
const Widgets = React.lazy(() => import('../pages/widgets/'));

// icons
const Unicons = React.lazy(() => import('../pages/icons/Unicons'));
const FeatherIcons = React.lazy(() => import('../pages/icons/Feather/'));
const BootstrapIcon = React.lazy(() => import('../pages/icons/Bootstrap/'));

// forms
const BasicForms = React.lazy(() => import('../pages/forms/Basic'));
const FormAdvanced = React.lazy(() => import('../pages/forms/Advanced'));
const FormValidation = React.lazy(() => import('../pages/forms/Validation'));
const FormWizard = React.lazy(() => import('../pages/forms/Wizard'));
const FileUpload = React.lazy(() => import('../pages/forms/FileUpload'));
const Editors = React.lazy(() => import('../pages/forms/Editors'));

// charts

// tables
const BasicTables = React.lazy(() => import('../pages/tables/Basic'));
const AdvancedTables = React.lazy(() => import('../pages/tables/Advanced'));

export interface RoutesProps {
    path: RouteProps['path'];
    name?: string;
    component?: RouteProps['component'];
    route?: any;
    exact?: RouteProps['exact'];
    icon?: string;
    header?: string;
    roles?: string[];
    children?: RoutesProps[];
}

// root routes
const rootRoute: RoutesProps = {
    path: '/',
    exact: true,
    component: () => <Root />,
    route: Route,
};

// dashboards
const dashboardRoutes: RoutesProps = {
    path: '/dashboard',
    name: 'Dashboards',
    icon: 'airplay',
    header: 'Navigation',
    children: [
        {
            path: '/dashboard/ecommerce',
            name: 'Ecommerce',
            component: EcommerceDashboard,
            route: PrivateRoute,
        },
    ],
};

const projectAppRoutes: RoutesProps = {
    path: '/apps/projects',
    name: 'Projects',
    route: PrivateRoute,
    roles: ['Admin'],
    icon: 'uil-briefcase',

    children: [
        {
            path: '/apps/projects/list',
            name: 'List',
            component: Projects,
            route: PrivateRoute,
        },
        {
            path: '/apps/projects/details',
            name: 'Detail',
            component: ProjectDetail,
            route: PrivateRoute,
        },
    ],
};


const fileAppRoutes: RoutesProps = {
    path: '/apps/file-manager',
    name: 'File Manager',
    route: PrivateRoute,
    roles: ['Admin'],
    icon: 'folder-plus',
    component: FileManager,
};

const appRoutes = [dashboardRoutes, projectAppRoutes, fileAppRoutes];

// pages
const extrapagesRoutes: RoutesProps = {
    path: '/pages',
    name: 'Pages',
    icon: 'package',
    header: 'Custom',
    children: [
        {
            path: '/pages/starter',
            name: 'Starter',
            component: Starter,
            route: PrivateRoute,
        },
        {
            path: '/pages/profile',
            name: 'Profile',
            component: Profile,
            route: PrivateRoute,
        },
        {
            path: '/pages/activity',
            name: 'Activity',
            component: Activity,
            route: PrivateRoute,
        },
    ],
};

// ui
const uiRoutes: RoutesProps = {
    path: '/components',
    name: 'Components',
    icon: 'package',
    header: 'UI Elements',
    children: [
        {
            path: '/components/ui-elements',
            name: 'UIElements',
            component: UIElements,
            route: PrivateRoute,
        },
        {
            path: '/components/widgets',
            name: 'Widgets',
            component: Widgets,
            route: PrivateRoute,
        },
        {
            path: '/icons',
            name: 'Icons',
            children: [
                {
                    path: '/icons/unicons',
                    name: 'Unicons',
                    component: Unicons,
                    route: PrivateRoute,
                },
                {
                    path: '/icons/feather',
                    name: 'Feather',
                    component: FeatherIcons,
                    route: PrivateRoute,
                },
                {
                    path: '/icons/bootstrap',
                    name: 'Bootstrap Icon',
                    component: BootstrapIcon,
                    route: PrivateRoute,
                },
            ],
        },
        {
            path: '/forms',
            name: 'Forms',
            children: [
                {
                    path: '/forms/basic',
                    name: 'Basic Elements',
                    component: BasicForms,
                    route: PrivateRoute,
                },
                {
                    path: '/forms/advanced',
                    name: 'Form Advanced',
                    component: FormAdvanced,
                    route: PrivateRoute,
                },
                {
                    path: '/forms/validation',
                    name: 'Form Validation',
                    component: FormValidation,
                    route: PrivateRoute,
                },
                {
                    path: '/forms/wizard',
                    name: 'Form Wizard',
                    component: FormWizard,
                    route: PrivateRoute,
                },
                {
                    path: '/forms/upload',
                    name: 'File Upload',
                    component: FileUpload,
                    route: PrivateRoute,
                },
                {
                    path: '/forms/editors',
                    name: 'Editors',
                    component: Editors,
                    route: PrivateRoute,
                },
            ],
        },
        {
            path: '/tables',
            name: 'Tables',
            children: [
                {
                    path: '/tables/basic',
                    name: 'Basic',
                    component: BasicTables,
                    route: PrivateRoute,
                },
                {
                    path: '/tables/advanced',
                    name: 'Advanced',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
            ],
        },
    ],
};

// auth
const authRoutes: RoutesProps[] = [
    {
        path: '/auth/login',
        name: 'Login',
        component: Login,
        route: Route,
    },
    {
        path: '/auth/register',
        name: 'Register',
        component: Register,
        route: Route,
    },
    {
        path: '/auth/confirm',
        name: 'Confirm',
        component: Confirm,
        route: Route,
    },
    {
        path: '/auth/forget-password',
        name: 'Forget Password',
        component: ForgetPassword,
        route: Route,
    },
    {
        path: '/auth/lock-screen',
        name: 'Lock Screen',
        component: LockScreen,
        route: Route,
    },
    {
        path: '/auth/logout',
        name: 'Logout',
        component: Logout,
        route: Route,
    },
];

// public routes
const otherPublicRoutes: RoutesProps[] = [
    {
        path: '/maintenance',
        name: 'Maintenance',
        component: Maintenance,
        route: Route,
    },
    {
        path: '/error-404',
        name: 'Error - 404',
        component: Error404,
        route: Route,
    },
    {
        path: '/error-500',
        name: 'Error - 500',
        component: Error500,
        route: Route,
    },
];

// flatten the list of all nested routes
const flattenRoutes = (routes: RoutesProps[]) => {
    let flatRoutes: RoutesProps[] = [];

    routes = routes || [];
    routes.forEach((item: RoutesProps) => {
        flatRoutes.push(item);

        if (typeof item.children !== 'undefined') {
            flatRoutes = [...flatRoutes, ...flattenRoutes(item.children)];
        }
    });
    return flatRoutes;
};

// All routes
const authProtectedRoutes = [rootRoute, ...appRoutes, extrapagesRoutes, uiRoutes];
const publicRoutes = [...authRoutes, ...otherPublicRoutes];

const authProtectedFlattenRoutes = flattenRoutes([...authProtectedRoutes]);
const publicProtectedFlattenRoutes = flattenRoutes([...publicRoutes]);
export { publicRoutes, authProtectedRoutes, authProtectedFlattenRoutes, publicProtectedFlattenRoutes };
