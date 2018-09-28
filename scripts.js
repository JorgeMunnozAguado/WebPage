

function moveLetter( name, size ) { 
    document.getElementById( name ).style.height = size;
}
    
function prueba() {
    
    var marginTop = -(document.documentElement.scrollTop) * 0.6;
    
    document.getElementById('body-info').style.marginTop = marginTop + 'px';
}

function setPaddingImage( ) {
    
    var pageHeight = screen.height;
    var pageWidth = screen.width;

    document.getElementById('header-div').style.height = pageHeight + 'px';
    document.getElementById('header-letters').style.marginTop = (pageHeight * 2 / 6) + 'px';
}