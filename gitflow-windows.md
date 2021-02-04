# Git Flow

## Installation for Windows

Under Windows, the easiest way to install git-flow is using git-flow installer, which can be run using the following command:

    $ wget -q -O - --no-check-certificate https://raw.github.com/petervanderdoes/gitflow-avh/develop/contrib/gitflow-installer.sh install stable | bash

Note: To run wget on windows OS, [Cygwin](https://www.cygwin.com/) needs to be intalled first. And [wget package](https://superuser.com/a/693286) should be imported at the installation steps.

For Windows: `git flow` will be used instead of `git hf` to run all the command mentioned in the engineering handbook.

**For example**

    git flow feature start SEQP-10/error_message_wrong_username_password

    git flow release start <release-version-number>
