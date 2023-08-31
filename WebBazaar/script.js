function openpage(){
    if(id==1)
    window.open("shop.html")
    else if(id==2)
    window.open("blog.html")
    else if(id==3)
    window.open("about.html")
    else if(id==4)
    scrollToFooter()
    else if(id==5)
    window.open("cart.html")


}
function scrollToFooter() {
    const footerElement = document.getElementById('footer');
    footerElement.scrollIntoView({ behavior:'smooth'  });
  }