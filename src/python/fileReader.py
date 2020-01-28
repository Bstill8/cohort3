import re

file = open("C:/code/cohort-3/src/javascript/syntax.js", 'r')
content = file.read()
lines = re.findall('\\n', content)
elseStatements = re.findall('else', content)
nonWhiteSpace = re.findall('\S', content)
whiteSpace = re.findall('\s', content)
print("There are " + str(len(lines)) + " lines \n")
print("There are " + str(len(elseStatements)) + " else statements \n")
print("There are " + str(len(nonWhiteSpace) + len(whiteSpace)) + " total characters \n")