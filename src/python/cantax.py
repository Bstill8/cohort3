def fedTax(income):
    totalTax = 0
    if income > 214368:
        totalTax += (income - 214368)*0.33
        income = 214368
    if income > 150473:
        totalTax += (income - 150473)*0.29
        income = 150473
    if income > 97069:
        totalTax += (income - 97069)*0.26
        income = 97069
    if income > 48535:
        totalTax += (income - 48535)*0.205
        income = 48535

    totalTax += income*0.15
    return round(totalTax, 2)
    