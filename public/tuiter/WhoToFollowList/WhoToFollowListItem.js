const WhoToFollowListItem = (who) => {

    return(`
<!--        <li class="list-group-item d-flex justify-content-between align-items-center">-->
<!--                <span class="fw-bold">Who to follow</span>-->
<!--        </li>-->

        <!--1st-->
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <div class="col-2">
                <img class="rounded-circle" src= ${who.avatarIcon} 
                     style="width: 50px; height:50px; border-radius: 50%"/>         
            </div>
            
            <div class="ms-2 me-auto col-7">
                <div class="fw-bold ms-0">
                    ${who.userName}
                    <i class="fa-solid fa-circle text-white"></i>
                </div>
            
                ${who.handle}
            
            </div>
            
            




<!--            <div class="col-2">-->
<!--               -->
<!--                <img class="wd-java-img"-->
<!--                     src="https://cdn-icons-png.flaticon.com/512/5968/5968282.png"/>-->
<!--            </div>-->
<!--            <div class=" ms-1 me-auto col-7">-->
<!--                <div class="fw-bold">-->
<!--                    Java-->
<!--                    <i class="fa fa-solid fa-circle-check text-black"></i>-->
<!--                </div>-->
<!--                @Java-->
<!--            </div>-->
            <div class="col-3">
                <button class="btn btn-primary rounded-pill float-end" type="submit">Follow</button>
            </div>

        </li>
   `);
}
export default WhoToFollowListItem;






