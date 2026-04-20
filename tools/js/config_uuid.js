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
                url: "http://opensearch-prod-pudsmig.passport.local/app/data-explorer/discover?security_tenant=global#?_a=(discover:(columns:!(message,app,properties.uuid,http.request.uri,http.request.body,url,callsite,errcode,level),isDirty:!t,sort:!()),metadata:(indexPattern:f6641370-7753-11f0-8ccc-413df0814dca,view:discover))&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_q=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:app,negate:!f,params:(query:auth),type:phrase),query:(match_phrase:(app:auth))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:url,negate:!f,params:(query:registration%2Fstatus),type:phrase),query:(match_phrase:(url:registration%2Fstatus))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:properties.uuid,negate:!f,params:(query:'{userId}'),type:phrase),query:(match_phrase:(properties.uuid:'{userId}')))),query:(language:kuery,query:''))"
            },
            authorization: {
                name: "Авторизация",
                icon: "fas fa-fingerprint",
                gradient: "auth-group-btn",
                url: "http://opensearch-prod-pudsmig.passport.local/app/data-explorer/discover?security_tenant=global#?_a=(discover:(columns:!(message,app,properties.uuid,http.request.uri,http.request.body,url,callsite,errcode,level),isDirty:!t,sort:!()),metadata:(indexPattern:f6641370-7753-11f0-8ccc-413df0814dca,view:discover))&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_q=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:app,negate:!f,params:(query:auth),type:phrase),query:(match_phrase:(app:auth))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:url,negate:!f,params:!(auth%2Fauthorization,api%2FAuthCache),type:phrases,value:'auth%2Fauthorization,%20api%2FAuthCache'),query:(bool:(minimum_should_match:1,should:!((match_phrase:(url:auth%2Fauthorization)),(match_phrase:(url:api%2FAuthCache)))))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:properties.uuid,negate:!f,params:(query:'{userId}'),type:phrase),query:(match_phrase:(properties.uuid:'{userId}')))),query:(language:kuery,query:''))"
            },
            profile: {
                name: "Профиль",
                icon: "fas fa-user",
                gradient: "auth-group-btn",
                url: "http://opensearch-prod-pudsmig.passport.local/app/data-explorer/discover?security_tenant=global#?_a=(discover:(columns:!(message,app,properties.UserId,http.request.uri,http.request.body,url,callsite,errcode,level),isDirty:!t,sort:!()),metadata:(indexPattern:f6641370-7753-11f0-8ccc-413df0814dca,view:discover))&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_q=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:app,negate:!f,params:(query:cache-engine),type:phrase),query:(match_phrase:(app:cache-engine))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:properties.UserId,negate:!f,params:(query:'{userId}'),type:phrase),query:(match_phrase:(properties.UserId:'{userId}'))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:app,negate:!t,params:(query:notification-cache-engine),type:phrase),query:(match_phrase:(app:notification-cache-engine)))),query:(language:kuery,query:''))"
            },
            photo: {
                name: "Фото",
                icon: "fas fa-camera",
                gradient: "photo-btn",
                url: "http://opensearch-prod-pudsmig.passport.local/app/data-explorer/discover?security_tenant=global#?_a=(discover:(columns:!(message,app,properties.uuid,http.request.uri,http.request.body,url,callsite,errcode,level),isDirty:!t,sort:!()),metadata:(indexPattern:f6641370-7753-11f0-8ccc-413df0814dca,view:discover))&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_q=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:app,negate:!f,params:(query:photo),type:phrase),query:(match_phrase:(app:photo))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:url,negate:!f,params:(query:%2Fidentification),type:phrase),query:(match_phrase:(url:%2Fidentification))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:properties.uuid,negate:!f,params:(query:'{userId}'),type:phrase),query:(match_phrase:(properties.uuid:'{userId}'))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:url,negate:!t,params:(query:self%2Fidentification),type:phrase),query:(match_phrase:(url:self%2Fidentification)))),query:(language:kuery,query:''))"
            },
            photo2: {
                name: "Идентификация",
                icon: "fas fa-camera",
                gradient: "photo-btn",
                url: "http://opensearch-prod-pudsmig.passport.local/app/data-explorer/discover?security_tenant=global#?_a=(discover:(columns:!(message,app,properties.uuid,http.request.uri,http.request.body,url,callsite,errcode,level),isDirty:!t,sort:!()),metadata:(indexPattern:f6641370-7753-11f0-8ccc-413df0814dca,view:discover))&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_q=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:app,negate:!f,params:(query:photo),type:phrase),query:(match_phrase:(app:photo))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:url,negate:!f,params:(query:self%2Fidentification),type:phrase),query:(match_phrase:(url:self%2Fidentification)))),query:(language:kuery,query:'{userId}'))"
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
                url: "http://opensearch-prod-pudsmig.passport.local/app/data-explorer/discover?security_tenant=global#?_a=(discover:(columns:!(message,app,properties.UserId,http.request.uri,http.request.body,url,callsite,errcode,level),isDirty:!t,sort:!()),metadata:(indexPattern:f6641370-7753-11f0-8ccc-413df0814dca,view:discover))&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_q=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:app,negate:!f,params:(query:residence-engine),type:phrase),query:(match_phrase:(app:residence-engine))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:properties.UserId,negate:!f,params:(query:'{userId}'),type:phrase),query:(match_phrase:(properties.UserId:'{userId}')))),query:(language:kuery,query:''))"
            },
            residence3: {
                name: "Запись учета и МСО в БД и S3",
                icon: "fas fa-address-book",
                gradient: "mso-group-btn",
                url: "http://opensearch-prod-pudsmig.passport.local/app/data-explorer/discover?security_tenant=global#?_a=(discover:(columns:!(message,app,properties.UserId,http.request.uri,http.request.body,url,callsite,errcode,level),isDirty:!t,sort:!()),metadata:(indexPattern:f6641370-7753-11f0-8ccc-413df0814dca,view:discover))&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_q=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:app,negate:!f,params:(query:residence-recorder),type:phrase),query:(match_phrase:(app:residence-recorder))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:properties.UserId,negate:!f,params:(query:'{userId}'),type:phrase),query:(match_phrase:(properties.UserId:'{userId}')))),query:(language:kuery,query:''))"
            },
            phone: {
                name: "Телефон",
                icon: "fas fa-phone",
                gradient: "phone-group-btn",
                url: "http://opensearch-prod-pudsmig.passport.local/app/data-explorer/discover?security_tenant=global#?_a=(discover:(columns:!(message,app,properties.uuid,http.request.uri,http.request.body,url,callsite,errcode,level),isDirty:!t,sort:!()),metadata:(indexPattern:f6641370-7753-11f0-8ccc-413df0814dca,view:discover))&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_q=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:app,negate:!f,params:(query:phone-verification),type:phrase),query:(match_phrase:(app:phone-verification))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:app,negate:!t,params:(query:phone-verification-flow),type:phrase),query:(match_phrase:(app:phone-verification-flow))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:properties.uuid,negate:!f,params:(query:'{userId}'),type:phrase),query:(match_phrase:(properties.uuid:'{userId}')))),query:(language:kuery,query:''))"
            },
            notifications: {
                name: "Отправленные уведомления",
                icon: "fas fa-bell",
                gradient: "notification-btn",
                url: "http://opensearch-prod-pudsmig.passport.local/app/data-explorer/discover?security_tenant=global#?_a=(discover:(columns:!(message,app,properties.Uuid,http.request.uri,http.request.body,url,callsite,errcode,level),isDirty:!t,sort:!()),metadata:(indexPattern:f6641370-7753-11f0-8ccc-413df0814dca,view:discover))&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_q=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:app,negate:!f,params:!(push-dispatcher,notification-cache-engine),type:phrases,value:'push-dispatcher,%20notification-cache-engine'),query:(bool:(minimum_should_match:1,should:!((match_phrase:(app:push-dispatcher)),(match_phrase:(app:notification-cache-engine))))))),query:(language:kuery,query:'{userId}'))"
            },
            documents: {
                name: "Документы",
                icon: "fas fa-file-alt",
                gradient: "documents-btn",
                url: "http://opensearch-prod-pudsmig.passport.local/app/data-explorer/discover?security_tenant=global#?_a=(discover:(columns:!(message,app,properties.uuid,http.request.uri,http.request.body,url,callsite,errcode,level),isDirty:!t,sort:!()),metadata:(indexPattern:f6641370-7753-11f0-8ccc-413df0814dca,view:discover))&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_q=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:app,negate:!f,params:(query:data),type:phrase),query:(match_phrase:(app:data))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:url,negate:!f,params:(query:access%2Fdocuments),type:phrase),query:(match_phrase:(url:access%2Fdocuments))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:properties.uuid,negate:!f,params:(query:'{userId}'),type:phrase),query:(match_phrase:(properties.uuid:'{userId}')))),query:(language:kuery,query:'{userId}'))"
            },
            faq: {
                name: "FAQ",
                icon: "fas fa-question-circle",
                gradient: "faq-btn",
                url: "http://opensearch-prod-pudsmig.passport.local/app/data-explorer/discover?security_tenant=global#?_a=(discover:(columns:!(message,app,properties.uuid,http.request.uri,http.request.body,url,callsite,errcode,level),isDirty:!t,sort:!()),metadata:(indexPattern:f6641370-7753-11f0-8ccc-413df0814dca,view:discover))&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_q=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:app,negate:!f,params:(query:mobile-downstream),type:phrase),query:(match_phrase:(app:mobile-downstream))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:app,negate:!t,params:(query:mobile-downstream-open),type:phrase),query:(match_phrase:(app:mobile-downstream-open))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:properties.uuid,negate:!f,params:(query:'{userId}'),type:phrase),query:(match_phrase:(properties.uuid:'{userId}')))),query:(language:kuery,query:''))"
            },
            mig: {
                name: "Мигрант сервис",
                icon: "fas fa-person-walking-dashed-line-arrow-right",
                gradient: "migservice-btn",
                url: "http://opensearch-prod-pudsmig.passport.local/app/data-explorer/discover?security_tenant=global#?_a=(discover:(columns:!(message,app,properties.uuid,properties.Uuid,http.request.uri,http.request.body,url,callsite,errcode,level),isDirty:!t,sort:!()),metadata:(indexPattern:f6641370-7753-11f0-8ccc-413df0814dca,view:discover))&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_q=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:app,negate:!f,params:(query:migrant-service-auth),type:phrase),query:(match_phrase:(app:migrant-service-auth)))),query:(language:kuery,query:'{userId}'))"
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
                url: "http://opensearch-prod-pudsmig.passport.local/app/data-explorer/discover?security_tenant=global#?_a=(discover:(columns:!(resp_body,http.request.uri,request_body,x_signature,http.request.body,properties.UserId,response_status,x_client_version),isDirty:!t,sort:!()),metadata:(indexPattern:'05517cb0-7754-11f0-8ccc-413df0814dca',view:discover))&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_q=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'05517cb0-7754-11f0-8ccc-413df0814dca',key:request,negate:!f,params:(query:'POST%20%2Fmmc-proxy%2Fapi%2Fv2%2Fmmc%2Fadapter%2Fprofile%20HTTP%2F1.1'),type:phrase),query:(match_phrase:(request:'POST%20%2Fmmc-proxy%2Fapi%2Fv2%2Fmmc%2Fadapter%2Fprofile%20HTTP%2F1.1'))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'05517cb0-7754-11f0-8ccc-413df0814dca',key:x_clientId,negate:!f,params:(query:'{userId}'),type:phrase),query:(match_phrase:(x_clientId:'{userId}')))),query:(language:kuery,query:''))"
            },
            photo: {
                name: "Фото",
                icon: "fas fa-camera",
                gradient: "photo-btn",
                url: "http://opensearch-prod-pudsmig.passport.local/app/data-explorer/discover?security_tenant=global#?_a=(discover:(columns:!(resp_body,http.request.uri,request_body,x_signature,http.request.body,properties.UserId,response_status,x_client_version),isDirty:!t,sort:!()),metadata:(indexPattern:'05517cb0-7754-11f0-8ccc-413df0814dca',view:discover))&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_q=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'05517cb0-7754-11f0-8ccc-413df0814dca',key:request,negate:!f,params:!('POST%20%2Fphoto-fast-status%2Fapi%2Fidentification%2Fstatus%20HTTP%2F1.1','POST%20%2Fphoto-fast%2Fapi%2Ffast%2Fidentification%2F%20HTTP%2F1.1'),type:phrases,value:'POST%20%2Fphoto-fast-status%2Fapi%2Fidentification%2Fstatus%20HTTP%2F1.1,%20POST%20%2Fphoto-fast%2Fapi%2Ffast%2Fidentification%2F%20HTTP%2F1.1'),query:(bool:(minimum_should_match:1,should:!((match_phrase:(request:'POST%20%2Fphoto-fast-status%2Fapi%2Fidentification%2Fstatus%20HTTP%2F1.1')),(match_phrase:(request:'POST%20%2Fphoto-fast%2Fapi%2Ffast%2Fidentification%2F%20HTTP%2F1.1')))))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'05517cb0-7754-11f0-8ccc-413df0814dca',key:x_clientId,negate:!f,params:(query:'{userId}'),type:phrase),query:(match_phrase:(x_clientId:'{userId}')))),query:(language:kuery,query:''))"
            },
            residence: {
                name: "Учет",
                icon: "fas fa-address-book",
                gradient: "mso-group-btn",
                url: "http://opensearch-prod-pudsmig.passport.local/app/data-explorer/discover?security_tenant=global#?_a=(discover:(columns:!(resp_body,http.request.uri,request_body,x_signature,http.request.body,properties.UserId,response_status,x_client_version),isDirty:!t,sort:!()),metadata:(indexPattern:'05517cb0-7754-11f0-8ccc-413df0814dca',view:discover))&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_q=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'05517cb0-7754-11f0-8ccc-413df0814dca',key:request,negate:!f,params:(query:'POST%20%2Fresidence-mobile%2Fapi%2Fv3%2Fmobile%2Fresidence%2Fadd%20HTTP%2F1.1'),type:phrase),query:(match_phrase:(request:'POST%20%2Fresidence-mobile%2Fapi%2Fv3%2Fmobile%2Fresidence%2Fadd%20HTTP%2F1.1'))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'05517cb0-7754-11f0-8ccc-413df0814dca',key:x_clientId,negate:!f,params:(query:'{userId}'),type:phrase),query:(match_phrase:(x_clientId:'{userId}')))),query:(language:kuery,query:''))"
            },
            mso: {
                name: "МСО",
                icon: "fas fa-bed",
                gradient: "mso-group-btn",
                url: "http://opensearch-prod-pudsmig.passport.local/app/data-explorer/discover?security_tenant=global#?_a=(discover:(columns:!(resp_body,http.request.uri,request_body,x_signature,http.request.body,properties.UserId,response_status,x_client_version),isDirty:!t,sort:!()),metadata:(indexPattern:'05517cb0-7754-11f0-8ccc-413df0814dca',view:discover))&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_q=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'05517cb0-7754-11f0-8ccc-413df0814dca',key:request,negate:!f,params:(query:'POST%20%2Fresidence-mobile%2Fapi%2Fv3%2Fmobile%2Fresidence%2FsetAddress%20HTTP%2F1.1'),type:phrase),query:(match_phrase:(request:'POST%20%2Fresidence-mobile%2Fapi%2Fv3%2Fmobile%2Fresidence%2FsetAddress%20HTTP%2F1.1'))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'05517cb0-7754-11f0-8ccc-413df0814dca',key:x_clientId,negate:!f,params:(query:'{userId}'),type:phrase),query:(match_phrase:(x_clientId:'{userId}')))),query:(language:kuery,query:''))"
            },
            mso1: {
                name: "Остаток попыток при смене МСО",
                icon: "fas fa-bed",
                gradient: "mso-group-btn",
                url: "http://opensearch-prod-pudsmig.passport.local/app/data-explorer/discover?security_tenant=global#?_a=(discover:(columns:!(resp_body,http.request.uri,request_body,x_signature,http.request.body,properties.UserId,response_status,x_client_version),isDirty:!t,sort:!()),metadata:(indexPattern:'05517cb0-7754-11f0-8ccc-413df0814dca',view:discover))&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_q=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'05517cb0-7754-11f0-8ccc-413df0814dca',key:request,negate:!f,params:(query:'POST%20%2Fdata%2Fapi%2Fv1%2Faccess%2FchangeAddress%20HTTP%2F1.1'),type:phrase),query:(match_phrase:(request:'POST%20%2Fdata%2Fapi%2Fv1%2Faccess%2FchangeAddress%20HTTP%2F1.1'))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'05517cb0-7754-11f0-8ccc-413df0814dca',key:x_clientId,negate:!f,params:(query:'{userId}'),type:phrase),query:(match_phrase:(x_clientId:'{userId}')))),query:(language:kuery,query:''))"
            },
            geo: {
                name: "ГЕО",
                icon: "fas fa-map-marker-alt",
                gradient: "geo-group-btn",
                url: "http://opensearch-prod-pudsmig.passport.local/app/data-explorer/discover?security_tenant=global#?_a=(discover:(columns:!(resp_body,http.request.uri,request_body,x_signature,http.request.body,properties.UserId,response_status,x_client_version),isDirty:!t,sort:!()),metadata:(indexPattern:'05517cb0-7754-11f0-8ccc-413df0814dca',view:discover))&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_q=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'05517cb0-7754-11f0-8ccc-413df0814dca',key:request,negate:!f,params:(query:'POST%20%2Fmessages%2Fapi%2Fv3%2Fmobile%2Fmessages%20HTTP%2F1.1'),type:phrase),query:(match_phrase:(request:'POST%20%2Fmessages%2Fapi%2Fv3%2Fmobile%2Fmessages%20HTTP%2F1.1'))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'05517cb0-7754-11f0-8ccc-413df0814dca',key:x_clientId,negate:!f,params:(query:'{userId}'),type:phrase),query:(match_phrase:(x_clientId:'{userId}'))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'05517cb0-7754-11f0-8ccc-413df0814dca',key:request_body,negate:!f,params:(query:coords),type:phrase),query:(match_phrase:(request_body:coords))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'05517cb0-7754-11f0-8ccc-413df0814dca',key:request_body,negate:!t,params:!(TERMINATED,LOCATION_DISABLED,'%22lon%22:%20null','%22speed%22:%20null','%22lat%22:%20null'),type:phrases,value:'TERMINATED,%20LOCATION_DISABLED,%20%22lon%22:%20null,%20%22speed%22:%20null,%20%22lat%22:%20null'),query:(bool:(minimum_should_match:1,should:!((match_phrase:(request_body:TERMINATED)),(match_phrase:(request_body:LOCATION_DISABLED)),(match_phrase:(request_body:'%22lon%22:%20null')),(match_phrase:(request_body:'%22speed%22:%20null')),(match_phrase:(request_body:'%22lat%22:%20null'))))))),query:(language:kuery,query:''))"
            },
            phone: {
                name: "Запрос кода",
                icon: "fas fa-phone",
                gradient: "phone-group-btn",
                url: "http://opensearch-prod-pudsmig.passport.local/app/data-explorer/discover?security_tenant=global#?_a=(discover:(columns:!(resp_body,http.request.uri,request_body,x_signature,http.request.body,properties.UserId,response_status,x_client_version),isDirty:!t,sort:!()),metadata:(indexPattern:'05517cb0-7754-11f0-8ccc-413df0814dca',view:discover))&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_q=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'05517cb0-7754-11f0-8ccc-413df0814dca',key:request,negate:!f,params:(query:'POST%20%2Fphone-verification%2Fapi%2FVerification%2FSmsSend%20HTTP%2F1.1'),type:phrase),query:(match_phrase:(request:'POST%20%2Fphone-verification%2Fapi%2FVerification%2FSmsSend%20HTTP%2F1.1'))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'05517cb0-7754-11f0-8ccc-413df0814dca',key:x_clientId,negate:!f,params:(query:'{userId}'),type:phrase),query:(match_phrase:(x_clientId:'{userId}')))),query:(language:kuery,query:''))"
            },
            phone2: {
                name: "Отправка кода",
                icon: "fas fa-phone",
                gradient: "phone-group-btn",
                url: "http://opensearch-prod-pudsmig.passport.local/app/data-explorer/discover?security_tenant=global#?_a=(discover:(columns:!(resp_body,http.request.uri,request_body,x_signature,http.request.body,properties.UserId,response_status,x_client_version),isDirty:!t,sort:!()),metadata:(indexPattern:'05517cb0-7754-11f0-8ccc-413df0814dca',view:discover))&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_q=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'05517cb0-7754-11f0-8ccc-413df0814dca',key:request,negate:!f,params:(query:'POST%20%2Fphone-verification%2Fapi%2FVerification%2FSmsRequest%20HTTP%2F1.1'),type:phrase),query:(match_phrase:(request:'POST%20%2Fphone-verification%2Fapi%2FVerification%2FSmsRequest%20HTTP%2F1.1'))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'05517cb0-7754-11f0-8ccc-413df0814dca',key:x_clientId,negate:!f,params:(query:'{userId}'),type:phrase),query:(match_phrase:(x_clientId:'{userId}')))),query:(language:kuery,query:''))"
            },
            phone3: {
                name: "Проверка на блокировку",
                icon: "fas fa-phone",
                gradient: "phone-group-btn",
                url: "http://opensearch-prod-pudsmig.passport.local/app/data-explorer/discover?security_tenant=global#?_a=(discover:(columns:!(resp_body,http.request.uri,request_body,x_signature,http.request.body,properties.UserId,response_status,x_client_version),isDirty:!t,sort:!()),metadata:(indexPattern:'05517cb0-7754-11f0-8ccc-413df0814dca',view:discover))&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_q=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'05517cb0-7754-11f0-8ccc-413df0814dca',key:request,negate:!f,params:(query:'POST%20%2Fphone-verification%2Fapi%2FVerification%2FSmsResend%20HTTP%2F1.1'),type:phrase),query:(match_phrase:(request:'POST%20%2Fphone-verification%2Fapi%2FVerification%2FSmsResend%20HTTP%2F1.1'))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'05517cb0-7754-11f0-8ccc-413df0814dca',key:x_clientId,negate:!f,params:(query:'{userId}'),type:phrase),query:(match_phrase:(x_clientId:'{userId}')))),query:(language:kuery,query:''))"
            },
            notifications: {
                name: "Прочитанные уведомления",
                icon: "fas fa-bell",
                gradient: "notification-btn",
                url: "http://opensearch-prod-pudsmig.passport.local/app/data-explorer/discover?security_tenant=global#?_a=(discover:(columns:!(resp_body,http.request.uri,request_body,x_signature,http.request.body,properties.UserId,response_status,x_client_version),isDirty:!t,sort:!()),metadata:(indexPattern:'05517cb0-7754-11f0-8ccc-413df0814dca',view:discover))&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_q=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'05517cb0-7754-11f0-8ccc-413df0814dca',key:request,negate:!f,params:(query:'POST%20%2Fpush-dispatcher%2Fapi%2Fv2%2Fmobile%2Fpush%2Ffull%2Finfo%20HTTP%2F1.1'),type:phrase),query:(match_phrase:(request:'POST%20%2Fpush-dispatcher%2Fapi%2Fv2%2Fmobile%2Fpush%2Ffull%2Finfo%20HTTP%2F1.1'))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'05517cb0-7754-11f0-8ccc-413df0814dca',key:x_clientId,negate:!f,params:(query:'{userId}'),type:phrase),query:(match_phrase:(x_clientId:'{userId}')))),query:(language:kuery,query:''))"
            },
            documents: {
                name: "Просмотр документов",
                icon: "fas fa-file-alt",
                gradient: "documents-btn",
                url: "http://opensearch-prod-pudsmig.passport.local/app/data-explorer/discover?security_tenant=global#?_a=(discover:(columns:!(resp_body,http.request.uri,request_body,x_signature,http.request.body,properties.UserId,response_status,x_client_version),isDirty:!t,sort:!()),metadata:(indexPattern:'05517cb0-7754-11f0-8ccc-413df0814dca',view:discover))&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_q=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'05517cb0-7754-11f0-8ccc-413df0814dca',key:request,negate:!f,params:(query:'POST%20%2Fmmc-proxy%2Fapi%2Fv2%2Fmmc%2Fadapter%2Fprofile%20HTTP%2F1.1'),type:phrase),query:(match_phrase:(request:'POST%20%2Fmmc-proxy%2Fapi%2Fv2%2Fmmc%2Fadapter%2Fprofile%20HTTP%2F1.1'))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'05517cb0-7754-11f0-8ccc-413df0814dca',key:x_clientId,negate:!f,params:(query:'{userId}'),type:phrase),query:(match_phrase:(x_clientId:'{userId}')))),query:(language:kuery,query:''))"
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
                url: "http://opensearch-prod-pudsmig.passport.local/app/data-explorer/discover?security_tenant=global#?_a=(discover:(columns:!(message,app,properties.uuid,http.request.uri,http.request.body,url,callsite,errcode,level),isDirty:!t,sort:!()),metadata:(indexPattern:f6641370-7753-11f0-8ccc-413df0814dca,view:discover))&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_q=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:app,negate:!f,params:(query:mmc-adapter),type:phrase),query:(match_phrase:(app:mmc-adapter))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:query,negate:!f,type:custom,value:'%7B%22wildcard%22:%7B%22callsite.keyword%22:%7B%22value%22:%22*RegistrationService*%22%7D%7D%7D'),query:(wildcard:(callsite.keyword:(value:'*RegistrationService*')))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:properties.UserId,negate:!f,params:(query:'{userId}'),type:phrase),query:(match_phrase:(properties.UserId:'{userId}')))),query:(language:kuery,query:''))"
            },
            profile: {
                name: "Профиль",
                icon: "fas fa-user",
                gradient: "auth-group-btn",
                url: "http://opensearch-prod-pudsmig.passport.local/app/data-explorer/discover?security_tenant=global#?_a=(discover:(columns:!(message,app,properties.uuid,http.request.uri,http.request.body,url,callsite,errcode,level),isDirty:!t,sort:!()),metadata:(indexPattern:f6641370-7753-11f0-8ccc-413df0814dca,view:discover))&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_q=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:app,negate:!f,params:(query:mmc-adapter),type:phrase),query:(match_phrase:(app:mmc-adapter))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:query,negate:!f,type:custom,value:'%7B%22bool%22:%7B%22minimum_should_match%22:1,%22should%22:%5B%7B%22wildcard%22:%7B%22callsite.keyword%22:%22*IdentificationService.GetPhotoAsync%22%7D%7D,%7B%22wildcard%22:%7B%22callsite.keyword%22:%22*IdentificationService.ProcessAsync%22%7D%7D,%7B%22wildcard%22:%7B%22callsite.keyword%22:%22*AdapterApi.SendPhoto%22%7D%7D,%7B%22wildcard%22:%7B%22callsite.keyword%22:%22*IdentificationService.FallbackActionAsync%22%7D%7D,%7B%22wildcard%22:%7B%22callsite.keyword%22:%22*Registration.RegistrationService*%22%7D%7D,%7B%22wildcard%22:%7B%22callsite.keyword%22:%22*Identification.IdentificationService*%22%7D%7D%5D%7D%7D'),query:(bool:(minimum_should_match:1,should:!((wildcard:(callsite.keyword:'*IdentificationService.GetPhotoAsync')),(wildcard:(callsite.keyword:'*IdentificationService.ProcessAsync')),(wildcard:(callsite.keyword:'*AdapterApi.SendPhoto')),(wildcard:(callsite.keyword:'*IdentificationService.FallbackActionAsync')),(wildcard:(callsite.keyword:'*Registration.RegistrationService*')),(wildcard:(callsite.keyword:'*Identification.IdentificationService*')))))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:properties.UserId,negate:!f,params:(query:'{userId}'),type:phrase),query:(match_phrase:(properties.UserId:'{userId}')))),query:(language:kuery,query:''))"
            },
            photo: {
                name: "Ошибки фото",
                icon: "fas fa-camera",
                gradient: "photo-btn",
                url: "http://opensearch-prod-pudsmig.passport.local/app/data-explorer/discover?security_tenant=global#?_a=(discover:(columns:!(message,app,properties.UserId,http.request.uri,http.request.body,url,callsite,errcode,level),isDirty:!t,sort:!()),metadata:(indexPattern:f6641370-7753-11f0-8ccc-413df0814dca,view:discover))&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_q=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:app,negate:!f,params:(query:echd),type:phrase),query:(match_phrase:(app:echd))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:properties.UserId,negate:!f,params:(query:'{userId}'),type:phrase),query:(match_phrase:(properties.UserId:'{userId}')))),query:(language:kuery,query:''))"
            },
            residence: {
                name: "Учет и МСО",
                icon: "fas fa-address-book",
                gradient: "mso-group-btn",
                url: "http://opensearch-prod-pudsmig.passport.local/app/data-explorer/discover?security_tenant=global#?_a=(discover:(columns:!(message,app,properties.UserId,http.request.uri,http.request.body,url,callsite,errcode,level),isDirty:!t,sort:!()),metadata:(indexPattern:f6641370-7753-11f0-8ccc-413df0814dca,view:discover))&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_q=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:app,negate:!f,params:(query:mmc-adapter),type:phrase),query:(match_phrase:(app:mmc-adapter))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:query,negate:!f,type:custom,value:'%7B%22wildcard%22:%7B%22callsite.keyword%22:%7B%22value%22:%22*ResidenceService*%22%7D%7D%7D'),query:(wildcard:(callsite.keyword:(value:'*ResidenceService*')))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:properties.UserId,negate:!f,params:(query:'{userId}'),type:phrase),query:(match_phrase:(properties.UserId:'{userId}')))),query:(language:kuery,query:''))"
            },
            geo: {
                name: "ГЕО",
                icon: "fas fa-map-marker-alt",
                gradient: "geo-group-btn",
                url: "http://opensearch-prod-pudsmig.passport.local/app/data-explorer/discover?security_tenant=global#?_a=(discover:(columns:!(message,app,properties.UserId,http.request.uri,http.request.body,url,callsite,errcode,level),isDirty:!t,sort:!()),metadata:(indexPattern:f6641370-7753-11f0-8ccc-413df0814dca,view:discover))&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_q=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:app,negate:!f,params:(query:mmc-track),type:phrase),query:(match_phrase:(app:mmc-track))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:query,negate:!f,type:custom,value:'%7B%22wildcard%22:%7B%22callsite.keyword%22:%7B%22value%22:%22*TrackAsync%22%7D%7D%7D'),query:(wildcard:(callsite.keyword:(value:'*TrackAsync')))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:properties.UserId,negate:!f,params:(query:'{userId}'),type:phrase),query:(match_phrase:(properties.UserId:'{userId}')))),query:(language:kuery,query:''))"
            },
            phone: {
                name: "Привязка телефона",
                icon: "fas fa-phone",
                gradient: "phone-group-btn",
                url: "http://opensearch-prod-pudsmig.passport.local/app/data-explorer/discover?security_tenant=global#?_a=(discover:(columns:!(message,app,properties.UserId,http.request.uri,http.request.body,url,callsite,errcode,level),isDirty:!t,sort:!()),metadata:(indexPattern:f6641370-7753-11f0-8ccc-413df0814dca,view:discover))&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_q=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:app,negate:!f,params:(query:mmc-adapter),type:phrase),query:(match_phrase:(app:mmc-adapter))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:query,negate:!f,type:custom,value:'%7B%22wildcard%22:%7B%22callsite.keyword%22:%7B%22value%22:%22*MmcMobileVerificationService*%22%7D%7D%7D'),query:(wildcard:(callsite.keyword:(value:'*MmcMobileVerificationService*')))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:f6641370-7753-11f0-8ccc-413df0814dca,key:properties.UserId,negate:!f,params:(query:'{userId}'),type:phrase),query:(match_phrase:(properties.UserId:'{userId}')))),query:(language:kuery,query:''))"
            },
        },

        // Паспортные проверки
        passport: {
            registered: {
                name: "Паспорт зарегистрирован",
                url: "http://opensearch-prod-pudsmig.passport.local/app/data-explorer/discover?security_tenant=global#?_a=(discover:(columns:!(resp_body,http.request.uri,request_body,x_signature,http.request.body,properties.UserId,response_status,x_client_version,x_clientId),isDirty:!t,sort:!()),metadata:(indexPattern:'05517cb0-7754-11f0-8ccc-413df0814dca',view:discover))&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_q=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'05517cb0-7754-11f0-8ccc-413df0814dca',key:request,negate:!f,params:(query:'POST%20%2Fauth%2Fapi%2Fv2%2Fmobile%2Fregistration%2Fpassport%2Fstatus%20HTTP%2F1.1'),type:phrase),query:(match_phrase:(request:'POST%20%2Fauth%2Fapi%2Fv2%2Fmobile%2Fregistration%2Fpassport%2Fstatus%20HTTP%2F1.1')))),query:(language:kuery,query:{pasport}))"
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