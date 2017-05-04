/**
 * Created by User on 04.05.2017.
 */

define(['./user'], function () {
    class Profile extends User{
        Profile(login, password, country, city, email, phone, age, avatar){
            super.constructor(login, password);
            this.nickname = null;
            this.country = country;
            this.city = city;
            this.email = email;
            this.phone = phone;
            this.age = age;
            this.avatar = avatar;
        }

        /** setters **/
        set Nickname(nickname){
            this.nickname = nickname;
        }

        set Country(country){
            this.country = country;
        }

        set City(city){
            this.city = city;
        }

        set Email(email){
            this.email = email;
        }

        set Phone(phone){
            this.phone = phone;
        }

        set Age(age){
            this.age = age;
        }

        set Avatar(avatar){
            this.avatar = avatar;
        }

        /** getters **/
        get Nicname(){
            return this.nickname;
        }

        get Country(){
            return this.country;
        }

        get City(){
            return this.city;
        }

        get Email(){
            return this.email;
        }

        get Phone(){
            return this.phone;
        }

        get Age(){
            return this.age;
        }

        get Avatar(){
            return this.avatar;
        }
    }
    return Profile;
});