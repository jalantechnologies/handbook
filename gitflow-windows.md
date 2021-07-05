
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
