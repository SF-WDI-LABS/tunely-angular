# Using branches

As you start each lab in the series you are strongly encouraged to:

* start from the previous solutions and build on them
* do your work on your own new local branch





## First sprint and setup

**Follow these steps only on your first sprint!**

* For sprint 1, after you clone the repo, make sure you're on a personal local branch.  

```sh
git checkout -b my_work_sprint_1
```
   > `git checkout -b` creates a new, local branch from the current branch.



## Subsequent Sprints

**Follow these steps on every sprint except the first one!**
> Why? You likely have changes from previous sprints that need to be committed first!

Here's how you can do that:

Let's assume you're starting *sprint 2*

1. Commit any changes you've made.
   
   ```sh
   git add .
   git commit -m "saving my changes on sprint X"
   ```
   Then verify that the above worked.  If `git status` shows that your *working directory is clean* you're good to go!

   
1. Check out the next solution branch using `git checkout BRANCH_NAME`

   ```sh
   git checkout solutions_sprint_1
   ```
   > If you're starting sprint 2, use the solutions from 1 as your starting point.
   
1. Create a new branch for your work in this sprint.
   
   ```sh
   git checkout -b my_work_sprint_2
   ```
   > `git checkout -b` creates a new, local branch from the current branch.
   
1. Begin working!  Make all your commits on **YOUR** branch.



## Pulling updates