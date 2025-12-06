
<script>

</script>


<template>

<link rel="stylesheet" href="../css/stylefooter1.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.5.0/remixicon.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg==" crossorigin="anonymous" referrerpolicy="no-referrer" />

<footer>
<div class="footer_info">
    <div class="footer_width about">
        <h2>About</h2>
        <p>
           This intervention website created in 2025.
            had aim to facilitate and improve your working conditions
             by assuring your devices functions correctly in an efficient manner.  
        </p>
        <div class="social-media">
                        <ul>
                <li><a href="#" class="foot"><i class="fa fa-facebook-square"></i></a></li>
                <li><a href="https://www.instagram.com/arn_a_uld?igsh=NGQ2MGRrM211dWhu&utm_source=qr" class="foot"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                <li><a href="https://wa.me/237694817663" class="foot"><i class="fa fa-whatsapp" aria-hidden="true"></i></a></li>
</ul>
        </div>
    </div>
    <div class="footer_width link">
        <h2>Quick link</h2>
        <ul>
            <li><a href="home.php" class="foot">Home</a></li>
            <li><a href="#" class="foot">About Us</a></li>
            <li><a href="dashboard.php" class="foot">Services</a></li>
            <li><a href="users.php" class="foot">Contact Us</a></li>
        </ul>
    </div>
    <div class="footer_width contact">
        <h2>Contact</h2>
        <ul>
            <li>
                <span><i class="fa fa-map-marker" aria-hidden="true"></i></span>
                <a href="#" class="foot">Odza, Happy</a>
                <p>
                    Odza, Happy
                </p>
            </li>
            <li>
                <span><i class="fa fa-envelope" aria-hidden="true"></i></span>
                <a href="mailto: fonkouaarnauld@gmail.com" class="foot">fonkouaarnauld@gmail.com</a>
            </li>
            <li>
                <span><i class="fa fa-phone" aria-hidden="true"></i></span>
                <a href="tel:694-81-76-63" class="foot">+237 694817663</a>
            </li>
        </ul>
    </div>
</div>
<div class="copy-right">
    <p>&copy; COPYRIGHT 2025 ECOMMERCE WEBSITE ALL RIGHTS RESERVED.</p>
</div>
</footer>
</template>


<style scoped>

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.foot{
    text-decoration: none;
    transition: .5s;
    color: #fff;

}
ul ,li{
    list-style-type: none;
}

footer{
    background-color: rgb(34, 34, 34);
    color: #fff;
    position: relative;
  
}

.footer_info{
    width: 90%;
    margin: 0 auto ;
    display: flex;
    padding: 50px 0;
}

.footer_info .footer_width{
    padding: 0 15px;
}
.footer_info h2{
    margin-bottom: 20px;

}
.about, .contact{
    width: 40%;
}
.link{
    width: 20%;
}

.social-media{
    margin-top: 30px;
}
.social-media ul{
    display: flex;
}
.social-media ul li a {
    display: inline-block;
    margin-right: 50px;
    width: 50px;
    height: 50px;
    padding-top: 12px;
    background-color: transparent;
    border: 1px solid #fff;
    text-align: center;
}
.social-media ul li a:hover{
    background-color: #fff;
    color: #000;
}
.link ul li a{
    display: block;
    margin-bottom: 15px;
    font-size: 18px;
}
.link ul li a:hover{
    color: #000;
}

.contact ul li{
    display: flex;
    align-items: center;
    margin-bottom: 15px;
}
.contact ul li span{
    margin-right: 15px;
}

.copy-right{
    padding: 15px 0;
    text-align: center;
    background-color: rgb(66, 66, 66);
}
@media screen and (max-width:992px){
    .about,.contact{
        width: 35%;
        
    }
    .link{
        width: 30%;
    }
}
@media screen and (max-width:767px) {
    .about, .contact, .link{
        width: 100%;
        margin-bottom: 30px;
    }
    .footer_info{
        flex-direction: column;
    }
    
}

</style>