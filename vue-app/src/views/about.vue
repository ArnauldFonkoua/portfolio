<template>

    <!DOCTYPE html>
<html lang="en">
<head>

    <title>About us</title>
</head>
<body>
    <div class="heading">
        <h1>About Us</h1>
        <p>ECOMMERCE WEBSITE</p>
    </div>
    <div class="container">
        <section class="about">
            <div class="about-image">
                <img src="../photos/about2.jpeg" alt="">
            </div>
            <div class="about-content">
                <h2>Welcome to our website</h2>
                <p>Our Story: More Than Just Shopping. Welcome to Our Ecommerce site Arnauld! We’re thrilled you stopped by to learn a little more about who we are and why we do what we do.
Our journey began with a simple but powerful idea: to create an online marketplace that doesn't just sell products, but sells pieces we genuinely love and believe in. In a world full of options, we wanted to curate a collection that stands out for its quality, craftsmanship, and positive impact.
At our core, we are passionate about two things: exceptional products and exceptional service.
Our Mission.
                </p>
                <p>
Our mission is to bring beautifully designed, high-quality items directly to your door, making the process of finding and purchasing the perfect product simple, enjoyable, and inspiring. We aim to be the place you turn to when you're looking for something reliable, unique, and made to last.
Our Core Values</p><p>
Quality First: Every item in our store is hand-selected and rigorously checked. If we wouldn't use it ourselves, we won't sell it to you.
Customer Obsession:</p>
<p> We believe that the best shopping experience extends far beyond the click of a button. Our team is dedicated to supporting you every step of the way, from browsing to unboxing.
Ethical Sourcing: We prioritize working with suppliers and artisans who share our commitment to fair labor practices and environmental responsibility.
Join Our 
</p>
                <p>We're not just a store; we are a growing community of people who appreciate quality and thoughtful design. Thank you for being a part of our story. We hope you love browsing our collection as much as we love curating it for you!
Happy Shopping!</p>
                    <a href="#" class="btn">Read Guide</a>
            </div>
        </section>

    </div>
</body>
</html>
</template>

<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins','sans-serif';
}

body{

    background-color: #f2f2f2;

}
.heading{
    
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    margin: 20px auto;
    margin-top: 20px;
}

.heading h1{
    font-size: 50px;
    color: #000;
    margin-bottom: 25px;
    position: relative;
}
.heading h1::after{
    content: "";
    position: absolute;
    width: 100%;
    height: 4px;
    display: block;
    margin: 0 auto;
    background-color: #4caf50;
}
.heading p{
    font-size: 18px;
    color: #666;
    margin-bottom: 35px;
}
.container{
    width: 100%;
    margin: 0 auto;
    padding: 0px 0px;
    margin-top: 300px;
}
.about{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
 
}
.about-image{
    flex: 1;
    margin-right: 40px;
    overflow: hidden;
}
.about-image img{
    max-width: 100%;
    height: auto;
    display: block;
    transition: 0.5s ease;
}
.about-image:hover img{
    transform: scale(1.2);
}
.about-content{
    position: relative;
    top: -300px;
    left: 450px;
}
.about-content h2{
    font-size: 23px;
   margin-bottom: 15px;
    color: #333;
}
.about-content p{
    font-size: 18px;
    line-height: 1.5;
    color: #666;
}
.about-content .btn{
    display: inline-block;
    padding: 10px 20px;
    background-color: #4caf50;
    color: #fff;
    font-size: 19px;
    text-decoration: none;
    border-radius: 25px;
    margin-top: 15px;
    transition: 0.3s ease;
}
.about-content .btn:hover{
    background-color: #3e8e41;
}


</style>