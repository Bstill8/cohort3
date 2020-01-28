number = 5
string = "thing"
boolean = True
array = [5,3,6] #lists are used rather than arrays
myObject = {"string": string, "boolean": boolean}
unDef = None  #python does not like unassigned names
if number == 5:
    myObject['array'] = array
else:
    myObject.number = number

def sum(a,b):
    return a+b 

array.append(7)
array.insert(0,1)
array[2] = 2

for x in range(5):
    print(x)

for x in array:
    print(x)

j = 0
while(j > 6):
    print(j)
    j = j + 1

i = 1
while True:  #emulates a do while loop which python lacks
    print(i)
    i = i + 1
    if(i > 2):
        break

for x in array:         #for in loop to iterate over list as python does not have for each
    print("something")

print(myObject["string"])


