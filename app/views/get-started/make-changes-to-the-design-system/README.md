These instructions explain how to set up the Design System locally, make changes and then submit your changes to be merged into the Design System.

## One-time setup instructions

The following steps only need to be done once.

### 1) Get access to HMCTS Github

Make sure your name is on this list by creating a row at the bottom of the table.
https://tools.hmcts.net/confluence/display/RPE/Acceptable+Use+Policy+and+Contractor+Security+Guidance

After you have done this email reformtech-pmo@HMCTS.NET  to say that you have added your name on the list and want to get access to Github.

### 2) Get write access to the Design System repo

To make changes to the design system, you need to be given permission to write to the repository. 
You'll need a Github account, create one on [https://github.com](github.com) if you don't have one and note your username.
Then find someone with Admin rights, give them your GitHub username and ask them to add you to the Design System repository. Currently Pete Williams and Guy Tristram have admin access, but you're best off just asking in the #uxdigitalpractise Slack channel.


### 3) Check you have Git installed and install if not

The project lives on Github.com. To work with Github you need Git installed on your computer.

1. Open Terminal
2. To check if you have it installed, type: git --version
3. If you don’t have it installed, follow the prompts to install it



### 4) Install Node

The design system needs Node to be installed in order to work.

1. Go to [https://nodejs.org/en/]
2. Download the recommended version (first green button) and follow the prompts



### 5) Create a folder to store all of your Github projects

You can create a folder like you normally would. But I do this in Terminal as follows:

1. Open Terminal
2. Type: mkdir [foldername]

### 6) Set up the design system project

To create a local copy of the repo, you need to follow these steps:

1. Open Terminal
2. Go to the folder you created in step (5) by typing: cd path/to/your/folder. Mine for example is /Users/adambsilver/work/hmcts/design-system
3. Type: git clone https://github.com/hmcts/design-system.git
4. Install the dependencies of the project by typing: npm install

Running the design system and making changes

Now that the design system has been setup, you’ll be able to run it and make changes. You’ll do the following steps on a regular basis so you can refer back this bit in the future.

### 7) Run the app

1. Open Terminal
2. Go to the directory where you saved the design system by typing: cd path/to/design-system
3. Type: npm start
4. Open: http://localhost:3000 in the browser

To stop running the app type ctrl+c. This is useful if you’re using the prototype kit which also runs on the same address (localhost:3000). If your prototype is running first, then you’ll want to stop that from running before getting the design system running.

### 8) Make changes to the guidance

The majority of changes you’ll make involve simple text changes to headings and paragraphs. To do this follow these steps:

1. Open the design system project in a text editor. I use Visual Studio Code but you can use whatever you like.
2. All of the pages live inside app/views/. The folder structure reflects the url excluding app/views/. So /components/alert lives in app/views/components/alert
3. Open the alert folder. You’ll see two files in the root of that folder: index.html and README.md
4. Open up README.md which is a markdown file. It consists mostly of text
5. Change the text
6. Press save
7. Refresh the browser and see the change reflected

To make sure everyone else gets the change and have the changes reflected on Heroku, you need to run a few Git commands. Don’t worry about what they mean at this stage.

1. Type: git add -A
2. Type: git commit -m ‘Fixed typo in alert’
3. Type: git push origin master

You might get some warning/error about not being able to run the last step. This usually means someone else has made a change which means your local copy of the design system is out of date.

To fix this, you need to type: git pull origin master

### 9) Create a new pattern from scratch
Creating a new pattern involves:
* creating a new folder
* creating a new navigation item in the menu
* making content changes

To do this follow these steps:

1. Copy and paste an existing folder such as app/views/patterns/search-for-something
2. Change the name of the folder to be the name of the new pattern
3. Create a new link by carefully editing app/views/partials/patterns-subnav.html. It involves a little bit of JSON and will complain if you get it wrong.

You can then run through same process as step (8) to make changes to the README.md file and commiting the changes to Github.

### 10) Creating a video for pattern

Pattern pages may include videos to show a flow. To do this I had to create a gif and then convert into an MP4 video file so this might seem long-winded.

1. Use [Licecap](https://www.cockos.com/licecap) to record your journey. This will save the file as a gif
2. Convert the gif into an MP4 using [EZGif](https://ezgif.com/gif-to-mp4)
3. Save the MP4 file onto your computer
4. Give the MP4 file a useful name that matches the pattern.
5. Place the video into app/assets/videos/
6. Restart the application (ctrl+c and npm start)

A note about getting latest and conflicts

You’ll periodically have to keep you’re version of the Design System up to date. You can do this yourself before you start making changes to minimise the risk of running into problems by follow these steps:

1. Type: git pull origin master
2. Type: npm install
3. Type: npm start
