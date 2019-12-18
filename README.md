
* Recently I was working on azure release pipeline and found that my tests are not exiting while running it through npx
* Later I found jest-junit reporter is causing this issue
* npx run with a empty package.json file will work as expected

Note - This is only happening with jest-junit package if we run without jest-junit it will run fine

### How to reproduce ###

* npm i jest jest-junit
* npx jest --maxWorkers=1 --forceExit

* expected - test execution should stop after successful run
* actual - test execution will never stop


### How to fix ###

* just add a empty (i.e. {}) package.json in working folder and it will work fine
