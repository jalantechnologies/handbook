# Git Flow

## Installation for Windows

Under Windows, the easiest way to install git-flow is using git-flow installer, which can be run using the following command:

    $ wget -q -O - --no-check-certificate https://raw.github.com/petervanderdoes/gitflow-avh/develop/contrib/gitflow-installer.sh install stable | bash

Note: To run wget on windows OS, [Cygwin](https://www.cygwin.com/) needs to be intalled first. And [wget package](https://superuser.com/a/693286) should be imported at the installation steps.

For Windows: `git flow` will be used instead of `git hf` to run all the command mentioned in the engineering handbook.

**For example**

    git flow feature start SEQP-10/error_message_wrong_username_password

    git flow release start <release-version-number>
    
    
# HUBFLOW

## Installation for Windows

To install hubflow it is recommended to use git bash and run the git bash as administrator for the following commands.
`git clone https://github.com/datasift/gitflow hubflow`

`cd hubflow`

`cp git-hf* '/mingw64/bin/'`

`cp hubflow-common '/mingw64/bin/'`

`git submodule update --remote --init --checkout`

`cp shFlags/src/shflags '/mingw64/bin/hubflow-shFlags'`

# Test hubflow

`git hf help`

# Key Notes

It's much easier to have git bash in your windows system to use hubflow. 
If you find any difficulties try running the commands which includes path, without quotes. example:
replace `cp hubflow-common '/mingw64/bin/'` with `cp hubflow-common /mingw64/bin/`
