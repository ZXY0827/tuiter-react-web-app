import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
    return (`
           <ul class="list-group">
               <li class="list-group-item d-flex justify-content-between align-items-center">
                    <span class="fw-bold">Who to follow</span>
               </li>
              ${
                who.map(who => {
                    return (WhoToFollowListItem(who));
                }).join('')
              }

           </ul>
`); }

export default WhoToFollowList;




        // <li class="list-group-item d-flex justify-content-between align-items-center">
        //     <span class="fw-bold">Who to follow</span>
        // </li>
        //
        // <li class="list-group-item d-flex justify-content-between align-items-center ">



// <!--                    <i class="fa fa-solid fa-circle-check text-black"></i>-->
// <!--                </div>-->
// <!--                @Java-->
// <!--            </div>-->
// <!--            <div class="col-3">-->
// <!--                <button class="btn btn-primary rounded-pill float-end" type="submit">Follow</button>-->
// <!--            </div>-->
//
// <!--        </li>-->
// <!--        &lt;!&ndash;2nd&ndash;&gt;-->
// <!--        <li class="list-group-item d-flex justify-content-between align-items-center">-->
// <!--            <div class="col-2">-->
// <!--                <img class="wd-java-img "-->
// <!--                     src="relativity.png"/>-->
// <!--            </div>-->
//
// <!--            <div class="ms-1 me-auto col-7">-->
// <!--                <div class="fw-bold ">-->
// <!--                    Relativity Space-->
// <!--                    <i class="fa fa-solid fa-circle-check text-black"></i>-->
// <!--                </div>-->
// <!--                @relativityspace-->
// <!--            </div>-->
// <!--            <div class="col-3">-->
// <!--                <button class="btn btn-primary rounded-pill float-end" type="submit">Follow</button>-->
// <!--            </div>-->
//
// <!--        </li>-->
// <!--        &lt;!&ndash;3 &ndash;&gt;-->
// <!--        <li class="list-group-item d-flex justify-content-between align-items-center">-->
// <!--            <div class="col-2">-->
// <!--                <img class="wd-java-img"-->
// <!--                     src="virgin.png"/>-->
// <!--            </div>-->
//
// <!--            <div class="ms-1 me-auto col-7">-->
// <!--                <div class="fw-bold">-->
// <!--                    Virgin Galsctic-->
// <!--                    <i class="fa fa-solid fa-circle-check text-black"></i>-->
//
// <!--                </div>-->
// <!--                @virgingalsctic-->
// <!--            </div>-->
// <!--            <div class="col-3">-->
// <!--                <button class="btn btn-primary rounded-pill float-end" type="submit">Follow</button>-->
// <!--            </div>-->
//
// <!--        </li>-->
// <!--        &lt;!&ndash;4&ndash;&gt;-->
// <!--        <li class="list-group-item d-flex justify-content-between align-items-center">-->
// <!--            <div class="col-2">-->
// <!--                <img class="wd-java-img "-->
// <!--                     src="nasa.png"/>-->
// <!--            </div>-->
//
// <!--            <div class="ms-1 me-auto col-7">-->
// <!--                <div class="fw-bold">-->
// <!--                    NASA-->
// <!--                    <i class="fa fa-solid fa-circle-check text-black"></i>-->
// <!--                </div>-->
// <!--                @NASA-->
// <!--            </div>-->
// <!--            <div class="col-3">-->
// <!--                <button class="btn btn-primary rounded-pill float-end" type="submit">Follow</button>-->
// <!--            </div>-->
//
// <!--        </li>-->
// <!--        &lt;!&ndash;5&ndash;&gt;-->
// <!--        <li class="list-group-item d-flex justify-content-between align-items-center">-->
// <!--            <div class="col-2">-->
// <!--                <img class="wd-java-img"-->
// <!--                     src="tesla.png"/>-->
// <!--            </div>-->
//
// <!--            <div class="ms-1 me-auto col-7">-->
// <!--                <div class="fw-bold">-->
// <!--                    Tesla-->
// <!--                    <i class="fa fa-solid fa-circle-check text-black"></i>-->
// <!--                </div>-->
// <!--                @Tesla-->
// <!--            </div>-->
// <!--            <div class="col-3">-->
// <!--                <button class="btn btn-primary rounded-pill float-end" type="submit">Follow</button>-->
// <!--            </div>-->
//
// <!--        </li>-->
// <!--      </ul>-->
//
//    -->


