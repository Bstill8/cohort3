import invoice_creator as I
import openpyxl
workbook = openpyxl.open("C:/code/cohort-3/src/python/Excell_exercise/Invoices_test.xlsx")
I.store(workbook["Invoices"], "invoice")
def test_store():
    assert I.store(workbook["Customer"], "customer") == {1: "Jishky Lexer", 2: "Alex Roper", 3: "Josh Peters", 4: "Nate Jones", 5: "Jessica David"}
    assert I.store(workbook["Invoices"], "invoice") == {1: ["12/01/2019", 3], 2: ["12/01/2019", 2], 3: ["12/02/2019", 4], 4: ["12/03/2019", 3], 5: ["12/04/2019", 4]}
    assert I.store(workbook["Invoice Line Items"], "lines") == {1: [1,4,4], 2: [1,3,7], 3: [1,1,6], 4: [1,3,5], 5: [1,2,4], 6: [2,1,12], 7: [2,4,7], 8: [2,3,9], 9: [2,2,8], 10: [3,1,5], 11: [3,5,6], 12: [3,4,3], 13: [4,3,4], 14: [4,2,12], 15: [4,5,8], 16: [4,4,6], 17: [4,3,4], 18: [5,2,3], 19: [5,1,12], 20: [5,5,11], 21: [5,3,8]}
    assert I.store(workbook["Product Table"], "product") == {1: ["Apple", 3], 2: ["Orange", 4], 3: ["Grape", 11], 4: ["Bannana", 5], 5: ["Lemon", 1.5]}



