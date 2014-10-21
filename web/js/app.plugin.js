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
function doLogin(){
	jQuery('body > *').hide()
	jQuery('body > .login').show()

	var $loginButton = jQuery('body > .login a.btn');
	var $loginStatus = jQuery('body > .login p.status');

	$loginButton.on('click', function() {
	    googleapi.authorize(options).done(function(data) {
	      	console.info('Access Token: ' + data.access_token);
            document.location='./index.html?token='+data.access_token
	    }).fail(function(data) {
	      	$loginStatus.html(data.error);
	    	});
		});
	}
// var options={
// 		...
//  	client_id: "SECRETO",
//  	...
// 		}
var googleapi = {
    authorize: function(options) {
        var deferred = jQuery.Deferred();

        //Build the OAuth consent page URL
        var authUrl = 'https://accounts.google.com/o/oauth2/auth?' + jQuery.param({
            client_id: options.client_id,
            redirect_uri: options.redirect_uri,
            response_type: 'code',
            scope: options.scope,
            access_type:'offline'
        });

        //Open the OAuth consent page in the InAppBrowser
        var authWindow = window.open(authUrl, '_blank', 'location=no,toolbar=no');

        //The recommendation is to use the redirect_uri "urn:ietf:wg:oauth:2.0:oob"
        //which sets the authorization code in the browser's title. However, we can't
        //access the title of the InAppBrowser.
        //
        //Instead, we pass a bogus redirect_uri of "http://localhost", which means the
        //authorization code will get set in the url. We can access the url in the
        //loadstart and loadstop events. So if we bind the loadstart event, we can
        //find the authorization code and close the InAppBrowser after the user
        //has granted us access to their data.
        authWindow.addEventListener('loadstart', function(e) {
            var url = e.url;
            var code = /\?code=(.+)$/.exec(url);
            var error = /\?error=(.+)$/.exec(url);

            if (code || error) {
                //Always close the browser when match is found
                authWindow.close();
            }

            if (code) {
                var codeNew=code[1];
                var n = codeNew.indexOf('&')
                codeNew = codeNew.substring(0, n != -1 ? n : codeNew.length)
                //Exchange the authorization code for an access token
                jQuery.post('https://accounts.google.com/o/oauth2/token', {
                    code:codeNew, //code: code[1],
                    client_id: options.client_id,
                    client_secret: options.client_secret,
                    redirect_uri: options.redirect_uri,
                    grant_type: 'authorization_code'
                }).done(function(data) {
                    deferred.resolve(data);
                }).fail(function(response) {
                    deferred.reject(response.responseJSON);
                });
            } else if (error) {
                //The user denied access to the app
                deferred.reject({
                    error: error[1]
                });
            }
        }, false);

        return deferred.promise();
    }
}
function getDataProfile(token){
        var term=null;
        jQuery.ajax({
               url:'https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token='+token,
               type:'GET',
               data:term,
               dataType:'json',
               error:function(jqXHR,text_status,strError){
               },
            success:function(data){
                   var item;

                   console.log(JSON.stringify(data));
                    // Save the userprofile data in your localStorage.
                   
                   return data
                   // localStorage.gmailLogin="true";
                   // localStorage.gmailID=data.id;
                   // localStorage.gmailEmail=data.email;
                   // localStorage.gmailFirstName=data.given_name;
                   // localStorage.gmailLastName=data.family_name;
                   // localStorage.gmailProfilePicture=data.picture;
                   // localStorage.gmailGender=data.gender;
                   }
               });
    // disconnectUser();
    }
function disconnectUser(token) {
    var revokeUrl = 'https://accounts.google.com/o/oauth2/revoke?token='+token;

    // Perform an asynchronous GET request.
    jQuery.ajax({
        type: 'GET',
        url: revokeUrl,
        async: false,
        contentType: "application/json",
        dataType: 'jsonp',
        success: function(nullResponse) {
          // Do something now that user is disconnected
          // The response is always undefined.
          accessToken=null;
          console.log(JSON.stringify(nullResponse));
          console.log("-----signed out..!!----"+token);
        },
    error: function(e) {
        // Handle the error
        // console.log(e);
        // You could point users to manually disconnect if unsuccessful
        // https://plus.google.com/apps
        }
        });
    }

//    cordova plugin add https://github.com/EddyVerbruggen/cordova-plugin-googleplus.git
//    NO FUNCIONA EL PLUGIN: https://github.com/EddyVerbruggen/cordova-plugin-googleplus/issues/5
// function doSilentLogin(){
// 	window.plugins.googleplus.trySilentLogin({
//       		'iOSApiKey': options.client_id
//     		},
//     	function (obj) {
//       		alert(JSON.stringify(obj)); // do something useful instead of alerting
//     		},
//     	function (msg) {
//       		alert('error silentlogin: ' + msg);
//     		}
// 		)
// 	}
// function doLogin(){
// 	window.plugins.googleplus.login({
// 	      	'iOSApiKey': options.client_id
// 	    	},
//     	function (obj) {
// 	      	alert(JSON.stringify(obj)); // do something useful instead of alerting
// 	  	  	},
// 	    function (msg) {
// 	     	alert('error: ' + msg);
// 		    }
// 		)
// 	}