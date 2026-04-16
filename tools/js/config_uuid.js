// Конфигурация URL-шаблонов для UUID Tools

const UUID_CONFIG = {
    // URL-шаблоны для проверок
    urlTemplates: {
        // Сервисы приложения (Бэкенд)
        appServices: {
            registration: {
                name: "Регистрация",
                icon: "fas fa-user-plus",
                gradient: "auth-group-btn",
                url: "http://opensearch-prod-pudsmig.passport.local/app/data-explorer/discover?security_tenant=global#?_a=(discover:(columns:!(message,app,http.request.uri,http.request.body,properties.UserId,callsite,errcode,level,url),isDirty:!t,sort:!()),metadata:(indexPattern:f6641370-7753-11f0-8ccc-413df0814dca,view:discover))&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_q=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:app,negate:!f,params:(query:auth),type:phrase),query:(match_phrase:(app:auth))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:app,negate:!t,params:!(echd-auth-integration,auth-cache),type:phrases,value:'echd-auth-integration,%20auth-cache'),query:(bool:(minimum_should_match:1,should:!((match_phrase:(app:echd-auth-integration)),(match_phrase:(app:auth-cache)))))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:url,negate:!f,params:(query:registration%2Fstatus),type:phrase),query:(match_phrase:(url:registration%2Fstatus))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:properties.uuid,negate:!f,params:(query:'{userId}'),type:phrase),query:(match_phrase:(properties.uuid:'{userId}')))),query:(language:kuery,query:''))"
            },
            authorization: {
                name: "Авторизация",
                icon: "fas fa-fingerprint",
                gradient: "auth-group-btn",
                url: "http://opensearch-prod-pudsmig.passport.local/app/data-explorer/discover?security_tenant=global#?_a=(discover:(columns:!(message,app,http.request.uri,http.request.body,properties.UserId,callsite,errcode,level,url),isDirty:!t,sort:!()),metadata:(indexPattern:f6641370-7753-11f0-8ccc-413df0814dca,view:discover))&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_q=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:app,negate:!f,params:(query:auth),type:phrase),query:(match_phrase:(app:auth))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:app,negate:!t,params:!(echd-auth-integration,auth-cache),type:phrases,value:'echd-auth-integration,%20auth-cache'),query:(bool:(minimum_should_match:1,should:!((match_phrase:(app:echd-auth-integration)),(match_phrase:(app:auth-cache)))))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:url,negate:!f,params:(query:auth%2Fauthorization),type:phrase),query:(match_phrase:(url:auth%2Fauthorization))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:properties.uuid,negate:!f,params:(query:'{userId}'),type:phrase),query:(match_phrase:(properties.uuid:'{userId}')))),query:(language:kuery,query:''))"
            },
            profile: {
                name: "Профиль",
                icon: "fas fa-user",
                gradient: "auth-group-btn",
                url: "http://opensearch-prod-pudsmig.passport.local/app/data-explorer/discover?security_tenant=global#?_a=(discover:(columns:!(message,app,properties.UserId,level),isDirty:!t,sort:!()),metadata:(indexPattern:f6641370-7753-11f0-8ccc-413df0814dca,view:discover))&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_q=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:app,negate:!f,params:(query:cache-engine),type:phrase),query:(match_phrase:(app:cache-engine))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:properties.UserId,negate:!f,params:(query:'{userId}'),type:phrase),query:(match_phrase:(properties.UserId:'{userId}'))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:app,negate:!t,params:(query:notification-cache-engine),type:phrase),query:(match_phrase:(app:notification-cache-engine)))),query:(language:kuery,query:''))"
            },
            photo: {
                name: "Фото",
                icon: "fas fa-camera",
                gradient: "photo-btn",
                url: "http://opensearch-prod-pudsmig.passport.local/app/data-explorer/discover?security_tenant=global#?_a=(discover:(columns:!(message,app,properties.uuid,http.request.uri,http.request.body,callsite,errcode,level),isDirty:!t,sort:!()),metadata:(indexPattern:f6641370-7753-11f0-8ccc-413df0814dca,view:discover))&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_q=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:app,negate:!f,params:(query:photo),type:phrase),query:(match_phrase:(app:photo))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:url,negate:!f,params:!(photo%2Fidentification),type:phrases,value:photo%2Fidentification),query:(bool:(minimum_should_match:1,should:!((match_phrase:(url:photo%2Fidentification)))))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:properties.uuid,negate:!f,params:(query:'{userId}'),type:phrase),query:(match_phrase:(properties.uuid:'{userId}')))),query:(language:kuery,query:''))"
            },
            photo2: {
                name: "Идентификация",
                icon: "fas fa-camera",
                gradient: "photo-btn",
                url: "http://opensearch-prod-pudsmig.passport.local/app/data-explorer/discover?security_tenant=global#?_a=(discover:(columns:!(message,properties.uuid,app,http.request.uri,http.request.body,callsite,errcode,level),isDirty:!t,sort:!()),metadata:(indexPattern:f6641370-7753-11f0-8ccc-413df0814dca,view:discover))&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_q=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:app,negate:!f,params:(query:photo),type:phrase),query:(match_phrase:(app:photo))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:url,negate:!f,params:!(self%2Fidentification),type:phrases,value:self%2Fidentification),query:(bool:(minimum_should_match:1,should:!((match_phrase:(url:self%2Fidentification)))))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:properties.uuid,negate:!f,params:(query:'{userId}'),type:phrase),query:(match_phrase:(properties.uuid:'{userId}')))),query:(language:kuery,query:''))"
            },
            residence: {
                name: "Статус учета и МСО",
                icon: "fas fa-address-book",
                gradient: "mso-group-btn",
                url: "http://opensearch-prod-pudsmig.passport.local/app/data-explorer/discover?security_tenant=global#?_a=(discover:(columns:!(http.request.body,http.response.status_code),isDirty:!t,sort:!()),metadata:(indexPattern:'409c1530-76e3-11f0-92fe-999019c9b28f',view:discover))&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_q=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'409c1530-76e3-11f0-92fe-999019c9b28f',key:http.request.uri,negate:!f,params:(query:%2Fmmc-adapter%2Fapi%2Fmmc%2Fadapter%2Fresidence-reply),type:phrase),query:(match_phrase:(http.request.uri:%2Fmmc-adapter%2Fapi%2Fmmc%2Fadapter%2Fresidence-reply))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'409c1530-76e3-11f0-92fe-999019c9b28f',key:http.request.body,negate:!f,params:(query:'{userId}'),type:phrase),query:(match_phrase:(http.request.body:'{userId}')))),query:(language:kuery,query:''))"
            },
            residence2: {
                name: "Ошибка при учете и МСО",
                icon: "fas fa-address-book",
                gradient: "mso-group-btn",
                url: "http://opensearch-prod-pudsmig.passport.local/app/data-explorer/discover?security_tenant=global#?_a=(discover:(columns:!(message,app,http.request.uri,http.request.body,properties.UserId,callsite,errcode,level,url),isDirty:!t,sort:!()),metadata:(indexPattern:f6641370-7753-11f0-8ccc-413df0814dca,view:discover))&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_q=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:app,negate:!f,params:(query:residence-engine),type:phrase),query:(match_phrase:(app:residence-engine))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:properties.UserId,negate:!f,params:(query:'{userId}'),type:phrase),query:(match_phrase:(properties.UserId:'{userId}')))),query:(language:kuery,query:''))"
            },
            residence3: {
                name: "Запись учета и МСО в БД и S3",
                icon: "fas fa-address-book",
                gradient: "mso-group-btn",
                url: "http://opensearch-prod-pudsmig.passport.local/app/data-explorer/discover?security_tenant=global#?_a=(discover:(columns:!(message,app,http.request.uri,http.request.body,properties.UserId,callsite,errcode,level,url),isDirty:!t,sort:!()),metadata:(indexPattern:f6641370-7753-11f0-8ccc-413df0814dca,view:discover))&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_q=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:app,negate:!f,params:(query:residence-recorder),type:phrase),query:(match_phrase:(app:residence-recorder))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:properties.UserId,negate:!f,params:(query:'{userId}'),type:phrase),query:(match_phrase:(properties.UserId:'{userId}')))),query:(language:kuery,query:''))"
            },
            mso: {
                name: "Остаток попыток при смене МСО",
                icon: "fas fa-bed",
                gradient: "mso-group-btn",
                url: "http://opensearch-prod-pudsmig.passport.local/app/data-explorer/discover?security_tenant=global#?_a=(discover:(columns:!(resp_body,request_body,x_signature,http.request.uri,response_status,x_clientId,http.request.body,properties.UserId,x_client_version),isDirty:!t,sort:!()),metadata:(indexPattern:'05517cb0-7754-11f0-8ccc-413df0814dca',view:discover))&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_q=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'05517cb0-7754-11f0-8ccc-413df0814dca',key:request,negate:!f,params:(query:'POST%20%2Fdata%2Fapi%2Fv1%2Faccess%2FchangeAddress%20HTTP%2F1.1'),type:phrase),query:(match_phrase:(request:'POST%20%2Fdata%2Fapi%2Fv1%2Faccess%2FchangeAddress%20HTTP%2F1.1'))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'05517cb0-7754-11f0-8ccc-413df0814dca',key:x_clientId,negate:!f,params:(query:'{userId}'),type:phrase),query:(match_phrase:(x_clientId:'{userId}')))),query:(language:kuery,query:''))"
            },
            phone: {
                name: "Телефон",
                icon: "fas fa-phone",
                gradient: "phone-group-btn",
                url: "http://opensearch-prod-pudsmig.passport.local/app/data-explorer/discover?security_tenant=global#?_a=(discover:(columns:!(message,app,http.request.uri,http.request.body,properties.UserId,callsite,errcode,level),isDirty:!t,sort:!()),metadata:(indexPattern:f6641370-7753-11f0-8ccc-413df0814dca,view:discover))&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_q=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:app,negate:!f,params:(query:phone-verification),type:phrase),query:(match_phrase:(app:phone-verification))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:app,negate:!t,params:(query:phone-verification-flow),type:phrase),query:(match_phrase:(app:phone-verification-flow))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:properties.uuid,negate:!f,params:(query:'{userId}'),type:phrase),query:(match_phrase:(properties.uuid:'{userId}')))),query:(language:kuery,query:''))"
            },
            notifications: {
                name: "Отправленные уведомления",
                icon: "fas fa-bell",
                gradient: "notification-btn",
                url: "http://opensearch-prod-pudsmig.passport.local/app/data-explorer/discover?security_tenant=global#?_a=(discover:(columns:!(message,app,http.request.uri,http.request.body,properties.Uuid,callsite,errcode,level),isDirty:!t,sort:!()),metadata:(indexPattern:f6641370-7753-11f0-8ccc-413df0814dca,view:discover))&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_q=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:app,negate:!f,params:!(notification-cache-engine,push-dispatcher),type:phrases,value:'notification-cache-engine,%20push-dispatcher'),query:(bool:(minimum_should_match:1,should:!((match_phrase:(app:notification-cache-engine)),(match_phrase:(app:push-dispatcher)))))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:properties.Uuid,negate:!f,params:(query:'{userId}'),type:phrase),query:(match_phrase:(properties.Uuid:'{userId}')))),query:(language:kuery,query:''))"
            },
            documents: {
                name: "Документы",
                icon: "fas fa-file-alt",
                gradient: "documents-btn",
                url: "http://opensearch-prod-pudsmig.passport.local/app/data-explorer/discover?security_tenant=global#?_a=(discover:(columns:!(message,app,http.request.uri,http.request.body,properties.uuid,callsite,errcode,level),isDirty:!t,sort:!()),metadata:(indexPattern:f6641370-7753-11f0-8ccc-413df0814dca,view:discover))&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_q=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:app,negate:!f,params:(query:data),type:phrase),query:(match_phrase:(app:data))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:url,negate:!f,params:(query:access%2Fdocuments),type:phrase),query:(match_phrase:(url:access%2Fdocuments))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:properties.uuid,negate:!f,params:(query:'{userId}'),type:phrase),query:(match_phrase:(properties.uuid:'{userId}')))),query:(language:kuery,query:''))"
            },
            faq: {
                name: "FAQ",
                icon: "fas fa-question-circle",
                gradient: "faq-btn",
                url: "http://opensearch-prod-pudsmig.passport.local/app/data-explorer/discover?security_tenant=global#?_a=(discover:(columns:!(message,app,http.request.uri,http.request.body,properties.uuid,callsite,errcode,level),isDirty:!t,sort:!()),metadata:(indexPattern:f6641370-7753-11f0-8ccc-413df0814dca,view:discover))&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_q=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:app,negate:!f,params:(query:mobile-downstream),type:phrase),query:(match_phrase:(app:mobile-downstream))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:app,negate:!t,params:(query:mobile-downstream-open),type:phrase),query:(match_phrase:(app:mobile-downstream-open))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:properties.uuid,negate:!f,params:(query:'{userId}'),type:phrase),query:(match_phrase:(properties.uuid:'{userId}')))),query:(language:kuery,query:''))"
            },
            mig: {
                name: "Мигрант сервис",
                icon: "fas fa-person-walking-dashed-line-arrow-right",
                gradient: "migservice-btn",
                url: "http://opensearch-prod-pudsmig.passport.local/app/data-explorer/discover?security_tenant=global#?_a=(discover:(columns:!(message,app,http.request.uri,http.request.body,properties.uuid,callsite,errcode,level),isDirty:!t,sort:!()),metadata:(indexPattern:f6641370-7753-11f0-8ccc-413df0814dca,view:discover))&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_q=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:app,negate:!f,params:(query:mobile-downstream),type:phrase),query:(match_phrase:(app:mobile-downstream))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:app,negate:!t,params:(query:mobile-downstream-open),type:phrase),query:(match_phrase:(app:mobile-downstream-open))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:properties.uuid,negate:!f,params:(query:'{userId}'),type:phrase),query:(match_phrase:(properties.uuid:'{userId}')))),query:(language:kuery,query:''))"
            }
        },

        // Запросы от мобильного приложения (Фронтенд)
        requestsMobileApp: {
            registration: {
                name: "Регистрация",
                icon: "fas fa-user-plus",
                gradient: "auth-group-btn",
                url: "http://opensearch-prod-pudsmig.passport.local/app/data-explorer/discover?security_tenant=global#?_a=(discover:(columns:!(resp_body,http.request.uri,request_body,x_signature,http.request.body,properties.UserId,response_status,x_client_version),isDirty:!t,sort:!()),metadata:(indexPattern:'05517cb0-7754-11f0-8ccc-413df0814dca',view:discover))&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_q=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'05517cb0-7754-11f0-8ccc-413df0814dca',key:request,negate:!f,params:(query:'POST%20%2Fauth%2Fapi%2Fv2%2Fmobile%2Fregistration%2Fstatus%20HTTP%2F1.1'),type:phrase),query:(match_phrase:(request:'POST%20%2Fauth%2Fapi%2Fv2%2Fmobile%2Fregistration%2Fstatus%20HTTP%2F1.1'))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'05517cb0-7754-11f0-8ccc-413df0814dca',key:x_clientId,negate:!f,params:(query:'{userId}'),type:phrase),query:(match_phrase:(x_clientId:'{userId}')))),query:(language:kuery,query:''))"
            },
            authorization: {
                name: "Авторизация",
                icon: "fas fa-fingerprint",
                gradient: "auth-group-btn",
                url: "http://opensearch-prod-pudsmig.passport.local/app/data-explorer/discover?security_tenant=global#?_a=(discover:(columns:!(resp_body,http.request.uri,request_body,x_signature,http.request.body,properties.UserId,response_status,x_client_version),isDirty:!t,sort:!()),metadata:(indexPattern:'05517cb0-7754-11f0-8ccc-413df0814dca',view:discover))&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_q=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'05517cb0-7754-11f0-8ccc-413df0814dca',key:request,negate:!f,params:(query:'POST%20%2Fauth%2Fapi%2Fv2%2Fmobile%2Fauth%2Fauthorization%20HTTP%2F1.1'),type:phrase),query:(match_phrase:(request:'POST%20%2Fauth%2Fapi%2Fv2%2Fmobile%2Fauth%2Fauthorization%20HTTP%2F1.1'))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'05517cb0-7754-11f0-8ccc-413df0814dca',key:x_clientId,negate:!f,params:(query:'{userId}'),type:phrase),query:(match_phrase:(x_clientId:'{userId}')))),query:(language:kuery,query:''))"
            },
            profile: {
                name: "Профиль",
                icon: "fas fa-user",
                gradient: "auth-group-btn",
                url: "http://opensearch-prod-pudsmig.passport.local/app/data-explorer/discover?security_tenant=global#?_a=(discover:(columns:!(resp_body,http.request.uri,request_body,x_signature,http.request.body,properties.UserId,response_status,x_clientId,x_client_version),isDirty:!t,sort:!()),metadata:(indexPattern:'05517cb0-7754-11f0-8ccc-413df0814dca',view:discover))&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_q=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'05517cb0-7754-11f0-8ccc-413df0814dca',key:request,negate:!f,params:(query:'POST%20%2Fmmc-proxy%2Fapi%2Fv2%2Fmmc%2Fadapter%2Fprofile%20HTTP%2F1.1'),type:phrase),query:(match_phrase:(request:'POST%20%2Fmmc-proxy%2Fapi%2Fv2%2Fmmc%2Fadapter%2Fprofile%20HTTP%2F1.1'))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'05517cb0-7754-11f0-8ccc-413df0814dca',key:x_clientId,negate:!f,params:(query:'{userId}'),type:phrase),query:(match_phrase:(x_clientId:'{userId}')))),query:(language:kuery,query:''))"
            },
            residence: {
                name: "Учет",
                icon: "fas fa-address-book",
                gradient: "mso-group-btn",
                url: "http://opensearch-prod-pudsmig.passport.local/app/data-explorer/discover?security_tenant=global#?_a=(discover:(columns:!(resp_body,request_body,x_signature,http.request.uri,response_status,x_clientId,http.request.body,properties.UserId,x_client_version),isDirty:!t,sort:!()),metadata:(indexPattern:'05517cb0-7754-11f0-8ccc-413df0814dca',view:discover))&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_q=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'05517cb0-7754-11f0-8ccc-413df0814dca',key:request,negate:!f,params:(query:'POST%20%2Fresidence-mobile%2Fapi%2Fv3%2Fmobile%2Fresidence%2Fadd%20HTTP%2F1.1'),type:phrase),query:(match_phrase:(request:'POST%20%2Fresidence-mobile%2Fapi%2Fv3%2Fmobile%2Fresidence%2Fadd%20HTTP%2F1.1'))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'05517cb0-7754-11f0-8ccc-413df0814dca',key:x_clientId,negate:!f,params:(query:'{userId}'),type:phrase),query:(match_phrase:(x_clientId:'{userId}')))),query:(language:kuery,query:''))"
            },
            mso: {
                name: "МСО",
                icon: "fas fa-bed",
                gradient: "mso-group-btn",
                url: "http://opensearch-prod-pudsmig.passport.local/app/data-explorer/discover?security_tenant=global#?_a=(discover:(columns:!(resp_body,request_body,x_signature,http.request.uri,response_status,x_clientId,http.request.body,properties.UserId,x_client_version),isDirty:!t,sort:!()),metadata:(indexPattern:'05517cb0-7754-11f0-8ccc-413df0814dca',view:discover))&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_q=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'05517cb0-7754-11f0-8ccc-413df0814dca',key:request,negate:!f,params:(query:'POST%20%2Fresidence-mobile%2Fapi%2Fv3%2Fmobile%2Fresidence%2FsetAddress%20HTTP%2F1.1'),type:phrase),query:(match_phrase:(request:'POST%20%2Fresidence-mobile%2Fapi%2Fv3%2Fmobile%2Fresidence%2FsetAddress%20HTTP%2F1.1'))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'05517cb0-7754-11f0-8ccc-413df0814dca',key:x_clientId,negate:!f,params:(query:'{userId}'),type:phrase),query:(match_phrase:(x_clientId:'{userId}')))),query:(language:kuery,query:''))"
            },
            geo: {
                name: "ГЕО",
                icon: "fas fa-map-marker-alt",
                gradient: "geo-group-btn",
                url: "http://opensearch-prod-pudsmig.passport.local/app/data-explorer/discover?security_tenant=global#?_a=(discover:(columns:!(resp_body,http.request.uri,request_body,x_signature,http.request.body,properties.UserId,response_status,x_client_version,x_clientId),isDirty:!t,sort:!()),metadata:(indexPattern:'05517cb0-7754-11f0-8ccc-413df0814dca',view:discover))&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_q=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'05517cb0-7754-11f0-8ccc-413df0814dca',key:request,negate:!f,params:(query:'POST%20%2Fmessages%2Fapi%2Fv3%2Fmobile%2Fmessages%20HTTP%2F1.1'),type:phrase),query:(match_phrase:(request:'POST%20%2Fmessages%2Fapi%2Fv3%2Fmobile%2Fmessages%20HTTP%2F1.1'))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'05517cb0-7754-11f0-8ccc-413df0814dca',key:x_clientId,negate:!f,params:(query:'{userId}'),type:phrase),query:(match_phrase:(x_clientId:'{userId}'))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'05517cb0-7754-11f0-8ccc-413df0814dca',key:request_body,negate:!f,params:(query:coords),type:phrase),query:(match_phrase:(request_body:coords))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'05517cb0-7754-11f0-8ccc-413df0814dca',key:request_body,negate:!t,params:!(TERMINATED,LOCATION_DISABLED,'%22lon%22:%20null','%22speed%22:%20null','%22lat%22:%20null'),type:phrases,value:'TERMINATED,%20LOCATION_DISABLED,%20%22lon%22:%20null,%20%22speed%22:%20null,%20%22lat%22:%20null'),query:(bool:(minimum_should_match:1,should:!((match_phrase:(request_body:TERMINATED)),(match_phrase:(request_body:LOCATION_DISABLED)),(match_phrase:(request_body:'%22lon%22:%20null')),(match_phrase:(request_body:'%22speed%22:%20null')),(match_phrase:(request_body:'%22lat%22:%20null'))))))),query:(language:kuery,query:''))"
            },
            phone: {
                name: "Запрос кода",
                icon: "fas fa-phone",
                gradient: "phone-group-btn",
                url: "http://opensearch-prod-pudsmig.passport.local/app/data-explorer/discover?security_tenant=global#?_a=(discover:(columns:!(resp_body,http.request.uri,request_body,x_signature,http.request.body,properties.UserId,response_status,x_clientId,x_client_version),isDirty:!t,sort:!()),metadata:(indexPattern:'05517cb0-7754-11f0-8ccc-413df0814dca',view:discover))&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_q=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'05517cb0-7754-11f0-8ccc-413df0814dca',key:request,negate:!f,params:(query:'POST%20%2Fphone-verification%2Fapi%2FVerification%2FSmsSend%20HTTP%2F1.1'),type:phrase),query:(match_phrase:(request:'POST%20%2Fphone-verification%2Fapi%2FVerification%2FSmsSend%20HTTP%2F1.1'))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'05517cb0-7754-11f0-8ccc-413df0814dca',key:x_clientId,negate:!f,params:(query:'{userId}'),type:phrase),query:(match_phrase:(x_clientId:'{userId}')))),query:(language:kuery,query:''))"
            },
            phone2: {
                name: "Отправка кода",
                icon: "fas fa-phone",
                gradient: "phone-group-btn",
                url: "http://opensearch-prod-pudsmig.passport.local/app/data-explorer/discover?security_tenant=global#?_a=(discover:(columns:!(resp_body,http.request.uri,request_body,http.request.body,properties.UserId,x_signature,response_status,x_clientId,x_client_version),isDirty:!t,sort:!()),metadata:(indexPattern:'05517cb0-7754-11f0-8ccc-413df0814dca',view:discover))&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_q=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'05517cb0-7754-11f0-8ccc-413df0814dca',key:request,negate:!f,params:(query:'POST%20%2Fphone-verification%2Fapi%2FVerification%2FSmsRequest%20HTTP%2F1.1'),type:phrase),query:(match_phrase:(request:'POST%20%2Fphone-verification%2Fapi%2FVerification%2FSmsRequest%20HTTP%2F1.1'))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'05517cb0-7754-11f0-8ccc-413df0814dca',key:x_clientId,negate:!f,params:(query:'{userId}'),type:phrase),query:(match_phrase:(x_clientId:'{userId}')))),query:(language:kuery,query:''))"
            },
            phone3: {
                name: "Проверка на блокировку",
                icon: "fas fa-phone",
                gradient: "phone-group-btn",
                url: "http://opensearch-prod-pudsmig.passport.local/app/data-explorer/discover?security_tenant=global#?_a=(discover:(columns:!(resp_body,http.request.uri,request_body,http.request.body,properties.UserId,x_signature,response_status,x_clientId,x_client_version),isDirty:!t,sort:!()),metadata:(indexPattern:'05517cb0-7754-11f0-8ccc-413df0814dca',view:discover))&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_q=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'05517cb0-7754-11f0-8ccc-413df0814dca',key:request,negate:!f,params:(query:'POST%20%2Fphone-verification%2Fapi%2FVerification%2FSmsResend%20HTTP%2F1.1'),type:phrase),query:(match_phrase:(request:'POST%20%2Fphone-verification%2Fapi%2FVerification%2FSmsResend%20HTTP%2F1.1'))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'05517cb0-7754-11f0-8ccc-413df0814dca',key:x_clientId,negate:!f,params:(query:'{userId}'),type:phrase),query:(match_phrase:(x_clientId:'{userId}')))),query:(language:kuery,query:''))"
            },
            notifications: {
                name: "Прочитанные уведомления",
                icon: "fas fa-bell",
                gradient: "notification-btn",
                url: "http://opensearch-prod-pudsmig.passport.local/app/data-explorer/discover?security_tenant=global#?_a=(discover:(columns:!(resp_body,request_body,http.request.uri,x_signature,response_status,x_clientId,http.request.body,properties.UserId,x_client_version),isDirty:!t,sort:!()),metadata:(indexPattern:'05517cb0-7754-11f0-8ccc-413df0814dca',view:discover))&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_q=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'05517cb0-7754-11f0-8ccc-413df0814dca',key:request,negate:!f,params:(query:'POST%20%2Fpush-dispatcher%2Fapi%2Fv2%2Fmobile%2Fpush%2Ffull%2Finfo%20HTTP%2F1.1'),type:phrase),query:(match_phrase:(request:'POST%20%2Fpush-dispatcher%2Fapi%2Fv2%2Fmobile%2Fpush%2Ffull%2Finfo%20HTTP%2F1.1'))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'05517cb0-7754-11f0-8ccc-413df0814dca',key:x_clientId,negate:!f,params:(query:'{userId}'),type:phrase),query:(match_phrase:(x_clientId:'{userId}')))),query:(language:kuery,query:''))"
            },
            documents: {
                name: "Просмотр документов",
                icon: "fas fa-file-alt",
                gradient: "documents-btn",
                url: "http://opensearch-prod-pudsmig.passport.local/app/data-explorer/discover?security_tenant=global#?_a=(discover:(columns:!(resp_body,http.request.uri,request_body,x_signature,http.request.body,properties.UserId,response_status,x_clientId,x_client_version),isDirty:!t,sort:!()),metadata:(indexPattern:'05517cb0-7754-11f0-8ccc-413df0814dca',view:discover))&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_q=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'05517cb0-7754-11f0-8ccc-413df0814dca',key:request,negate:!f,params:(query:'POST%20%2Fmmc-proxy%2Fapi%2Fv2%2Fmmc%2Fadapter%2Fprofile%20HTTP%2F1.1'),type:phrase),query:(match_phrase:(request:'POST%20%2Fmmc-proxy%2Fapi%2Fv2%2Fmmc%2Fadapter%2Fprofile%20HTTP%2F1.1'))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'05517cb0-7754-11f0-8ccc-413df0814dca',key:x_clientId,negate:!f,params:(query:'{userId}'),type:phrase),query:(match_phrase:(x_clientId:'{userId}')))),query:(language:kuery,query:''))"
            },
            faq: {
                name: "FAQ",
                icon: "fas fa-question-circle",
                gradient: "faq-btn",
                url: "http://opensearch-prod-pudsmig.passport.local/app/data-explorer/discover?security_tenant=global#?_a=(discover:(columns:!(resp_body,http.request.uri,request_body,x_signature,http.request.body,properties.UserId,response_status,x_client_version),isDirty:!t,sort:!()),metadata:(indexPattern:'05517cb0-7754-11f0-8ccc-413df0814dca',view:discover))&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_q=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'05517cb0-7754-11f0-8ccc-413df0814dca',key:request,negate:!f,params:(query:'POST%20%2Fmobile-downstream%2Fapi%2Fv2%2Fmobile%2Fdata%2Fsearch%20HTTP%2F1.1'),type:phrase),query:(match_phrase:(request:'POST%20%2Fmobile-downstream%2Fapi%2Fv2%2Fmobile%2Fdata%2Fsearch%20HTTP%2F1.1'))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'05517cb0-7754-11f0-8ccc-413df0814dca',key:request_body,negate:!f,params:(query:'messageType%22:%22faq%22'),type:phrase),query:(match_phrase:(request_body:'messageType%22:%22faq%22'))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'05517cb0-7754-11f0-8ccc-413df0814dca',key:x_clientId,negate:!f,params:(query:'{userId}'),type:phrase),query:(match_phrase:(x_clientId:'{userId}')))),query:(language:kuery,query:''))"
            },
            mig: {
                name: "Мигрант сервис",
                icon: "fas fa-person-walking-dashed-line-arrow-right",
                gradient: "migservice-btn",
                url: "http://opensearch-prod-pudsmig.passport.local/app/data-explorer/discover?security_tenant=global#?_a=(discover:(columns:!(resp_body,http.request.uri,request_body,x_signature,http.request.body,properties.UserId,response_status,x_client_version),isDirty:!t,sort:!()),metadata:(indexPattern:'05517cb0-7754-11f0-8ccc-413df0814dca',view:discover))&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_q=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'05517cb0-7754-11f0-8ccc-413df0814dca',key:request,negate:!f,params:!('POST%20%2Fmigrant-service-auth%2Fapi%2FAuth%2Fsign-in%20HTTP%2F1.1','POST%20%2Fmigrant-service-auth%2Fapi%2FAuth%2Frefresh%20HTTP%2F1.1'),type:phrases,value:'POST%20%2Fmigrant-service-auth%2Fapi%2FAuth%2Fsign-in%20HTTP%2F1.1,%20POST%20%2Fmigrant-service-auth%2Fapi%2FAuth%2Frefresh%20HTTP%2F1.1'),query:(bool:(minimum_should_match:1,should:!((match_phrase:(request:'POST%20%2Fmigrant-service-auth%2Fapi%2FAuth%2Fsign-in%20HTTP%2F1.1')),(match_phrase:(request:'POST%20%2Fmigrant-service-auth%2Fapi%2FAuth%2Frefresh%20HTTP%2F1.1')))))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'05517cb0-7754-11f0-8ccc-413df0814dca',key:x_clientId,negate:!f,params:(query:'{userId}'),type:phrase),query:(match_phrase:(x_clientId:'{userId}')))),query:(language:kuery,query:''))"
            }
        },

        // Сервисы ММЦ Адаптера (Внешний сервис)
        mmcServices: {
            registration: {
                name: "Регистрация",
                icon: "fas fa-user-plus",
                gradient: "auth-group-btn",
                url: "http://opensearch-prod-pudsmig.passport.local/app/data-explorer/discover?security_tenant=global#?_a=(discover:(columns:!(message,app,properties.UserId,level,callsite),isDirty:!t,sort:!()),metadata:(indexPattern:f6641370-7753-11f0-8ccc-413df0814dca,view:discover))&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_q=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:app,negate:!f,params:(query:mmc-adapter),type:phrase),query:(match_phrase:(app:mmc-adapter))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:query,negate:!f,type:custom,value:'%7B%22wildcard%22:%7B%22callsite.keyword%22:%7B%22value%22:%22*RegistrationService*%22%7D%7D%7D'),query:(wildcard:(callsite.keyword:(value:'*RegistrationService*')))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:properties.UserId,negate:!f,params:(query:'{userId}'),type:phrase),query:(match_phrase:(properties.UserId:'{userId}')))),query:(language:kuery,query:''))"
            },
            profile: {
                name: "Профиль",
                icon: "fas fa-user",
                gradient: "auth-group-btn",
                url: "http://opensearch-prod-pudsmig.passport.local/app/data-explorer/discover?security_tenant=global#?_a=(discover:(columns:!(message,app,properties.UserId,level),isDirty:!t,sort:!()),metadata:(indexPattern:f6641370-7753-11f0-8ccc-413df0814dca,view:discover))&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_q=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:app,negate:!f,params:(query:mmc-adapter),type:phrase),query:(match_phrase:(app:mmc-adapter))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:query,negate:!f,type:custom,value:'%7B%22bool%22:%7B%22minimum_should_match%22:1,%22should%22:%5B%7B%22wildcard%22:%7B%22callsite.keyword%22:%22*IdentificationService.GetPhotoAsync%22%7D%7D,%7B%22wildcard%22:%7B%22callsite.keyword%22:%22*IdentificationService.ProcessAsync%22%7D%7D,%7B%22wildcard%22:%7B%22callsite.keyword%22:%22*AdapterApi.SendPhoto%22%7D%7D,%7B%22wildcard%22:%7B%22callsite.keyword%22:%22*IdentificationService.FallbackActionAsync%22%7D%7D%5D%7D%7D'),query:(bool:(minimum_should_match:1,should:!((wildcard:(callsite.keyword:'*IdentificationService.GetPhotoAsync')),(wildcard:(callsite.keyword:'*IdentificationService.ProcessAsync')),(wildcard:(callsite.keyword:'*AdapterApi.SendPhoto')),(wildcard:(callsite.keyword:'*IdentificationService.FallbackActionAsync')))))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:properties.UserId,negate:!f,params:(query:'{userId}'),type:phrase),query:(match_phrase:(properties.UserId:'{userId}')))),query:(language:kuery,query:''))"
            },
            photo: {
                name: "Фото",
                icon: "fas fa-camera",
                gradient: "photo-btn",
                url: "http://opensearch-prod-pudsmig.passport.local/app/data-explorer/discover?security_tenant=global#?_a=(discover:(columns:!(message,app,http.request.uri,http.request.body,properties.UserId,callsite,errcode,level),isDirty:!t,sort:!()),metadata:(indexPattern:f6641370-7753-11f0-8ccc-413df0814dca,view:discover))&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_q=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:app,negate:!f,params:(query:echd),type:phrase),query:(match_phrase:(app:echd))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:properties.UserId,negate:!f,params:(query:'{userId}'),type:phrase),query:(match_phrase:(properties.UserId:'{userId}')))),query:(language:kuery,query:''))"
            },
            residence: {
                name: "Учет и МСО",
                icon: "fas fa-address-book",
                gradient: "mso-group-btn",
                url: "http://opensearch-prod-pudsmig.passport.local/app/data-explorer/discover?security_tenant=global#?_a=(discover:(columns:!(message,app,callsite,properties.UserId,level),isDirty:!t,sort:!()),metadata:(indexPattern:f6641370-7753-11f0-8ccc-413df0814dca,view:discover))&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_q=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:app,negate:!f,params:(query:mmc-adapter),type:phrase),query:(match_phrase:(app:mmc-adapter))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:query,negate:!f,type:custom,value:'%7B%22wildcard%22:%7B%22callsite.keyword%22:%7B%22value%22:%22*ResidenceService*%22%7D%7D%7D'),query:(wildcard:(callsite.keyword:(value:'*ResidenceService*')))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:properties.UserId,negate:!f,params:(query:'{userId}'),type:phrase),query:(match_phrase:(properties.UserId:'{userId}')))),query:(language:kuery,query:''))"
            },
            geo: {
                name: "ГЕО",
                icon: "fas fa-map-marker-alt",
                gradient: "geo-group-btn",
                url: "http://opensearch-prod-pudsmig.passport.local/app/data-explorer/discover?security_tenant=global#?_a=(discover:(columns:!(message,app,properties.UserId),isDirty:!t,sort:!()),metadata:(indexPattern:f6641370-7753-11f0-8ccc-413df0814dca,view:discover))&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_q=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:app,negate:!f,params:(query:mmc-track),type:phrase),query:(match_phrase:(app:mmc-track))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:message,negate:!f,params:!('Track%20sending%20error','Track%20sent%20to%20MMC'),type:phrases,value:'Track%20sending%20error,%20Track%20sent%20to%20MMC'),query:(bool:(minimum_should_match:1,should:!((match_phrase:(message:'Track%20sending%20error')),(match_phrase:(message:'Track%20sent%20to%20MMC')))))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:properties.UserId,negate:!f,params:(query:'{userId}'),type:phrase),query:(match_phrase:(properties.UserId:'{userId}')))),query:(language:kuery,query:''))"
            },
            phone: {
                name: "Привязка телефона",
                icon: "fas fa-phone",
                gradient: "phone-group-btn",
                url: "http://opensearch-prod-pudsmig.passport.local/app/data-explorer/discover?security_tenant=global#?_a=(discover:(columns:!(message,app,properties.UserId,level,callsite),isDirty:!t,sort:!()),metadata:(indexPattern:f6641370-7753-11f0-8ccc-413df0814dca,view:discover))&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_q=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:app,negate:!f,params:(query:mmc-adapter),type:phrase),query:(match_phrase:(app:mmc-adapter))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:query,negate:!f,type:custom,value:'%7B%22wildcard%22:%7B%22callsite.keyword%22:%7B%22value%22:%22*MmcMobileVerificationService*%22%7D%7D%7D'),query:(wildcard:(callsite.keyword:(value:'*MmcMobileVerificationService*')))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:properties.UserId,negate:!f,params:(query:'{userId}'),type:phrase),query:(match_phrase:(properties.UserId:'{userId}')))),query:(language:kuery,query:''))"
            },
        },

        // Паспортные проверки
        passport: {
            registered: {
                name: "Паспорт зарегистрирован",
                url: "http://opensearch-prod-pudsmig.passport.local/app/data-explorer/discover?security_tenant=global#?_a=(discover:(columns:!(http.request.uri,http.request.body,http.response.status_code),isDirty:!t,sort:!()),metadata:(indexPattern:'409c1530-76e3-11f0-92fe-999019c9b28f',view:discover))&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_q=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'409c1530-76e3-11f0-92fe-999019c9b28f',key:http.request.uri,negate:!f,params:(query:%2Fauth%2Fapi%2Fv2%2Fmobile%2Fregistration%2Fpassport%2Fstatus),type:phrase),query:(match_phrase:(http.request.uri:%2Fauth%2Fapi%2Fv2%2Fmobile%2Fregistration%2Fpassport%2Fstatus))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'409c1530-76e3-11f0-92fe-999019c9b28f',key:http.response.status_code,negate:!f,params:(query:200),type:phrase),query:(match_phrase:(http.response.status_code:200))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'409c1530-76e3-11f0-92fe-999019c9b28f',key:http.request.body,negate:!f,params:(query:'%22doc%22:%22{pasport}%22'),type:phrase),query:(match_phrase:(http.request.body:'%22doc%22:%22{pasport}%22')))),query:(language:kuery,query:''))"
            },
            profile: {
                name: "Найти профиль по паспорту",
                url: "http://opensearch-prod-pudsmig.passport.local/app/data-explorer/discover?security_tenant=global#?_a=(discover:(columns:!(resp_body,http.request.uri,request_body,x_signature,http.request.body,properties.UserId,response_status,x_client_version,x_clientId),isDirty:!t,sort:!()),metadata:(indexPattern:'05517cb0-7754-11f0-8ccc-413df0814dca',view:discover))&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_q=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'05517cb0-7754-11f0-8ccc-413df0814dca',key:request,negate:!f,params:(query:'POST%20%2Fmmc-proxy%2Fapi%2Fv2%2Fmmc%2Fadapter%2Fprofile%20HTTP%2F1.1'),type:phrase),query:(match_phrase:(request:'POST%20%2Fmmc-proxy%2Fapi%2Fv2%2Fmmc%2Fadapter%2Fprofile%20HTTP%2F1.1'))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'05517cb0-7754-11f0-8ccc-413df0814dca',key:resp_body,negate:!f,params:(query:'%22number%22:%22{pasport}%22'),type:phrase),query:(match_phrase:(resp_body:'%22number%22:%22{pasport}%22')))),query:(language:kuery,query:''))"
            },
            missing: {
                name: "Паспорт отсутствует",
                url: "http://opensearch-prod-pudsmig.passport.local/app/data-explorer/discover?security_tenant=global#?_a=(discover:(columns:!(message,app,properties.UserId),isDirty:!t,sort:!()),metadata:(indexPattern:f6641370-7753-11f0-8ccc-413df0814dca,view:discover))&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_q=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:app,negate:!f,params:(query:mmc-adapter),type:phrase),query:(match_phrase:(app:mmc-adapter))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:message,negate:!f,params:(query:'getting%20uuid'),type:phrase),query:(match_phrase:(message:'getting%20uuid'))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:message,negate:!f,params:(query:{pasport}),type:phrase),query:(match_phrase:(message:{pasport})))),query:(language:kuery,query:''))"
            }
        },

        // Поиск по КИГ
        kig: {
            search: {
                name: "Поиск по КИГ",
                url: "http://opensearch-prod-pudsmig.passport.local/app/data-explorer/discover?security_tenant=global#?_a=(discover:(columns:!(x_clientId,http.request.uri,http.request.body,properties.UserId),isDirty:!t,sort:!()),metadata:(indexPattern:'05517cb0-7754-11f0-8ccc-413df0814dca',view:discover))&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-3M,to:now))&_q=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'05517cb0-7754-11f0-8ccc-413df0814dca',key:resp_body,negate:!f,params:(query:{kig}),type:phrase),query:(match_phrase:(resp_body:{kig})))),query:(language:kuery,query:''))"
            }
        }
    },

    // Настройки вкладок
    tabs: [
        {
            id: 'uuid',
            name: 'Работа с UUID',
            icon: 'fas fa-fingerprint',
            active: true
        },
        {
            id: 'kig',
            name: 'Поиск по КИГ',
            icon: 'fas fa-id-card'
        },
        {
            id: 'passport',
            name: 'Проверка паспорта',
            icon: 'fas fa-passport'
        },
        {
            id: 'utc',
            name: 'UTC время',
            icon: 'fas fa-clock'
        }
    ]
};