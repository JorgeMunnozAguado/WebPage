var header;
var sticky;

function moveLetter( name, size ) { 
    document.getElementById( name ).style.height = size;
}
    
function scrolling() {
    
    if (window.pageYOffset > sticky) {
        
        header.classList.add('sticky');
            
    } else {
        
        header.classList.remove('sticky');
        
        var marginTop = -(document.documentElement.scrollTop) * 0.6;
        document.getElementById('body-info').style.marginTop = marginTop + 'px';

    }
}

function setPaddingImage( ) {
    
    var pageHeight = screen.height;

    document.getElementById('header-div').style.height = pageHeight + 'px';
    document.getElementById('header-letters').style.marginTop = (pageHeight * 2 / 6) + 'px';
    
    header = document.getElementById('header-name');
    sticky = header.offsetTop;
}