const NavigationSidebar = (highlight= 'Explore') => {
    const sections = [
        {label:'Home', href: '../HomeScreen/index.html', icon:'<i class="fa fa-home"></i>'},
        {label:'Explore', href: '../explore/index.html', icon:'<i class="fa fa-hashtag"></i>'},
        {label:'Notifications', href: '#', icon:'<i class="fa fa-solid fa-bell"></i>'},
        {label:'Messages', href: '#', icon:'<i class="fa fa-solid fa-envelope"></i>'},
        {label:'Bookmarks', href: '#', icon:'<i class="fa fa-solid fa-bookmark"></i>'},
        {label:'Lists', href: '#', icon:'<i class="fa fa-solid fa-list"></i>'},
        {label:'Profile', href: '#', icon:'<i class="fa fa-solid fa-user"></i>'},
        {label:'More', href: '#', icon:'<i class="fa-solid fa-circle text-white"></i>'}
    ]
    return(`
       <div class="list-group btn-block">
           <a class="list-group-item" href="#">
                <i class="fab fa-twitter"></i>
           </a>
                ${
                    sections.map(section =>
                        `<a class="list-group-item d-block d-xl-none ${section.label === highlight ? 'active' : ''}" 
                            href="${section.href}">
                            ${section.icon}
                        </a>
                        <a  class="list-group-item  d-none d-xl-block ${section.label === highlight ? 'active' : ''}" 
                            href="${section.href}">
                            ${section.icon}

                            ${section.label}

                         </a>`
                    ).join(' ')
                }
       </div>
       <div class="d-grid mt-2">
            <a href="tweet.html"
                class="btn btn-primary btn-block rounded-pill">
                Tweet</a>
       </div>

 `);
}
export default NavigationSidebar;



