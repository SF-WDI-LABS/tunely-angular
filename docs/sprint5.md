## Overview

In this sprint, you'll **review** and **practice** CRUD actions with Angular. 

As you've seen, the data from the database includes songs. Now it's time to add the ability to `CREATE`, `READ`, `UPDATE`, and `DELETE` songs through the user interface.

Rememeber to follow the [branching instructions](https://github.com/sf-wdi-31/tunely-angular/blob/master/docs/starting_with_a_branch.md) to get started. 

1. Update your album show page to include UI elements for users to create,  edit, and delete song:

  ![full-view](https://cloud.githubusercontent.com/assets/3010270/14510977/4b621d0e-0189-11e6-82b0-965e6d1f0484.png)

1. Submitting the "+ Add Song" form should add a new song to the UI and the database. 

1. Clicking the delete button near each song should remove that song from the UI and from the database. 

1. Clicking the pencil icon near each song should allow editing that song.  Create an inline edit form by changing the text on the page into an input field, removing the edit and delete buttons, and adding a green save button, like this:

  ![inline-edit](https://cloud.githubusercontent.com/assets/3010270/14510992/5f7e0fbe-0189-11e6-9bfc-1e6751c23f7a.png)

1. Make all the things work! Go!!!! <3


## Hints

1. Reference Sprints 1-4. 

1. Since there's no new view, you won't _need_ to add a new client-side route or controller. 

  <details><summary>Click for more...</summary> 
   > You can add your new logic to the controller in charge of the view you're modifying.  Check which controller by looking at your routes in app.js. 
   
     <details><summary>Click for controller name...</summary> 
       >`AlbumsShowController`</details>
  </details>

</details>
       

