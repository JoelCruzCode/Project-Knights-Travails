# Project-Knights-Travai

# use BFS to find the shortest path to the target

# create an array of visited nodes to prevent redundant searches of deeper paths

# queue FIFO

# I might need to create methods for checking if a node has been visited, removing visited from all nodes

# im assuming I should have only 1 graph that represents all connections of the movement of a knight then create my adjecency list to represent that graph...

# if i want to find a shortest path for a given start and end point ill have to first traverse to that start point() and then use level order to traverse and compare all paths to end point.

# do i also need level order to traverse to the start point or can i use a depth first approach since I should generally know where to find the start point?

# probably have to reset data of all nodes in graph after returning a shorted path traversal : reseting visited to false

# I will reset my adjacency matrix after finding out all first steps from a given point..

# start point

# calculate all possible first steps from start point using L shaped steps ( 2 squares then 1 side, 1 side 2 squares etc..)

# plug all possible connections onto adjency matrix

# until end point reached...

# create new adjacency graphs starting from possible paths

# keep track of visited nodes on matrix to avoid redundant paths

# should this be done recursively? level order isnt as efficient with recursion so probably would be better to use iteration
