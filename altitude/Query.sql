 --! CRUD
 --? C - Create - შექმნა
 --? R - Read - წაკითხვა
 --? U - Update - განახლება
 --? D - Delete - წაშლა
 --! MySQL
 --? Create == INSERT == შექმნა
 --? Read == SELECT == წაკითხვა
 --? Update == UPDATE == განახლება
 --? Delete == DELETE == წაშლა
 --! DATA Structure
 --? DataBase -> Tables -> (COL - ROW)
 --? DataBase -> Collection -> Document
--? utf8mb4_unicode_ci  T != t
--? utf8mb4_general_ci T == t
--todo: https://www.youtube.com/watch?v=ZS_kXvOeQ5Y
--todo: https://www.youtube.com/watch?v=QwevGzVu_zk
--* articles
--? articles-id TYPE -> NUMERIC -> INT (OPTIONS -> PRIMARY, Auto_Increment)
--? articles-title TYPE -> STRING -> VARCHAR (100)
--? articles-description TYPE -> STRING -> TEXT
--? articles-poster TYPE -> STRING -> VARCHAR (50)
--? articles-author TYPE -> STRING -> VARCHAR (50)
--? articles-category TYPE -> STRING -> VARCHAR (50)
--? articles-puplished TYPE -> ENUM -> 'yes', 'no'
--? articles-date TYPE -> DATA -> DD-MM-YY

--* https://www.javatpoint.com/sql-tutorial
--* https://www.mysqltutorial.org/
--* https://www.geeksforgeeks.org/sql-tutorial/
--* http://old.code.mu/sql/

--! EN https://www.youtube.com/watch?v=7S_tz1z_5bA
--! RU https://www.youtube.com/watch?v=UtOobJjygtE&list=PLM7wFzahDYnFRgw8G9UYOEdrS6SNSPhNW

--todo: Add Content
--? SELECT * FROM `users`
--? SELECT `id`, `first_name`, `last_name`, `email`, `gender`, `country`, `city`, `age` FROM `users`

--! პირობა WHERE 
--? SELECT * FROM `users` WHERE `col_name` = 'value'
SELECT * FROM `users` WHERE `id` = 10
SELECT * FROM `users` WHERE `first_name` = 'Ermanno'
--! && === AND
--! || === OR
SELECT * FROM `users` WHERE `gender` = 'female' && `age` > 20
SELECT * FROM `users` WHERE `country` = 'Netherlands' || `country` = 'Portugal'
SELECT * FROM `users` 
                    WHERE (`country` = 'Netherlands' || `country` = 'Portugal') 
                    && `gender` = 'female'
--! პირობის დაჯგუფება ( პირობა1 || პირობა 2 || პირობა3 ) && პირობა
SELECT * FROM `users` 
                    WHERE (`country` = 'China' || `country` = 'Portugal')
                    &&  (`age` > 5 && `age` < 60)


--! true ( (false || true) && ( true && true ) )

SELECT * FROM `users` 
                WHERE (`gender` = `Male` && `country` = `China`) 
                    || 
                (`gender` = `Female` && `country` = `France`)
SELECT * FROM `users`
                WHERE (`country` = 'China' && `age` > 20)
SELECT * FROM `users`
                WHERE (`country` = 'China' && `gender` = 'Female'
                 && `age` > 20 
                 && `age` < 40) || (`country` = 'China' && `gender` = 'Male'
                 && `age` > 20 
                 && `age` < 50)

SELECT * FROM `users`
                WHERE `country` = 'russia' && `gender` = 'Male' && `age` > 20 && `age` < 40

SELECT * FROM `users`
                WHERE ( `country` = 'china' && `gender` = 'female' && `age` > 10 && `age` < 20 )
                ||
                ( `country` = 'russia' && `gender` = 'male' && `age` > 20 && `age` < 50 )
                ||
                ( `country` = 'Peru' || `country` = 'United Kingdom' && `age` > 30 && `age` < 60 )


SELECT * FROM `users`
                    WHERE `country` = 'Brazil' && `gender` = 'Male' 

SELECT * FROM `users`
                    WHERE `country` = 'china' && `gender` = 'Female' && `age` > 18 &&`age` <25

SELECT * FROM `users`
                WHERE  `gender` = 'Male' && `age` > 20 &&`age` < 40



--! სორტირების მეთოდები ASC, DESC

--? SELECT * FROM `users` ORDER BY 'col_name' method
-- todo:  Default(ASC-ზრდადი ტენდენციით)   DESC-კლებადი ტენდენციით
SELECT * FROM `users` ORDER BY `id` DESC
SELECT * FROM `users` ORDER BY `first_name` DESC

--! ალტერნატიული სინტაქსი

SELECT * FROM `users`
        WHERE (`country` = 'Portugal'  || 
        `country` = 'Russia' || 
        `country` = 'France' || 
        `country` = 'Israel')
--! IN 
--! NOT IN
--? https://www.mysqltutorial.org/sql-in.aspx
--? https://www.geeksforgeeks.org/sql-between-in-operator/
SELECT * FROM `users`
        WHERE  `country` NOT IN ('Portugal', 'Russia','France','Israel')

--! BETWEEN 
--! NOT BETWEEN 
--? https://www.mysqltutorial.org/mysql-between
--? https://www.geeksforgeeks.org/sql-between-in-operator/
SELECT * FROM `users`             
   WHERE `age` >= 20 && `age` <= 40

SELECT * FROM `users`
   WHERE `age` BETWEEN 20 AND 40;

--! არ უდრის (!=),(<>) 

--! LIMIT ლიმიტირება

--? SELECT * FROM `users` LIMIT Start, count

SELECT * FROM `users` LIMIT 10, 5

SELECT * FROM `users` LIMIT 1,10
SELECT * FROM `users` LIMIT 10

--! პირობა სორტირება ლიმიტირება
SELECT * FROM `users` WHERE `age` > 30 ORDER BY `id` DESC LIMIT 10



                                   