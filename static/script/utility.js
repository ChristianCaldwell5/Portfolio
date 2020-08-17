export function responsiveLinks() {
    var element = document.getElementById('nav-container');
    if (element.className === 'desktop') {
        element.className = 'mobile';
        console.log('mobile');
    } else {
        element.className = 'desktop';
        console.log('desktop');
    }
}