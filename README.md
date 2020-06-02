# Node.js - Mysql - Cloud Run -docker-compose

 These are the assignment features: 

- 1- this github repository
- 2- a basic node.js express web api connected to a mysql database:
###Methods
- GET /
- POST /login
- POST /register

###Payload
``
{ "email": "max@mail.com", "password": "secret" }
``

- 3- docker-compose as a local deploy tool

``
docker-compose up --build
``

- 4- the api is for login and registering users storing encrypted passwords
- 5- The app is automatically deployed to GCP Cloud Run and GCE on commit at this repo on master branch it creates a docker image and deploys it to serverless Cloud Run. There is a trigger in Cloud Build connected to the Git repository that invokes the deployment.
- 6- TODO: Finish ansible db backup script.
- 7- Using a .com domain already owned by me.
- 8- The app is connected to a CDN (Cloudflare) .
- 9- hypercloudops.com points to the app hosted at GCP.