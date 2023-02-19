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
<!--           <div>-->
<!--                <a href="#" class="list-group-item d-block d-xl-none ">-->
<!--                    <i class="fa fa-home" aria-hidden="true"></i>-->
<!--                </a>-->
<!--                <a href="#" class="list-group-item  d-none d-xl-block">-->
<!--                    <i class="fa fa-home" aria-hidden="true"></i>-->
<!--                    Home-->
<!--                </a>-->
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
        
    
<!--            </div>-->
<!--            <div>-->
<!--                <a href="#" class=" list-group-item active d-block d-xl-none ">-->
<!--                    <i class="fa fa-hashtag " aria-hidden="true"></i>-->
<!--                </a>-->
<!--                <a href="#" class=" list-group-item active  d-none d-xl-block">-->
<!--                    <i class="fa fa-hashtag " aria-hidden="true"></i>-->
<!--                    Explore-->
<!--                </a>-->
<!--            </div>-->
<!--            <div>-->
<!--                <a href="#" class=" list-group-item d-block d-xl-none ">-->
<!--                    <i class="fa fa-solid fa-bell" aria-hidden="true"></i>-->
<!--                </a>-->
<!--                <a href="#" class=" list-group-item  d-none d-xl-block">-->
<!--                    <i class="fa fa-solid fa-bell" aria-hidden="true"></i>-->
<!--                    Notifications-->
<!--                </a>-->
<!--            </div>-->
<!--            <div>-->
<!--                <a href="#" class=" list-group-item d-block d-xl-none ">-->
<!--                    <i class="fa fa-solid fa-envelope" aria-hidden="true"></i>-->
<!--                </a>-->
<!--                <a href="#" class=" list-group-item  d-none d-xl-block">-->
<!--                    <i class="fa fa-solid fa-envelope" aria-hidden="true"></i>-->
<!--                    Messages-->
<!--                </a>-->
<!--            </div>-->
<!--            <div>-->
<!--                <a href="#" class=" list-group-item d-block d-xl-none ">-->
<!--                    <i class="fa fa-solid fa-bookmark" aria-hidden="true"></i>-->
<!--                </a>-->
<!--                <a href="#" class=" list-group-item  d-none d-xl-block">-->
<!--                    <i class="fa fa-solid fa-bookmark" aria-hidden="true"></i>-->
<!--                    Bookmarks-->
<!--                </a>-->
<!--            </div>-->
<!--            <div>-->
<!--                <a href="#" class=" list-group-item d-block d-xl-none ">-->
<!--                    <i class="fa fa-solid fa-list" aria-hidden="true"></i>-->
<!--                </a>-->
<!--                <a href="#" class=" list-group-item  d-none d-xl-block">-->
<!--                    <i class="fa fa-solid fa-list" aria-hidden="true"></i>-->
<!--                    Lists-->
<!--                </a>-->
<!--            </div>-->
<!--            <div>-->
<!--                <a href="#" class=" list-group-item d-block d-xl-none ">-->
<!--                    <i class="fa fa-solid fa-user" aria-hidden="true"></i>-->
<!--                </a>-->
<!--                <a href="#" class=" list-group-item  d-none d-xl-block">-->
<!--                    <i class="fa fa-solid fa-user" aria-hidden="true"></i>-->
<!--                    Profile-->
<!--                </a>-->
<!--            </div>-->
<!--            <div>-->
<!--                <a href="#" class=" list-group-item d-block d-xl-none ">-->
<!--                    <i class="fa fa-solid fa-ellipsis" aria-hidden="true"></i>-->
<!--                </a>-->
<!--                <a href="#" class=" list-group-item  d-none d-xl-block">-->
<!--                    <i class="fa fa-solid fa-ellipsis" aria-hidden="true"></i>-->
<!--                    More-->
<!--                </a>-->
<!--            </div>-->
       </div>
       <div class="d-grid mt-2">
            <a href="tweet.html"
                class="btn btn-primary btn-block rounded-pill">
                Tweet</a>
       </div>

<!--        <button type="submit" class="btn btn-primary rounded-pill mt-3 btn-block">Tuit</button>-->

 `);
}
export default NavigationSidebar;



