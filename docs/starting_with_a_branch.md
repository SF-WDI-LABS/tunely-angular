# Using branches

As you start each sprint in this series you are strongly encouraged to:

* start from the previous solutions and build on them
* do your work on your own new local branch

## Initial setup

**Follow these steps immediately after you first fork and clone the repository.**

This project is carrying on throughout the week, so there may be changes to the class version of this repository after you clone.  To make it easy for you to get updates, you should add the class version as an extra remote repository.   

* In your Terminal, navigate to your local repository for this project. Copy the clone url of the class version of this repository, then run the following command (paste in the class repo clone url instead of typing CLASS_REPO_CLONE_URL):

    ```sh
    git remote add upstream CLASS_REPO_CLONE_URL
    ```

* In the future, if your teaching team asks you to get class updates for a specific branch, you can pull updates from the `upstream` remote.  Try this now with the master branch (there shouldn't be anything new on master yet):

    ```sh
    git checkout master
    git pull upstream master
    ```

## First sprint

**Follow these steps only on your first sprint!**

* For sprint 1, after you clone the repo, make sure you're on a personal local branch.  

```sh
git checkout -b my_work_sprint_1
```
   > `git checkout -b` creates a new, local branch from the current branch.



## Subsequent Sprints

**Follow these steps on every sprint except the first one!**
> Why? You likely have changes from previous sprints that need to be committed first!
\
Let's assume you're starting *sprint 2*

1. Save your changes to any files you've been working on.

1. Make sure you're on a branch for your work.  The `git branch` command should show you being on your branch for the previous sprint (e.g., `my_work_sprint_1`).

1. Commit any changes you've made.

   ```sh
   git add .
   git commit -m "saves changes on sprint 1"
   ```
   Then verify that the above worked.  If `git status` shows that your *working directory is clean*, you're good to go!


1. Check out the solution branch for the sprint you were previously  working on using `git checkout BRANCH_NAME`.  

   ```sh
   git checkout solutions_sprint_1
   ```
   > If you're starting sprint 2, use the solutions from 1 as your starting point.

1. Pull any changes to the branch from upstream, and push them to your origin:

    ```sh
    git pull upstream solutions_sprint_1
    git push origin solutions_sprint_1
    ```

1. Create a new branch for your work in this sprint.

   ```sh
   git checkout -b my_work_sprint_2
   ```
   > `git checkout -b` creates a new, local branch from the current branch.

1. Begin working!  Make all your commits on **YOUR** branch.
