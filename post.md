---
layout: default
title: Post
permalink: /post/
---

<div id="containerBody">
    <div id="sectionAuth" class='hidden'>
        <div class="titleText">“It’s not what you are that counts, it’s what they think you are.”</div>
        <div class="subheaderText">- Andy Warhol</div>
        <div class="bodyText">
        <a href="https://ian4d.auth.us-east-1.amazoncognito.com/login?client_id=5gkqerrd4jp32j8rjfdshkk0q9&response_type=token&scope=aws.cognito.signin.user.admin+openid+profile&redirect_uri=http://localhost:4000/post" class="navlink">Who are you?</a>
        </div>
    </div>
    <div id="sectionPost" class='hidden'>
        <form action="#" method="POST" id="formPublish">
            <textarea name="message" id="textAreaMessage" placeholder='"Art is anything you can get away with."'></textarea><br />
        </form>
        <div class="subheaderText"><a href="#" id="linkSubmit" class="enabled">Submit</a></div>
        <div class="bodyText">
        Now's your chance to steal the spotlight; But remember, lightning doesn't strick the same place twice! Leave your one and only message up above, and when you're ready to join the ages click 'Submit'. 
        </div>
    </div>
    <div id="sectionError" class='hidden'>
        <div class="titleText">"I think it would be terrific if everybody was alike."</div>
        <div class="subheaderText">- Andy Warhol</div>
        <div class="bodyText">
            You for example, remind me of someone I've seen here before. Let's not retread history babe. Your star can't shine forever, and your moment has already passed.
        </div>
    </div>
    <div id="sectionConfirmation" class='hidden'>
        <div class="titleText">"The idea is not to live forever; it is to create something that will."</div>
        <div class="subheaderText">- Andy Warhol</div>
        <div class="bodyText">
            ...unfortunately this won't. In fact if you aren't here on <span id="startDateText" class="publishDateText"></span> between <span id="startTimeText" class="publishDateText">START DATE</span> and <span id="endTimeText" class="publishDateText">END DATE</span> you'll miss your moment altogether, so don't forget!
        </div>
    </div>   
</div>

<script type="text/javascript" src="/assets/js/amazon-cognito-identity.min.js"></script>
<script type="text/javascript" src="/assets/js/apiGateway-js-sdk/lib/axios/dist/axios.standalone.js"></script>
<script type="text/javascript" src="/assets/js/apiGateway-js-sdk/lib/CryptoJS/rollups/hmac-sha256.js"></script>
<script type="text/javascript" src="/assets/js/apiGateway-js-sdk/lib/CryptoJS/rollups/sha256.js"></script>
<script type="text/javascript" src="/assets/js/apiGateway-js-sdk/lib/CryptoJS/components/hmac.js"></script>
<script type="text/javascript" src="/assets/js/apiGateway-js-sdk/lib/CryptoJS/components/enc-base64.js"></script>
<script type="text/javascript" src="/assets/js/apiGateway-js-sdk/lib/url-template/url-template.js"></script>
<script type="text/javascript" src="/assets/js/apiGateway-js-sdk/lib/apiGatewayCore/sigV4Client.js"></script>
<script type="text/javascript" src="/assets/js/apiGateway-js-sdk/lib/apiGatewayCore/apiGatewayClient.js"></script>
<script type="text/javascript" src="/assets/js/apiGateway-js-sdk/lib/apiGatewayCore/simpleHttpClient.js"></script>
<script type="text/javascript" src="/assets/js/apiGateway-js-sdk/lib/apiGatewayCore/utils.js"></script>
<script type="text/javascript" src="/assets/js/apiGateway-js-sdk/apigClient.js"></script>
<script src="/assets/js/publish.js"></script>