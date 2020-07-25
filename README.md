# Large-Box-App
App to create labels for large box requests

## Process
The current process regarding large boxes in the Reverse Logistics (RL) department at Ingram Micro (Richmond) is as follows:
  1. Analyst add request for large boxes into Excel.
    a) Information given is:
        - Request # ( 1 - n , where n is the total number of large box requests. Resets to 1 daily).
        - Analyst name.
        - Box dimensions (length, width, and height).
        - Box type. Note, only used if width and height is greater then 36" (Default box type is 'IQ 201-0001 inch')
  2. Requests are printed on paper.
  3. Request number are written by hand on labels ( 1" x 2" )**.
  4. Looking at the printed paper, box dimensions are enetered into the box cutter.
  5. Request number label is placed on the box as they are cut.
  6. Printed boxes are placed in reverse order on skid, and then delivered to RL room.
  7. Analyst reference the printed paper for their request number, then search the skid for the box with the request number label.
  
## Problems 
  1. Checking the width + height value to see if it is greater then 36 is done after the list has been printed.
  2. It is possible for the user looking at the paper to look at the wrong column and print a box with the wrong dimensions.
  3. Having the box printed in the order of request numbers causes an Analyst to have a box at the top, middle, and bottom of the pile, causing them to spend more time looking in the pile for their box
  
## Solutions
  1. Print the box request ( Request #, name, dimensions and type) on the label
    - This removes the need to use a piece of paper everyday.
    - Gives the person printing the boxes a large clear font to read the requested dimensions from.
    - Since they will only be looking at one label at a time, they wont confuse the requested dimensions with another request.
  2. Sort the labels by name before printing.
    - This will solve the Problem #3.
    - The Analyst will still need to look for their box in the pile, but since they are grouped together it will be easier to find all the boxes they requested.
  3. Validate dimension input.
    - If given width + height is grater then 36", check to see if length + height will work, else check if width + length will work
      - Once a working orientation is found, swap values around.
      - If no orientation work, box will need to be HSC (two pieces)
  
## Assumptions / Design notes
  1. HSC boxes will be printed after all the regular boxes have been printed
    - Since the box printer stays on the last box type after a print, having to change to HSC and back for 1 box is not efficient
    - The number of HSC boxes is usually less then the number of regular boxes, so to have them printed after will work.
    - They will still be sorted by the requestor name.
    
## Project Steps
  1. Receive Excel data from user, validate dimension input, and sort by request name.
      - Use text area.
      - Confirm that cells are split by TAB character.
      - Confirm that each line is a new request.
  2. Create working label.
      - Display given information in 1" x 2" box.
      - use CSS to print each box on its own page.
  3. Put steps 1 and 2 together.
      - Once the app is working, add some bootstrap classes to clean up the input form, and other pages if needed.
  4. Test process locally.
      - Are the expected number of labels getting printed?
      - Are the labels printing the correct information?
      - Are the box dimensions getting swapped if needed?
  5. Test app.
      - Confirm the label layout is clear, large, uses space neatly.
      - Get feedback from user on working process
              
*Double check the default box type.
**Check labels that are being used.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~                                                                                   ~
~ This app was created on my own time for my current job at Ingram Micro.           ~
~ I was not asked by anyone at my job to create this app.                           ~
~ The job ispiered by to document a process, and how it can be improved.             ~
~                                                                                   ~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
