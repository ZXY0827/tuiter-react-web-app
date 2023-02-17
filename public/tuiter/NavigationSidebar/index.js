const NavigationSidebar = () => {
    return(`
       <div class="list-group btn-block">
           <a class="list-group-item" href="/">
                <i class="fab fa-twitter"></i>
           </a>
           <div>
                <a href="#" class="list-group-item d-block d-xl-none ">
                    <i class="fa fa-home" aria-hidden="true"></i>
                </a>
                <a href="#" class="list-group-item  d-none d-xl-block">
                    <i class="fa fa-home" aria-hidden="true"></i>
                    Home
                </a>
            </div>
            <div>
                <a href="#" class=" list-group-item active d-block d-xl-none ">
                    <i class="fa fa-hashtag " aria-hidden="true"></i>
                </a>
                <a href="#" class=" list-group-item active  d-none d-xl-block">
                    <i class="fa fa-hashtag " aria-hidden="true"></i>
                    Explore
                </a>
            </div>
            <div>
                <a href="#" class=" list-group-item d-block d-xl-none ">
                    <i class="fa fa-solid fa-bell" aria-hidden="true"></i>
                </a>
                <a href="#" class=" list-group-item  d-none d-xl-block">
                    <i class="fa fa-solid fa-bell" aria-hidden="true"></i>
                    Notifications
                </a>
            </div>
            <div>
                <a href="#" class=" list-group-item d-block d-xl-none ">
                    <i class="fa fa-solid fa-envelope" aria-hidden="true"></i>
                </a>
                <a href="#" class=" list-group-item  d-none d-xl-block">
                    <i class="fa fa-solid fa-envelope" aria-hidden="true"></i>
                    Messages
                </a>
            </div>
            <div>
                <a href="#" class=" list-group-item d-block d-xl-none ">
                    <i class="fa fa-solid fa-bookmark" aria-hidden="true"></i>
                </a>
                <a href="#" class=" list-group-item  d-none d-xl-block">
                    <i class="fa fa-solid fa-bookmark" aria-hidden="true"></i>
                    Bookmarks
                </a>
            </div>
            <div>
                <a href="#" class=" list-group-item d-block d-xl-none ">
                    <i class="fa fa-solid fa-list" aria-hidden="true"></i>
                </a>
                <a href="#" class=" list-group-item  d-none d-xl-block">
                    <i class="fa fa-solid fa-list" aria-hidden="true"></i>
                    Lists
                </a>
            </div>
            <div>
                <a href="#" class=" list-group-item d-block d-xl-none ">
                    <i class="fa fa-solid fa-user" aria-hidden="true"></i>
                </a>
                <a href="#" class=" list-group-item  d-none d-xl-block">
                    <i class="fa fa-solid fa-user" aria-hidden="true"></i>
                    Profile
                </a>
            </div>
            <div>
                <a href="#" class=" list-group-item d-block d-xl-none ">
                    <i class="fa fa-solid fa-ellipsis" aria-hidden="true"></i>
                </a>
                <a href="#" class=" list-group-item  d-none d-xl-block">
                    <i class="fa fa-solid fa-ellipsis" aria-hidden="true"></i>
                    More
                </a>
            </div>
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


