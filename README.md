# Kısa Bilgilendirme 

Proje basit bir contact list paneli şeklinde tasarlandı. 
  - Kullanıcı kayıt olabilir
  - Telefon numaralarını ekleyebilir
  - Silebilir
  - Güncelleyebilir
  - ve listeleyebilir.


# Proje dosyası ile ilgili izlenecek adımlar 

1- npm install ile moduller ve package-lock.json dosyası oluşturulur .
  - eğer projedeki modüllerde hata alırsak sırasıyla
    1- npm audit
    2- npm audit fix
    3- npm audit fix --force
   komutlarını girebilirsiniz.

2- sequelize için auto migration kullanacaktım fakat manuel olması gerekti bir kaç modul hatasından dolayı yapamadım vaktim olmadığı için üstünde durmadım

mysql kullandık localhost ve portumuz default değer olacak şekilde 
database name : contacts

# db düzenlememiz gereken dosyalar
	- src/kesys.js
	- config/config.js

# migariton işlemi için : 
  - "sequelize db:migrate" yazmanız yeterli.

# Contact Api's

//GET
'/'
'/add'
'/delete/:id'
'/edit/:id'

//POST
'/add'
'/edit/:id'


# Auth Api's

//GET
'/'
'/signIn'
'/signUp'
'/profile'
'/logout'


//POST
'/signIn'
'/signUp'
'/profile'
'/signUp'


# Kullanılan Modüller 

 "bcryptjs": "^2.4.3",
 "body-parser": "^1.19.0",
 "connect-flash": "^0.1.1",
 "express": "^4.17.1",
 "express-handlebars": "^5.2.0",
 "express-mysql-session": "^2.1.5",
 "express-session": "^1.17.1",
 "morgan": "^1.10.0",
 "mysql2": "^2.2.5",
 "nodemon": "^2.0.7",
 "passport": "^0.4.1",
 "passport-local": "^1.0.0",
 "sequelize": "^6.4.0",
 "timeago.js": "^4.0.2"


 # Çalıştırmak için 

 npm run dev 