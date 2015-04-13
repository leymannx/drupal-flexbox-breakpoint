Drupal JS to add a breakpoint at certain width 
=========================

Default behaviour:
Let's say you have lot's of divs of a (unpredictable) different width, all inlined, and all with a right border. When the parent divs width is reached the line of divs breaks automatically. That may go on for many many lines. So it comes that every last div in a line has a right border. I didn't wanted that border. I wanted it like so:

item32407 | itemeaf | itemf4 | item  
itemsf | itemfasdfrgh | itemasfasgr  
itemwegawg | itemsagr | item | item  
item | item  

Since you can control the border of the very last item easily with CSS, you can't do that for every last item in one line. So I came up with that little script here.
All divs widths are summed up. When a certain with is reached the one div which is at that place right then get a class stamped to it. So I can apply CSS rules for every last item of a line.

TO DO (maybe):  
- add a settings page to enter IDs and classes the script may use
