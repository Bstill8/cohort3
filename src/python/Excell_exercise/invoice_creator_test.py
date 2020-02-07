import invoice_creator as I
import openpyxl
workbook = openpyxl.open("C:/code/cohort-3/src/python/Excell_exercise/Invoices.xlsx")

def test_store():
    assert I.store(workbook["Customer"], "customer") == {1: "Jishky Lexer", 2: "Alex Roper", 3: "Josh Peters", 4: "Nate Jones", 5: "Jessica David"}
    assert I.store(workbook["Invoices"], "invoice") == {1: ["12/12/2019", 3], 2: ["12/30/2019", 2], 3: ["01/02/2020", 4], 4: ["01/16/2020", 3], 5: ["01/26/2020", 4]}
    assert I.store(workbook["Invoice Line Items"], "lines") == {1: [5,4,4], 2: [5,3,7], 3: [5,1,6], 4: [4,3,5], 5: [4,2,4], 6: [4,1,12], 7: [3,4,7], 8: [3,3,9], 9: [3,2,8], 10: [3,1,5], 11: [2,5,6], 12: [2,4,3], 13: [2,3,4], 14: [2,2,12], 15: [1,5,8], 16: [1,4,6], 17: [1,3,4], 18: [1,2,3], 19: [1,1,12]}
    assert I.store(workbook["Product Table"], "product") == {1: ["Apple", 3], 2: ["Orange", 4], 3: ["Grape", 11], 4: ["Bannana", 5], 5: ["Lemon", 1.5]}



