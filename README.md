**Zadanie 1** Paradygmaty

:white_check_mark: 3.0 Procedura do generowania 50 losowych liczb od 0 do 100 [Link do commita](https://github.com/JTMalczewski/obiektowe/commit/ce4cc7db0290df364bcff5c4c9d66c816df2d817)

:white_check_mark: 3.5 Procedura do sortowania liczb [Link do commita](https://github.com/JTMalczewski/obiektowe/commit/ce4cc7db0290df364bcff5c4c9d66c816df2d817)

:white_check_mark: 4.0 Dodanie parametrów do procedury losującej określającymi zakres losowania: od, do, ile [Link do commita](https://github.com/JTMalczewski/obiektowe/commit/ce4cc7db0290df364bcff5c4c9d66c816df2d817)

:x: 4.5 5 testów jednostkowych testujące procedury

:x: 5.0 Skrypt w bashu do uruchamiania aplikacji w Pascalu via docker


Kod: [Zadanie 1](https://github.com/JTMalczewski/obiektowe/tree/main/Zadanie%201)

**Zadanie 2** Wzorce architektury

Należy stworzyć aplikację webową na bazie frameworka Symfony na obrazie kprzystalski/projobj-php:latest. Baza danych dowolna, sugeruję SQLite.

:white_check_mark: 3.0 Należy stworzyć jeden model z kontrolerem z produktami, zgodnie z CRUD [Link do commita](https://github.com/JTMalczewski/obiektowe/commit/04afd3f5548160476a36397f77d2f7a1cd7027df)

:white_check_mark: 3.5 Należy stworzyć skrypty do testów endpointów via curl [Link do commita](https://github.com/JTMalczewski/obiektowe/commit/d96bd44b22f62e81c61a6bf8ad52b483207fd6f9)

:white_check_mark: 4.0 Należy stworzyć dwa dodatkowe kontrolery wraz z modelami [Link do commita](https://github.com/JTMalczewski/obiektowe/commit/8fae87ef31aa68f97c98eafcf3a77284c550846d)

:white_check_mark: 4.5 Należy stworzyć widoki do wszystkich kontrolerów [Link do commita](https://github.com/JTMalczewski/obiektowe/commit/e0df54c0221d69e1a6c5f8829553bb1f215419f8)

:x: 5.0 Stworzenie panelu administracyjnego z mockowanym logowaniem 

Kod: [Zadanie 2](https://github.com/JTMalczewski/obiektowe/tree/main/Zadanie%202)

**Zadanie 3** Wzorce kreacyjne

Spring Boot (Kotlin)

Proszę stworzyć prosty serwis do autoryzacji, który zasymuluje autoryzację użytkownika za pomocą przesłanej nazwy użytkownika oraz hasła. Serwis powinien zostać wstrzyknięty do kontrolera za pomocą anotacji @Autowired. Aplikacja ma oczywiście zawierać jeden kontroler i powinna zostać napisana w języku Kotlin. Oparta powinna zostać na frameworku Spring Boot, podobnie jak na zajęciach. Serwis do autoryzacji powinien być singletonem.

:white_check_mark: 3.0 Należy stworzyć jeden kontroler wraz z danymi wyświetlanymi z listy na endpoint’cie w formacie JSON - Kotlin + Spring Boot [Link do commita](https://github.com/JTMalczewski/obiektowe/commit/8fae87ef31aa68f97c98eafcf3a77284c550846d)

:white_check_mark: 3.5 Należy stworzyć klasę do autoryzacji (mock) jako Singleton w formie eager [Link do commita](https://github.com/JTMalczewski/obiektowe/commit/8fae87ef31aa68f97c98eafcf3a77284c550846d)

:white_check_mark: 4.0 Należy obsłużyć dane autoryzacji przekazywane przez użytkownika [Link do commita](https://github.com/JTMalczewski/obiektowe/commit/8fae87ef31aa68f97c98eafcf3a77284c550846d)

:white_check_mark: 4.5 Należy wstrzyknąć singleton do głównej klasy via @Autowired [Link do commita](https://github.com/JTMalczewski/obiektowe/commit/8fae87ef31aa68f97c98eafcf3a77284c550846d)

:white_check_mark: 5.0 Obok wersji Eager do wyboru powinna być wersja Singletona w wersji lazy [Link do commita](https://github.com/JTMalczewski/obiektowe/commit/8fae87ef31aa68f97c98eafcf3a77284c550846d)

Kod: [Zadanie 3](https://github.com/JTMalczewski/obiektowe/tree/main/Zadanie%203)

**Zadanie 4 Wzorce strukturalne**

Należy stworzyć aplikację w Go na frameworku echo. Aplikacja ma mieć jeden endpoint, minimum jedną funkcję proxy, która pobiera dane np. o pogodzie, giełdzie, etc. (do wyboru) z zewnętrznego API. Zapytania do endpointu można wysyłać w jako GET lub POST.

:white_check_mark: 3.0 Należy stworzyć aplikację we frameworki echo w j. Go, która będzie miała kontroler Pogody, która pozwala na pobieranie danych o pogodzie (lub akcjach giełdowych)

:white_check_mark: 3.5 Należy stworzyć model Pogoda (lub Giełda) wykorzystując gorm, a dane załadować z listy przy uruchomieniu

:white_check_mark: 4.0 Należy stworzyć klasę proxy, która pobierze dane z serwisu zewnętrznego podczas zapytania do naszego kontrolera

:white_check_mark: 4.5 Należy zapisać pobrane dane z zewnątrz do bazy danych

:x: 5.0 Należy rozszerzyć endpoint na więcej niż jedną lokalizację (Pogoda), lub akcje (Giełda) zwracając JSONa

**Zadanie 5 Wzorce behawioralne**

React (JavaScript/Typescript)

Należy stworzyć aplikację kliencką wykorzystując bibliotekę React.js. W ramach projektu należy stworzyć trzy komponenty: Uslugi, Zamowienia oraz Płatności. Zamówienia oraz Płatności powinny wysyłać do aplikacji serwerowej dane, a w Uslugach powinniśmy pobierać dane o dostępnych usługach z aplikacji serwerowej. Dane pomiędzy wszystkimi komponentami powinny być przesyłane za pomocą React hooks.

:white_check_mark: 3.0 W ramach projektu należy stworzyć dwa komponenty: Produkty oraz Płatności; Płatności powinny wysyłać do aplikacji serwerowej dane, a w Produktach powinniśmy pobierać dane o produktach z aplikacji serwerowej [Link do commita](https://github.com/JTMalczewski/ebiznes/commit/721bada73a965fc676850321088647d7008f8d7f)

:white_check_mark: 3.5 Należy dodać Koszyk wraz z widokiem; należy wykorzystać routing [Link do commita](https://github.com/JTMalczewski/ebiznes/commit/721bada73a965fc676850321088647d7008f8d7f)

:white_check_mark: 4.0 Dane pomiędzy wszystkimi komponentami powinny być przesyłane za pomocą React hooks [Link do commita](https://github.com/JTMalczewski/ebiznes/commit/721bada73a965fc676850321088647d7008f8d7f)

:x: 4.5 Należy dodać skrypt uruchamiający aplikację serwerową oraz kliencką na dockerze via docker-compose

:x: 5.0 Należy wykorzystać axios’a oraz dodać nagłówki pod CORS

Kod: [Zadanie 5](https://github.com/JTMalczewski/ebiznes/tree/main/zadanie_5)

**Zadanie 6 Zapaszki**

Sonar (JS)

W ramach zadania VI należy zredukować błędy typu: Bugs, Security Hotspots, Vulnerabilities oraz Code Smells. Błędy powinny być efektem statycznej analizy kodu za pomocą rozwiązania Sonar Cloud (https://sonarcloud.io/). Dodatkowo należy w Readme.md na każdym repozytorium dodać badge SonarCloud do powyższych czterech typów błędów (https://sonarcloud.io/project/information?id=). Należy sprawdzić kod projektu IV z kodem w React’cie.

:white_check_mark: 3.0 Należy dodać eslint w hookach gita [Link do commita](https://github.com/JTMalczewski/obiektowe/commit/e6c3e6afc1dc166806601ab7e78e9a159e2f3302)

:white_check_mark: 3.5 Należy wyeliminować wszystkie bugi w kodzie w Sonarze (kod aplikacji klienckiej)

:white_check_mark: 4.0 Należy wyeliminować wszystkie zapaszki w kodzie w Sonarze (kod aplikacji klienckiej)

:white_check_mark: 4.5 Należy wyeliminować wszystkie podatności oraz błędy bezpieczeństwa w kodzie w Sonarze (kod aplikacji klienckiej)

:white_check_mark: 5.0 Zredukować duplikaty kodu do 0%

[eslint](https://github.com/JTMalczewski/obiektowe/blob/main/demos/zadanie_6.mkv)\
[Front repo](https://github.com/JTMalczewski/ReactShop)\
[Backend repo](https://github.com/JTMalczewski/ReactShopBackend)

**Zadanie 7 Antywzorce**
Vapor (Swift)

Proszę napisać prostą aplikację w Vaporze, wykorzystując Leaf jako silnik szablonów or Fluent jako ORM. Proszę stworzyć trzy modele oraz CRUD dla każdego z nich. Należy stworzyć model z minimum jedną relacją. CRUD powinien mieć odzwierciedlenie w szablonach.

:white_check_mark: 3.0 Należy stworzyć kontroler wraz z modele Produktów zgodny z CRUD w ORM Fluent [Link do commita](https://github.com/JTMalczewski/obiektowe/commit/04e0baea69b6f32d47e6224a010b48ff2a56bff2)

3.5 Należy stworzyć szablony w Leaf

4.0 Należy stworzyć drugi model oraz kontroler Kategorii wraz z relacją

4.5 Należy wykorzystać Redis do przechowywania danych

5.0 Wrzucić aplikację na heroku

https://www.heroku.com/github-students

Kod: [Zadanie 7](https://github.com/JTMalczewski/obiektowe/tree/main/Zadanie%207/app/CrudApp)

**Zad 8 Mobile first**
(Android)

:white_check_mark: 3.0 stworzenie listy kategorii oraz produktów [Link do commita](https://github.com/JTMalczewski/obiektowe/commit/6b4def0db429fbf1638a7f1269ed8c70a82d8a59)

:white_check_mark: 3.5 dodać koszyk [Link do commita](https://github.com/JTMalczewski/obiektowe/commit/6b4def0db429fbf1638a7f1269ed8c70a82d8a59)

4.0 stworzyć bazę w Realmie

4.5 dodać płatności w Stripe

5.0 logowanie i rejestrację via Oauth2 dodać
Kod: [Zadanie 8](https://github.com/JTMalczewski/obiektowe/tree/main/zadanie%208/MobileFirst)

**Zadanie 9 Testy**

Proszę pamiętać o stworzeniu darmowego konta via https://education.github.com/pack.

:white_check_mark: 3.0 Należy stworzyć 20 przypadków testowych w CypressJS lub Selenium (Kotlin, Python, Java, JS, Go, Scala) [Link do commita - ebiznes](https://github.com/JTMalczewski/ebiznes/commit/df1fbe5629c20f133d1071aedf2ee77fe486d1e5)

3.5 Należy rozszerzyć testy funkcjonalne, aby zawierały minimum 50 asercji

4.0 Należy stworzyć testy jednostkowe do wybranego wcześniejszego projektu z minimum 50 asercjami

4.5 Należy dodać testy API, należy pokryć wszystkie endpointy z minimum jednym scenariuszem negatywnym per endpoint

5.0 Należy uruchomić testy funkcjonalne na Browserstacku

Kod: [Zadanie 6 - ebiznes](https://github.com/JTMalczewski/ebiznes/tree/main/zadanie_6)