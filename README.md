# zigzag-game
ZigZag Game

Welcome to my Sonic Zig-zag game!

![Sonic Zig-zag Landing](https://i.imgur.com/H0YGopR.png)


##Inspiration:

![iPhone Game Inspiration](http://i.imgur.com/uEnbhIO.png)
![iPhone Game Inspiration2] (http://i.imgur.com/v4BJnRI.png)

The creation of this game was inspired the iPhone app game called zig-zag, but I thought it would be cool to have the ball that's moving around the screen be a character. The first one who came to mind was Sonic,
so in this game he zig zags around the board in a somewhat similar fashion collecting rings (instead of diamonds).

##Rules:

Zig zag around the board to collect all of the rings without getting killed by hidden enemies that pop out once you touch them. Those 
will end the game and you will have to start all over again. Collect all 10 rings to win.



##Building: 
![Wireframe](http://i.imgur.com/MEg8463.png)

In the begining I wanted sonic to be an automatic moving ball across the ball that moved direction when the right key was struck but for some reason
I couldn't get that to work so i just changed it to have him move a certain amount of pixels each time you typed the direction you wanted to go in. I feel like
that took some of the difficulty of the game away so I ended up adding in hidden crabs to kill you when you go over them at their certain indexes. That was a bit of a pain to do as I didn't have exact points at first, but I realized if not they will come up even though you weren't directly on them.
Instead I gave each coin and enemy an index to be reached.

##Landing page: 
![Spotify Landing Page](http://i.imgur.com/6uP7KEE.png)

I mocked up the landing page based off of Spotify web login page (seen here: https://accounts.spotify.com/en-US/login?continue=https:%2F%2Fwww.spotify.com%2Fus%2Faccount%2Foverview%2F). Something very simple that only requests two bits of information from the user. Only their name is displayed on the game page when they click play.


##Game board: 

![Game Board Flexbox] (http://i.imgur.com/dqqhG7R.jpg)

To build the board I used flexbox to make a grid of 10 rows of 8. I have 80 divs and for each coin and enemy I have them in their own boxes able to be identified so I could add different events to them. For the rings I have triggered the CSS to become invisible once you have collected them and for the enemies since I have them hidden, when they are rolled over by Sonic, they become visible and reload the page.
I coded all of those events in jQuery. I used a switch statement for the movements and a bunch of if statements for each landing point of the rings and each enemy. I'm sure there's an easier way, but this is what I could figure out because I didn't have too much time to figure out more and implement it correctly. I also realized I couldn't have a 3D type board so I went with using Sonic screen grabs to make it a bit more fun and nostalgic.

![Game Board](http://i.imgur.com/ar79H6j.jpg)

##Unsolved problems: 

Since I mentioned the way I have pixel points for each ring - I run into the problem of hitting the same points multiple times. That makes my counter add another hit and sometimes the game says you won when you didn't even collect all of the rings yet. It thinks so because you have passed that coin index several times and it will add 1 to the counter each time until you get to 10. That is something I have to work on. I also wanted to make 3 levels, I got mid way through level 2 but wasn't able to finish in time. I also wanted
to add sounds and a score board but didn't get to that on time. Also, if i can get him to be automated and move direction on keypress, I think it would make the game more exciting. 





