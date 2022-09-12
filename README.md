# Front-end Capstone - Derivatively Dynamos

This project is a complete redesign of a formerly outdated feeling retail portal. This redesign will help the client boost sales and tote an overall more user friendly and accessable page.

## This product includes the following widgets created by our talented team:




<details>
<summary>Overview by Grant Deedler</summary>
<br>   

https://user-images.githubusercontent.com/76674186/189500176-ff3e7c4c-2b21-42dc-a8fe-4e074ba3b28f.mp4
  
- The Overview section is the the first thing a customer sees upon visiting the page. Product details, price, and description are displayed. The customer can select different styles to see the available sizes and quantities of each SKU in stock. Links for sharing the product to social media are also available.
    
- The dominant section of the overview is the image gallery. Customers can scroll through the available photos for each product style. If they click on the image it expands to a blown up gallery view. Clicking again on this view zooms in 300%, allowing customers to view small details in each product.
</details>

<details>
<summary>Related Items & Outfit Creation by Tyler Leet</summary>
<br>

https://user-images.githubusercontent.com/76674186/189500140-29c5e5fc-094c-43ca-ac1a-97cddc71b6e3.mp4
    
-your text here-

</details>

<details>
<summary>Questions and Answers by James Anderson</summary>
<br>

https://user-images.githubusercontent.com/76674186/189500160-a0c17f35-fe5e-4090-903f-8830e63467d2.mp4

This module allows the asking and answering of questions for the selected product. The functionality contained within this module can be divided into five unique subsections:

1. Search for a question and answer
2. View questions
3. View answers
4. Ask a question
5. Answer a question
    
- All question and answer data is obtained through HTTP requests to the API. If a different product is selected, it will trigger a request to the API and the module will re-render. After the data is received, questions and answers are sorted by their helpfulness, or number of helpful upvotes, as well if the questions actually contain answers. Users are able to report answers to the website which will have them removed, as well as vote on a question’s or answer’s helpfulness up to a total of one time.
    
- Expanding both the answer or question section renders a scrollbar for user friendly navigation. 
    
- The search bar will only begin to filter questions after three characters are typed while keeping all sort functions working properly.
    
- Adding a new question or answer will trigger a modal view with a form to be filled out and submitted. Upon submission, each field is validated based on a set of requirements provided in the business documents. Upon a successful submission, a post request will be sent to the API to persist the data.
</details>

<details>
<summary>Ratings and Reviews by Brian Crouse</summary>
<br>
  
https://user-images.githubusercontent.com/76674186/189500256-3d19d6b4-b4b2-4dba-aac8-dac52f54f136.mp4

Ratings and Reviews is meant to show a comprehensive breakdown of all user ratings for the currently selected product. This includes; the product's average rating, followed by percentage based "star rating" shown by a horizontal bar graph, as well as product characteristics represented by a slider. The reviews display lets users read into what others have thought about the product and post a review themselves, which is sent to Atelier API.
</details>

## Using this repo:

If you are not a member of the team please fork this repo prior to diving in. If you are part of Derivatively Dynamos **do not fork** this repo, see the instructions below.

### Updating your repo is as simple as running the following:

```
    git remote add upstream https://github.com/derivatively-dynamos/front-end-capstone.git //Set the upstream
    git checkout main       // Navigate to main branch
    git pull upstream main  // Get lastest changes of main branch
```

### Tech Used:
![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=plastic)
![Webpack](https://img.shields.io/badge/-Webpack-8DD6F9?logo=webpack&logoColor=white&style=plastic)
![Node](https://img.shields.io/badge/-Node-9ACD32?logo=node.js&logoColor=white&style=plastic)
![Babel](https://img.shields.io/badge/-Babel-F9DC3E?logo=babel&logoColor=white&style=plastic)
![Styled Components](https://img.shields.io/badge/-Styled_Components-DB7093?logo=styled-components&logoColor=white&style=plastic)
![FontAwesome](https://img.shields.io/badge/-Font_Awesome-146ebe?logo=fontawesome&logoColor=white&style=plastic)
![Lodash](https://img.shields.io/badge/-Lodash-3492ff?logo=lodash&logoColor=white&style=plastic)
![Axios](https://img.shields.io/badge/-Axios-373747?logo=axios&logoColor=white&style=plastic)
![Express](https://img.shields.io/badge/-Express-DCDCDC?logo=express&logoColor=black&style=plastic)
![AWS](https://img.shields.io/badge/-AWS-000000?logo=amazon-aws&logoColor=white&style=plastic)


## Install dependencies

1. Navigate to the root directory and `npm install` all dependencies.

2. This app uses dotenv, create a copy of .example-env with your preferred Port and Git Access Token. Rename this to .env since it is on the .gitignore.

3. Run `npm start` for a locally hosted development instance with hot reload.

4. To run a server, first run `npm build` to build the bundle, then `npm server` to launch the express server.



