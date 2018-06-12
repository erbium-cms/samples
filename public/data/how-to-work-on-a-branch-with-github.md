This post describes how to create a branch if your repository is on GitHub and
what you have to do to synchronize it with your local repository.

# Create the Remote Branch on GitHub

First you need to create a remote branch on GitHub. This branch is afterwards
used to synchronize with your local repository.

Go to GitHub and open the repository that you would like to create the branch.
In the first tab you can switch between branches and there is also the place
where you can create a new one.

![](./data/github-create-branch.png)

Enter a branch name in the field, e.g. some-fix, and hit `Enter`. The branch
will be crated from your current branch.

# Create a Branch in Your Local Repository

Now you need a branch in your local repository. This branch is created by
`git checkout -b some-fix`.

![](./data/git-create-branch-locally.png)

# Set the Remote Branch as Upstream Branch

Now we need to tell git that we would like to synchronize this branch with the
branch on GitHub. This is done by setting the remote branch as upstream branch.
You can do this with `git branch --set-upstream-to=origin/source source`. You
can now use git pull/push to synchronize your work.

You can also pull/push the remote branch with `git pull origin source`.
