import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
<!--            <div class="row">-->
<!--                &lt;!&ndash; search field and cog &ndash;&gt;                -->
<!--                <div class="col-11">-->
<!--                    <ul class="list-group">-->
<!--                        <li class="list-group-item rounded-pill">-->
<!--                            <i class="fa fa-search d-inline"></i>-->
<!--                            <input type="text" class="d-inline border-0 border-white ms-2"-->
<!--                                   placeholder="Search Twitter" style="outline: none">-->
<!--                        </li>-->
<!--                    </ul>-->
<!--                </div>-->
<!--                -->
<!--                <div  class="col-1">-->
<!--                    <a href="explore-settings.html">-->
<!--                        <i class="fa fa-cog fa-2x text-primary mt-1 float-end"></i>-->
<!--                    </a>-->
<!--                </div>-->

<!--            </div>-->

<!--           <ul class="nav mb-2 nav-tabs">-->
<!--                &lt;!&ndash; tabs &ndash;&gt;     -->
<!--                <li class="nav-item">-->
<!--                    <a class="nav-link active" href="for-you.html">For you</a>-->
<!--                </li>-->
<!--                <li class="nav-item">-->
<!--                    <a class="nav-link" href="trending.html">Trending</a>-->
<!--                </li>-->
<!--                <li class="nav-item">-->
<!--                    <a class="nav-link" href="news.html">News</a>-->
<!--                </li>-->
<!--                <li class="nav-item">-->
<!--                    <a class="nav-link" href="sports.html">Sports</a>-->
<!--                </li>-->
<!--                <li class="nav-item d-none d-md-block">-->
<!--                    <a class="nav-link" href="entertainment.html">Entertainment</a>-->
<!--                </li>-->
<!--           </ul>-->

           <!-- image with overlaid text -->
<!--            <div class="position-relative">-->
<!--                <img src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg"-->
<!--                     alt="image-alt-text" class="img-fluid">-->
<!--                <div class="position-absolute bottom-0 left-0 p-2 text-white fs-1">-->
<!--                    SpaceX's Starship-->
<!--                </div>-->
<!--            </div>-->

           ${PostSummaryList()}

    `);
}
export default ExploreComponent;








