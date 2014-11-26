var authWindow=null

!function (jQuery) {

  jQuery(function(){
	// slim-scroll
	jQuery('.no-touch .slim-scroll').each(function(){
		var $self = jQuery(this), $data = $self.data(), $slimResize;
		$self.slimScroll($data);
		jQuery(window).resize(function(e) {
			clearTimeout($slimResize);
			$slimResize = setTimeout(function(){$self.slimScroll($data);}, 500);
		});

    jQuery(document).on('updateNav', function(){
      $self.slimScroll($data);
    });
	});

  });
}(window.jQuery);
////

// var googleMobileApi = {
//     authorize: function() {
//         var deferred = jQuery.Deferred();

//         //Build the OAuth consent page URL
//         var authUrl = 'https://accounts.google.com/o/oauth2/auth?' + jQuery.param({
//             client_id:    options.web.client_id,
//             redirect_uri: options.web.redirect_uri,
//             response_type:'code',
//             scope:        options.web.scope,
//             access_type:'offline'
//         });

//         //Open the OAuth consent page in the InAppBrowser
//         authWindow = window.open(authUrl, '_blank', 'location=no,toolbar=no');

//         //The recommendation is to use the redirect_uri "urn:ietf:wg:oauth:2.0:oob"
//         //which sets the authorization code in the browser's title. However, we can't
//         //access the title of the InAppBrowser.
//         //
//         //Instead, we pass a bogus redirect_uri of "http://localhost", which means the
//         //authorization code will get set in the url. We can access the url in the
//         //loadstart and loadstop events. So if we bind the loadstart event, we can
//         //find the authorization code and close the InAppBrowser after the user
//         //has granted us access to their data.
//         authWindow.addEventListener('loadstart', function(e) {
//             var url = e.url;
//             var code = /\?code=(.+)$/.exec(url);
//             var error = /\?error=(.+)$/.exec(url);

//             if (code || error) {
//                 //Always close the browser when match is found
//                 authWindow.close();
//             }

//             if (code) {
//                 var codeNew=code[1];
//                 var n = codeNew.indexOf('&')
//                 codeNew = codeNew.substring(0, n != -1 ? n : codeNew.length)
//                 //Exchange the authorization code for an access token
//                 jQuery.post('https://accounts.google.com/o/oauth2/token', {
//                     code:codeNew, //code: code[1],
//                     client_id:     options.web.client_id,
//                     client_secret: options.web.client_secret,
//                     redirect_uri:  options.web.redirect_uri,
//                     grant_type:    'authorization_code'
//                 }).done(function(data) {
//                     deferred.resolve(data);
//                 }).fail(function(response) {
//                     deferred.reject(response.responseJSON);
//                 });
//             } else if (error) {
//                 //The user denied access to the app
//                 deferred.reject({
//                     error: error[1]
//                 });
//             }
//         }, false);

//         return deferred.promise();
//         },
//     getURL:function(data){
//         var expires
//         // if (data.expires_at)
//         //     expires=data.expires_at
//         // else
//             expires=new Date().getTime()+(data.expires_in*1000)
          
//         var refresh_token=data.refresh_token?'&refresh_token='+data.refresh_token:''
//         return './prod.html?token='+data.access_token+'&expires='+expires+refresh_token
//         },
//     prepareTokenRefresh:function(refresh_token){
//       var $loginStatus = jQuery('.login p.status');
//       googleMobileApi.tokenRefresh(refresh_token).done(function(data) {
//               document.location.replace( googleMobileApi.getURL(data) )
//               })
//           .fail(function(data) {
//               if (data) console.log(data.error);
//               googleMobileApi.prepareLogin()
//               })
//         },
//     //tokenRefresh no funciona
//     // tokenRefresh: function(refresh_token){
//     //     if (refresh_token[0]=='"')
//     //       refresh_token=refresh_token.substring(1, refresh_token.length-1)

//     //     var deferred = $.Deferred()
//     //     $.post('https://accounts.google.com/o/oauth2/token', {
//     //         refresh_token: refresh_token,
//     //         client_id: options.web.client_email,
//     //         client_secret: options.web.client_secret,
//     //         // access_type:'offline', -> Parameter not allowed for this message type: access_type
//     //         grant_type: 'refresh_token'
//     //         })
//     //     .done(function(data) {
//     //         deferred.resolve(data)
//     //         })
//     //     .fail(function(response) {
//     //         deferred.reject(response.responseJSON);
//     //         // localStorage.removeItem('tapp37_yanoshavisitado')
//     //         localStorage.removeItem('tapp37_refresh_token')
//     //         })
//     //     return deferred.promise()
//     //     },
//     prepareLogin:function(){
//         jQuery('.login > section').show()

//         var $loginButton = jQuery('.login a.btn-mobile')
//         var $loginStatus = jQuery('.login p.status')
//         var $throbber=jQuery('.login .throbber')

//         $loginStatus
//             .html('<i class="fa fa-asterisk"></i> Sin registro previo, sólo necesitamos saber tu correo electrónico y otra información básica')
//             .addClass('sinRegistroPrevio')

//         $loginButton.fadeIn()
//         $throbber.hide()

//         $loginButton.on('click', function() {
//             $loginButton.hide()
//             $throbber.fadeIn()
//             googleMobileApi.authorize().done(function(data) {
//                 // console.info('Access Token: ' + data.access_token);
//                 document.location.replace( googleMobileApi.getURL(data) )
//             }).fail(function(data) {
//                 $loginButton.fadeIn()
//                 $throbber.hide()
//                 $loginStatus.removeClass('sinRegistroPrevio').html(data.error);
//                 localStorage.removeItem('tapp37_yanoshavisitado')
//               })
//           })
//         },
//     silentLogin:function(){
//         googleMobileApi.authorize().done(function(data) {
//                 // console.info('Access Token: ' + data.access_token);
//                 document.location.replace( googleMobileApi.getURL(data) )
//             })
//         },
//     // getDataProfile:function(token, fnCallBack){
//     //     //funciona, pero ahora lo hacemos en el servidor
//     //     var term=null;
//     //     jQuery.ajax({
//     //            url:'https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token='+token,
//     //            type:'GET',
//     //            data:term,
//     //            dataType:'json',
//     //            error:function(jqXHR,text_status,strError){
//     //            },
//     //         success:function(data){
//     //                var item;
//     //                fnCallBack(data)
//     //                }
//     //            });
//     //     },
//     disconnectUser:function (token) {
//       var revokeUrl = 'https://accounts.google.com/o/oauth2/revoke?token='+token;

//       // Perform an asynchronous GET request.
//       jQuery.ajax({
//             type: 'GET',
//             url: revokeUrl,
//             async: false,
//             contentType: "application/json",
//             dataType: 'jsonp',
//             success: function(nullResponse) {
//               // Do something now that user is disconnected
//               // The response is always undefined.
//               accessToken=null;
//               console.log(JSON.stringify(nullResponse));
//               console.log("-----signed out..!!----"+token);
//             },
//             error: function(e) {
//                 // Handle the error
//                 // console.log(e);
//                 // You could point users to manually disconnect if unsuccessful
//                 // https://plus.google.com/apps
//                 }
//                 });
//       }
// }

var googleWebApi={
    prepareLogin:function(){
        var btn=jQuery('.btn-web').show()
        btn.find('.g-signin').attr('data-clientid', options.web.client_id)

        var $throbber=jQuery('.login .throbber')
        var $loginStatus = jQuery('.login p.status')
        var $img=jQuery('.login .screens')

        $throbber.hide()
        $img.show()
        $loginStatus
            .html('<i class="fa fa-asterisk"></i> Sin registro previo, sólo necesitamos saber tu correo electrónico y otra información básica')
            .addClass('sinRegistroPrevio')
        },
    getURL:function(data){
        var expires
        // if (data.expires_at)
        //     expires=data.expires_at
        // else
            expires=new Date().getTime()+(data.expires_in*1000)
        var refresh_token=data.refresh_token?'&refresh_token='+data.refresh_token:''
        return './prod.html?token='+data.access_token+'&expires='+expires+refresh_token
        },
    signIn:function() {
        console.log("signing in...");
        gapi.auth.authorize({
              client_id: options.web.client_id,
              immediate: false,
              response_type: "token",
              scope: options.web.scope, //["https://www.googleapis.com/auth/plus.login"],

              //request_visible_actions: "https://schemas.google.com/AddActivity"
              }, 
          function(data) {// callback
              console.log("done!", data);
              document.location.replace( googleWebApi.getURL(data) )
              })
        },
    signinCallback:function(authResult){
        if (authResult['access_token']) {
            // Autorizado correctamente
            // Oculta el botón de inicio de sesión ahora que el usuario está autorizado, por ejemplo:
            document.getElementById('signinButton').setAttribute('style', 'display: none');
            } 
        else if (authResult['error']) {
            // Se ha producido un error.
            // Posibles códigos de error:
            //   "access_denied": el usuario ha denegado el acceso a la aplicación.
            //   "immediate_failed": no se ha podido dar acceso al usuario de forma automática.
            console.log('There was an error: ' + authResult['error']);
            $loginStatus.removeClass('sinRegistroPrevio').html( authResult['error'] )
            }
        },
    disconnectUser:function(access_token) {
        var revokeUrl = 'https://accounts.google.com/o/oauth2/revoke?token=' +
        access_token;

        // Realiza una solicitud GET asíncrona.
        $.ajax({
            type: 'GET',
            url: revokeUrl,
            async: false,
            contentType: "application/json",
            dataType: 'jsonp',
            success: function(nullResponse) {
              // Lleva a cabo una acción ahora que el usuario está desconectado
              // La respuesta siempre está indefinida.
            },
          error: function(e) {
              // Gestiona el error
              // console.log(e);
              // Puedes indicar a los usuarios que se desconecten de forma manual si se produce un error
              // https://plus.google.com/apps
              }
          })
        }
    }


//    cordova plugin add https://github.com/EddyVerbruggen/cordova-plugin-googleplus.git
//    NO FUNCIONA EL PLUGIN: https://github.com/EddyVerbruggen/cordova-plugin-googleplus/issues/5
var nativeApi={
    doSilentLogin:function (){
    	window.plugins.googleplus.trySilentLogin({
          		//'iOSApiKey': options.installed.client_id
                // there is no API key for Android; you app is wired to the Google+ API by listing your package name in the google dev console and signing your apk (which you have done in chapter 4)
        		},
        	function (obj) {
          		nativeApi.loginOK(obj)
        		},
        	function (msg) {
                nativeApi.prepareLogin()
        		}
    		)
    	},
    loginOK:function(obj){
        jQuery('.login > section').fadeOut()
        var url='./prod.html?nativo=1'+
                            '&picture='+obj.imageUrl.split('?')[0]+
                            '&email='+obj.email+
                            '&given_name='+obj.givenName+
                            '&family_name='+obj.familyName
        document.location.replace(url)
        },
    doLogin:function(){
        var $loginButton = jQuery('.login a.btn-native')
        var $loginStatus = jQuery('.login p.status')
        var $throbber=jQuery('.login .throbber')

    	window.plugins.googleplus.login({
    	      	// 'iOSApiKey': options.installed.client_id
                // there is no API key for Android; you app is wired to the Google+ API by listing your package name in the google dev console and signing your apk (which you have done in chapter 4)
    	    	},
        	function (obj) {
    	      	nativeApi.loginOK(obj)
    	  	  	},
    	    function (msg) {
                $throbber.hide()
                if (msg!='user cancelled')
                    $loginStatus.removeClass('sinRegistroPrevio').html(msg);
                localStorage.removeItem('tapp37_yanoshavisitado')
    		    }
    		)
    	},
    prepareLogin:function(){
        jQuery('.login > section').show()

        var $loginButton = jQuery('.login a.btn-native')
        var $loginStatus = jQuery('.login p.status')
        var $throbber=jQuery('.login .throbber')
        var $img=jQuery('.login .screens')

        $loginStatus
            .html('<i class="fa fa-asterisk"></i> Sin registro previo, sólo necesitamos saber tu correo electrónico y otra información básica')
            .addClass('sinRegistroPrevio')

        $loginButton.fadeIn()
        $img.show()
        $throbber.hide()
        },
    }