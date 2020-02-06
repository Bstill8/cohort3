import openpyxl

workbook = openpyxl.open("C:/code/cohort-3/src/python/Excell_exercise/Invoices.xlsx")
customer = workbook["Customer"]
invoices = workbook["Invoices"]
items = workbook["Invoice Line Items"]
products = workbook["Product Table"]
print(products["B4"].value)