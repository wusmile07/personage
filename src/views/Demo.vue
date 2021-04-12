<template>
    <div class="all">
        <!--导航栏-->
    <div class="header">个人中心</div>
        <!--头像部分-->
        <div class="top">
            <img src="../assets/user.png" class="img">
            <div class="font">
                <span class="good">上午好！</span>
                <div class="box"> <spam class="lucky">Lucky</spam><img src="../assets/arrow.png" class="arrow"></div>
            </div>
            <div class="box1">
                <img src="../assets/place.png" class="logo">
                <p>西安</p>
            </div>
        </div>
        <!--banner图-->
        <div class="banner">
          <img src="../assets/banner.png">
        </div>
        <!--广告条-->
        <div class="time">
            <img  src="../assets/inform.png" class="music">
            <p>什么时候能摘口罩，张伯礼院士给了一个时间!</p>
            <img src="../assets/error.png" class="error">
        </div>
        <!--我的卡片-->
        <div class="mine">
            <img src="../assets/cardbanner.png" class="left">
            <img src="../assets/card.png" class="card">
            <div class="mycard">
                <span>我的卡片</span>
                <span>My Card</span>
            </div>
            <div class="right">
                <img src="../assets/integralbanner.png" class="tops">
                <div class="integral">
                    <span>我的积分</span>
                    <span>My Points</span>
                </div>
                <img src="../assets/integral.png" class="ji">
                <img src="../assets/ticketbanner.png" class="bottom">
                <div class="ticket">
                    <span>我的优惠券</span>
                    <span>My coupon</span>
                </div>
                <img src="../assets/ticket.png" class="tickets">
            </div>
        </div>
   <!--我的预约   -->
        <div class="yue">
            <p class="yu">我的预约</p>
            <div class="yimiao">
                <div class="img1">
                    <img src="../assets/vaccine.png">
                    <p>疫苗预约</p>
                </div>
                <div class="img1">
                    <img src="../assets/physical.png">
                    <p>体检预约</p>
                </div>
                <div class="img1">
                    <img src="../assets/novel.png">
                    <p>新冠预约</p>
                </div>
            </div>
        </div>
        <!--出租车司机公益体检预约通道banner图-->
        <div class="publics">
            <img src="../assets/public.png" class="public">
        </div>
    <!--我的查询    -->
        <div class="yue">
            <p class="yu">我的查询</p>
            <div class="yimiao">
                <div class="img1">
                    <img src="../assets/report.png">
                    <p>报告查询</p>
                </div>
                <div class="img1">
                    <img src="../assets/shop.png">
                    <p>门店查询</p>
                </div>
                <div class="img1">
                    <img src="../assets/order.png">
                    <p>订单查询</p>
                </div>
            </div>
        </div>
        <!--我的意见    -->
        <div class="yue">
            <p class="yu">我的意见</p>
            <div class="yimiao">
                <div class="img1">
                    <img src="../assets/doctor.png">
                    <p>就医意见</p>
                </div>
                <div class="img1">
                    <img src="../assets/feedback.png">
                    <p>意见反馈</p>
                </div>
                <div class="img1">
                    <img src="../assets/photo.png">
                    <p>拍照投诉</p>
                </div>
            </div>
        </div>
        <!--医护到家-->
        <div class="last">
            <img src="../assets/medic.png" class="medic">
        </div>
    </div>
</template>

<script>
    export default {
        name: "Demo"
    }

</script>

<style scoped>
    .all{
        background: #eeeeee;
    }
    /*<!--导航栏-->*/
.header{
    /*height: 1.8rem;*/
    font-size: 1.3rem;
    text-align: center;
}
/*头像部分*/
    .top{
        width: 95%;
        margin: 0 auto;
        display: flex;
    }
    .img{
        display:block;
        width: 3.3rem;
        height: 3.3rem;
        background: white;
        margin-top: .5rem;
    }
    .font{
        width: 5rem;
        /*height: 4rem;*/
        margin-left: 1.5rem;
    }
   .good{
        display: inline-block;
        font-size: 1rem;
        font-family:"阿里巴巴普惠体 Regular 浑厚";
          margin-top: 0.5rem;
    }
.box{
    width: 5rem;
    /*height: 2rem;*/
    display: flex;
}
   .lucky{
        font-size: 1.2rem;
        font-weight: bold;
        color: #333333;
    }
    .arrow{
        display: block;
        width: .6rem;
        height: 1rem;
        margin-top: 0.4rem;
        margin-left: .8rem;
    }
    .box1{
        width: 4.5rem;
        height: 4rem;
        display: flex;
        margin-left:8rem;
    }
    .logo{
        display: block;
        width: 1.2rem;
        height: 1.2rem;
        margin-top: 1.5rem;
    }
    .box1 p{
        font-size: 1.2rem;
        font-family:"阿里巴巴普惠体 Regular 浑厚";
        margin-left: .5rem;
    }
    /*<!--banner图-->*/
    .banner{
        width: 100%;
    }
    .banner img{
       display: block;
      width: 100%;
        height: 8rem;
    }
    /*<!--广告条-->*/
    .time{
        width: 95%;
        margin: 1rem auto;
        /*height: 1.8rem;*/
        background: #fdefdd;
        border-radius: 0.3rem;
        display: flex;
    }
    .music{
        display: block;
        width: 1rem;
        height: 1rem;
        margin-top: .3rem;
        margin-left: 1rem;
    }
    .time p{
        font-size: 0.7rem;
        line-height: 0.5rem;
        margin-left: 0.8rem;
        color: #7e5314;
    }
    .error{
        width: 1rem;
        height: 1rem;
        margin-left: 2rem;
        margin-top: .4rem;
    }
    /*我的卡片*/
    .mine{
        width: 95%;
        height: 11rem;
        margin: 0 auto;
        background:white;
        border-radius:.6rem;
        display: flex;
        position: relative;
    }
    .left{
        display: block;
        width: 38%;
        height: 10rem;
        margin-top: .6rem;
        margin-left: .8rem;
    }
    .card{
        display: block;
        position: absolute;
        width: 2.5rem;
        height: 2.5rem;
        top:3rem;
        left:4rem;
    }
    .mycard{
        width: 4rem;
        height: 3rem;
        position: absolute;
        top:6rem;
        left: 3.4rem;
    }
    .mine span{
        font-size: .9rem;
        color: white;
        font-family:"阿里巴巴普惠体 Regular 浑厚";
    }
    .right{
        width: 50%;
        height: 10rem;
        /*background: navajowhite;*/
        margin-top: .6rem;
        margin-left: 1rem;
        border-radius:.6rem;
    }
    .tops{
        width: 100%;
        height: 5rem;
        display: flex;
        position: relative;
    }
    .integral{
        position: absolute;
        top:1.5rem;
         right: 5.5rem;
        width: 5rem;
        height: 3rem;
    }
    .integral span{
        display: inline-block;
        font-size: 1rem;
        color: #e8cdaf;
    }
    .ji{
        display: block;
        width: 2.8rem;
        height: 2.8rem;
        position: absolute;
        top:1.7rem;
        right:2rem;
    }
    .bottom{
        display: inline-block;
        width: 100%;
        height: 4.5rem;
        margin-top: .5rem;
        position: relative;
    }
    .ticket{
        position:absolute;
        top:6.5rem;
        right: 5rem;
        width: 7rem;
        height: 3rem;
    }
    .ticket span{
        color: #515151;
        font-size: 1rem;
        margin-left: 1.5rem;
    }
    .tickets{
        display: block;
        width: 2.3rem;
        height: 2rem;
        position: absolute;
        top:7rem;
        right: 2rem;
    }
  .yue{
      width: 95%;
      /*height: 11rem;*/
      margin: 1rem auto;
      border-radius: .6rem;
      background: white;
}
    .yu{
        display: block;
        width: 95%;
        height: 3rem;
        margin: 0 auto;
        margin-left: 1rem;
        color: #333333;
        line-height: 3rem;
        border-bottom: 1px solid #eeeeee;
        box-sizing: border-box;
    }
    .yimiao{
        width: 95%;
        height: 7rem;
        margin: .5rem auto;
        display: flex;
        justify-content: space-between;
    }
    .img1{
        width: 25%;
        height: 5rem;
        /*background: cadetblue;*/
        margin-top: 1rem;
    }
    .img1 img{
        display: block;
        width: 2rem;
        height: 2rem;
        margin: 0 auto;
    }
    .yimiao p{
        font-size: 1rem;
        color: #595853;
        line-height: .5rem;
        text-align: center;
    }
    /*<!--出租车司机公益体检预约通道banner图-->*/
    .publics{
        width: 95%;
        margin: 1rem auto;
    }
    .public{
        display: block;
        width: 100%;
        /*height: 3rem;*/
    }
    /*<!--医护到家-->*/
    .last{
        width: 95%;
        margin: 1rem auto;
    }
    .medic{
        display: block;
        width: 100%;
    }
</style>