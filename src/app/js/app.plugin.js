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
        return './prod.html#token='+data.access_token+'&expires='+expires+refresh_token
        },
    signIn:function() {
        console.log("signing in...")
        var $throbber=jQuery('.login .throbber')
        $throbber.show()
        gapi.auth.authorize({
                client_id: options.web.client_id,
                immediate: false,
                response_type: "token",
                scope: options.web.scope, 
                }, 
            function(data) {// callback
                console.log("done!", data);
                document.location.replace( googleWebApi.getURL(data) )
                }, 
            function(){
                $throbber.hide()
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
        jQuery.ajax({
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

        gapi.auth.signOut()
        }
    }
//  cordova plugin add https://github.com/EddyVerbruggen/cordova-plugin-googleplus.git
var nativeApi={
    doSilentLogin:function (fnOK, fnKO){
        fnOK=fnOK || function (obj){nativeApi.loginOK(obj)}
        fnKO=fnKO || function (msg){nativeApi.prepareLogin()}
        
    	window.plugins.googleplus.trySilentLogin({
          		'iOSApiKey': options.installed.client_id
                // there is no API key for Android; you app is wired to the Google+ API by listing your package name in the google dev console and signing your apk (which you have done in chapter 4)
        		},
        	fnOK,
        	fnKO
    		)
    	},
    loginOK:function(obj){
        jQuery('.login > section').fadeOut()
        var url='./prod.html#nativo=1'+
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

        $throbber.show()
    	window.plugins.googleplus.login({
    	      	'iOSApiKey': options.installed.client_id
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