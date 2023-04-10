import loginTemplate from './pages/login/login.hbs';
import chatTemplate from './pages/chat/chat.hbs';
import registerTemplate from './pages/register/signIn.hbs';
import profileTemplate from './pages/profile/profile.hbs';
import changePasswordTemplate from './pages/profile/edit/changePassword.hbs';
import error404Template from './pages/404/error404.hbs';
import error500Template from './pages/500/error500.hbs';


const routes = [
    {path: '/', page: loginTemplate},
    {path: '/chat', page: chatTemplate},
    {path: '/register', page: registerTemplate},
    {path: '/profile', page: profileTemplate},
    {path: '/profile/edit', page: changePasswordTemplate},
    {path: '/error404', page: error404Template},
    {path: '/error500', page: error500Template},
];

function renderPage(page) {
    document.getElementById('root').innerHTML = page.call();
}

function updateView() {
    const currentRoute = window.location.pathname;
    console.log(currentRoute);
    const routeInDict = routes.find(_ => _.path === currentRoute);

    if (routeInDict) {
        const pageName = routeInDict.page;
        renderPage(pageName);
    } else {
        throw new Error('Страница не найдена');
    }
}

function handleNavigation(e) {
    updateView();
}

const links = document.querySelectorAll('nav a');

links.forEach(link => {
    link.addEventListener('click', handleNavigation);
});

window.addEventListener('popstate', updateView);
window.addEventListener('load', updateView);
